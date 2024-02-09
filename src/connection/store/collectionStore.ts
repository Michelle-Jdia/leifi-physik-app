import type {
    ReadCollectionByIdInput,
    ReadCollectionByTitleInput,
} from '@/data/repository/collectionRepository';
import type { CollectionApi } from '@/data/type/api/collectionApi';
import type { CollectionItemApi } from '@/data/type/api/field/collectionItemApi';
import type { CollectionSeparatorApi } from '@/data/type/api/field/collectionSeparatorApi';
import type { SearchDownloadApi, SearchIssueApi, SearchTaskApi } from '@/data/type/api/searchApi';
import type { Collection } from '@/data/type/app/collection';
import type { Download } from '@/data/type/app/download';
import type { CollectionItem } from '@/data/type/app/field/collectionItem';
import type { CollectionSeparator } from '@/data/type/app/field/collectionSeparator';
import type { Issue } from '@/data/type/app/issue';
import type { Subtitle } from '@/data/type/app/subtitle';
import type { Task } from '@/data/type/app/task';
import type { AllowedTypes } from '@/presentation/type/favorite';
import { warning } from 'ionicons/icons';
import { $t } from '@/application/translation';
import { $readCollection, $readCollectionByTitle } from '@/data/repository/collectionRepository';
import {
    $useCollectionByTitleStorage,
    $useCollectionDeleteStorage,
    $useCollectionsStorage,
    $useCollectionStorage,
    $useMyCollections,
} from '@/data/storage/collectionStorage';
import { SolvedEnumId } from '@/data/type/api/solvedApi';
import { ContentType, isIssueObjectType } from '@/data/type/helper/contentType';
import {
    generateAppID,
    parseCollectionItems,
    parseDateStringToTimestamp,
    parseValueToString,
} from '@/connection/helper/dataMap';
import { createFetcher, createReactiveData } from '@/connection/helper/fetcher';
import { createToast } from '@/connection/helper/toast';
import router from '@/connection/router';
import { RouteName } from '@/connection/router/routeName';
import { isSearchIssueApi, isSearchTaskApi } from '@/store/searchStore';

export const collectionFormatRegExp = new RegExp('^[a-z1-9]{6}$');

interface getCollectionItemCountInput {
    collections: Collection[];
    id: string;
    type: AllowedTypes;
}

function createCollection(input: CollectionApi): Collection {
    return {
        id: input.id,
        type: ContentType.COLLECTION,
        changed: parseDateStringToTimestamp(input.changed),
        title: parseValueToString(input.title),
        private_title: parseValueToString(input.field_private_title),
        items: parseCollectionItems(input.field_item),
        isMyCollection: false,
        isSubscribed: false,
        isLearnMode: false,
    };
}

export function mapSearchResultsToCollectionItem(
    articlesList: (SearchIssueApi | SearchTaskApi | SearchDownloadApi)[],
): CollectionItem[] {
    return articlesList.map((item) => {
        const issueCategory = isSearchIssueApi(item) ? item.field_issue_category?.meta.name : '';

        const referencedTopicId =
            isSearchIssueApi(item) || isSearchTaskApi(item) ? item.field_referenced_topic?.id : '';

        return {
            type: ContentType.COLLECTION_ITEM,
            id: generateAppID(),
            field_note: '',
            field_important: false,
            field_solved_id: SolvedEnumId.NOT_LEARNED,
            field_item: {
                id: item.id,
                type: item.type,
                title: item.title,
                field_issue_category: issueCategory,
                field_referenced_topic_id: referencedTopicId,
            },
        };
    });
}

export function mapArticleToCollectionItem(article: Issue | Task | Download): CollectionItem {
    const issueCategory = isIssueObjectType(article) ? article.issue_category.name : '';

    return {
        type: ContentType.COLLECTION_ITEM,
        id: generateAppID(),
        field_note: '',
        field_important: false,
        field_solved_id: SolvedEnumId.NOT_LEARNED,
        field_item: {
            id: article.id,
            type: article.type,
            title: article.title,
            field_issue_category: issueCategory,
            field_referenced_topic_id: article.referenced_topic,
        },
    };
}

export function mapSubtitleToCollectionSeparator(input: Subtitle): CollectionSeparator {
    return {
        id: generateAppID(),
        type: ContentType.COLLECTION_SEPARATOR,
        field_category: {
            type: ContentType.SUBTITLE,
            id: input.id,
            name: input.name,
        },
    };
}

export const useCollection = createFetcher<ReadCollectionByIdInput, Collection>(
    async (input) => {
        const { data } = await $readCollection(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];
        const updatedCollection = await updateLocalCollectionWithFetchedData(firstItem);

        return updatedCollection;
    },
    $useCollectionStorage,
    {
        log: 'useCollection',
        useCache: true,
    },
);

export async function getLocalCollectionById(id: string): Promise<Collection | undefined> {
    const { data: collections, getData } = useLocalCollections();

    await getData();

    if (!collections.value?.length) {
        return;
    }

    return collections.value.find((collection) => collection.id === id);
}

export const useCollectionLive = createFetcher<ReadCollectionByIdInput, Collection>(
    async (input) => {
        const { data } = await $readCollection(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];
        const updatedCollection = await updateLocalCollectionWithFetchedData(firstItem);

        return updatedCollection;
    },
    $useCollectionStorage,
    {
        log: 'useCollectionLive',
        useCache: false,
    },
);

export const useCollectionByTitle = createFetcher<ReadCollectionByTitleInput, Collection>(
    async (input) => {
        const { data } = await $readCollectionByTitle(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];
        const updatedCollection = await updateLocalCollectionWithFetchedData(firstItem);

        return updatedCollection;
    },
    $useCollectionByTitleStorage,
    {
        log: 'useCollectionByTitle',
    },
);

async function updateLocalCollectionWithFetchedData(data: CollectionApi): Promise<Collection> {
    const localCollection = await getLocalCollectionById(data.id);
    const processed = createCollection(data);

    if (localCollection?.isMyCollection) {
        // we get the new articles but overwrite them with whatever we have locally (notes/learned)
        // @TODO: for v2.0. disabled for now, we have internal "fake" ids. to enable when we have drupal sync working
        return {
            ...localCollection,
            items: [...processed.items, ...localCollection.items],
        };
    }

    if (localCollection?.isSubscribed) {
        // subscribed collections we only need to keep our internal helper fields, everything else can/should be updated
        return {
            ...processed,
            isSubscribed: localCollection.isSubscribed,
            isMyCollection: localCollection.isMyCollection,
            isLearnMode: localCollection.isLearnMode,
        };
    }

    return processed;
}

export const useLocalCollections = createReactiveData($useCollectionsStorage.read);

export const useMyCollections = createReactiveData($useMyCollections.read);

export const updateCollectionInStorage = async (collection: Collection) => {
    return $useCollectionStorage.write(collection);
};

export const deleteCollection = async (collection: Collection) => {
    return $useCollectionDeleteStorage.write(collection);
};

export async function createNewCollection(input: { title: string }): Promise<Collection> {
    // generating temporary unique id and title, app specific. we'll have to sync to drupal later and get real id/title generated by drupal on creation
    // keep in mind that the title is being shown in the app
    const newCollection: Collection = {
        id: generateAppID(),
        type: ContentType.COLLECTION,
        changed: new Date().getTime(),
        title: '',
        private_title: input.title,
        items: [],
        isMyCollection: true,
        isSubscribed: false,
        isLearnMode: false,
    };

    await $useCollectionStorage.write(newCollection);

    return newCollection;
}

export async function cloneCollection(collection: Collection, title: string): Promise<Collection> {
    // @TODO also reset the ID's of all the items?

    const newItems = collection.items.map((item) => {
        if (isCollectionItem(item)) {
            return {
                ...item,
                id: generateAppID(),
                field_solved_id: SolvedEnumId.NOT_LEARNED,
                field_note: '',
            };
        }

        return item;
    });

    const newCollection = {
        ...collection,
        id: generateAppID(),
        title: '',
        private_title: title,
        isSubscribed: false,
        isMyCollection: true,
        items: newItems,
    };

    await $useCollectionStorage.write(newCollection);

    return newCollection;
}

export async function navigateToCollectionById(id: string): Promise<void> {
    router.push({
        name: RouteName.COLLECTION_ID,
        params: {
            id: id,
        },
    });
}

export async function searchCollectionByTitle(title: string): Promise<Collection | void> {
    const { data: collection, getData } = useCollectionByTitle({
        params: {
            title: title,
        },
    });

    await getData();

    if (!collection.value || !collection.value.id) {
        await createToast($t.search.collectionNotFound(title), {
            color: 'warning',
            icon: warning,
        });
    }

    return collection.value;
}

export function getLearnedCollectionItemsCount(collection: Collection): number {
    if (!collection) {
        return 0;
    }

    return collection.items.filter((item) => {
        if (isCollectionSeparator(item)) {
            return false;
        }

        return item.field_solved_id === SolvedEnumId.LEARNED;
    }).length;
}

export function getCollectionItemsCount(collection: Collection): number {
    return collection.items.filter((item) => !isCollectionSeparator(item)).length || 0;
}

export function getLearnedStatus(collection: Collection): string {
    if (!collection.isMyCollection) {
        return '';
    }

    const collectionItems = collection.items.filter((item) => isCollectionItem(item));

    if (!collectionItems?.length) {
        return '';
    }

    const maxLearnedCount = getCollectionItemsCount(collection);
    const learnedCount = getLearnedCollectionItemsCount(collection);

    return $t.collection.learnedCountBadge(learnedCount, maxLearnedCount);
}

export async function addArticleToMultipleCollections(
    article: Issue | Task | Download,
    collections: Collection[],
): Promise<void> {
    const collectionItem = mapArticleToCollectionItem(article);

    for (const collection of collections) {
        const existingItem = collection.items.find(
            (item) =>
                isCollectionItem(item) &&
                item.field_item.id === article.id &&
                item.field_item.type === article.type,
        );

        if (!existingItem) {
            collection.items = [...collection.items, collectionItem];

            // await is required, otherwise only 1 collection will be updated even when user selects multiple collections (inside loop)
            await updateCollectionInStorage(collection);
        }
    }
}

export function getCollectionItemCount({
    collections,
    id,
    type,
}: getCollectionItemCountInput): number {
    let count = 0;

    for (const collection of collections) {
        const item = findArticleInCollection(collection, id, type);

        if (item) {
            count++;
        }
    }

    return count;
}

export function findArticleInCollection(
    collection: Collection,
    id: string,
    type: AllowedTypes,
): CollectionItem | undefined {
    return collection.items.find((item): item is CollectionItem => {
        return isCollectionItem(item) && item.field_item.id === id && item.field_item.type === type;
    });
}

export function isCollectionItemApi(
    item: CollectionItemApi | CollectionSeparatorApi,
): item is CollectionItemApi {
    return item.type === ContentType.COLLECTION_ITEM;
}

export function isCollectionSeparatorApi(
    item: CollectionItemApi | CollectionSeparatorApi,
): item is CollectionSeparatorApi {
    return item.type === ContentType.COLLECTION_SEPARATOR;
}

export function isCollectionItem(
    item: CollectionItem | CollectionSeparator,
): item is CollectionItem {
    return item.type === ContentType.COLLECTION_ITEM;
}

export function isCollectionSeparator(
    item: CollectionItem | CollectionSeparator,
): item is CollectionSeparator {
    return item.type === ContentType.COLLECTION_SEPARATOR;
}
