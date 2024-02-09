<script setup lang="ts">
import type {
    Reorder,
    Emits as VArticleItemListEmits,
} from '@/container/list/VArticleItemList/VArticleItemList.vue';
import type { SearchDownloadApi, SearchIssueApi, SearchTaskApi } from '@/data/type/api/searchApi';
import type { SolvedEnumId } from '@/data/type/api/solvedApi';
import type { Collection } from '@/data/type/app/collection';
import type { CollectionItem } from '@/data/type/app/field/collectionItem';
import type { CollectionSeparator } from '@/data/type/app/field/collectionSeparator';
import type { Subtitle } from '@/data/type/app/subtitle';
import type { AllowedTypes } from '@/presentation/type/favorite';
import type { AlertInput, IonModal, RefresherCustomEvent, SelectCustomEvent } from '@ionic/vue';
import type { ComputedRef, Ref } from 'vue';
import {
    actionSheetController,
    alertController,
    IonLabel,
    IonList,
    IonSegment,
    IonSegmentButton,
    IonSelectOption,
    onIonViewWillEnter,
} from '@ionic/vue';
import { checkmark, close } from 'ionicons/icons';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { devLog } from '@/application/helper/log';
import { $t } from '@/application/translation';
import { closeModal, openModal } from '@/connection/helper/modal';
import { createRefresherHandler } from '@/connection/helper/refresher';
import { createToast } from '@/connection/helper/toast';
import { RouteName } from '@/connection/router/routeName';
import {
    cloneCollection,
    deleteCollection,
    getCollectionItemsCount,
    getLearnedCollectionItemsCount,
    isCollectionItem,
    isCollectionSeparator,
    mapSearchResultsToCollectionItem,
    mapSubtitleToCollectionSeparator,
    navigateToCollectionById,
    updateCollectionInStorage,
    useCollection,
    useCollectionLive,
} from '@/store/collectionStore';
import { useArticleSearch } from '@/store/searchStore';
import { useSubtitles, useSubtitlesLive } from '@/store/subtitleStore';
import { cn, getBorder } from '@/presentation/helper/style';
import VCollectionHeader from '@/layout/header/VCollectionHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VArticleItemList from '@/container/list/VArticleItemList/VArticleItemList.vue';
import VFavoriteWrapper from '@/container/wrapper/VFavoriteWrapper/VFavoriteWrapper.vue';
import VModalFooter from '@/molecule/modal/VModalFooter/VModalFooter.vue';
import VLearnProgress from '@/molecule/progress/VLearnProgress/VLearnProgress.vue';
import VArticleInfoSlide from '@/molecule/slide/VArticleInfoSlide/VArticleInfoSlide.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VPlaceholderButton from '@/atom/button/VPlaceholderButton/VPlaceholderButton.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import VInput from '@/atom/input/VInput/VInput.vue';
import VTextarea from '@/atom/input/VTextarea/VTextarea.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VModal from '@/atom/modal/VModal/VModal.vue';
import VRefresher from '@/atom/refresher/VRefresher/VRefresher.vue';
import VSearchBar from '@/atom/search/VSearchBar/VSearchBar.vue';
import VSelect from '@/atom/select/VSelect/VSelect.vue';

export interface Props {
    id: string;
}

interface Item {
    id: string;
    type: AllowedTypes;
}

enum AddItemSelectOption {
    ADD_ARTICLE = 'add-article',
    ADD_HEADLINE = 'add-headline',
}

enum SegmentValue {
    SEARCH = 'search',
    SELECTED = 'selected',
}

type SearchApiType = SearchTaskApi | SearchIssueApi | SearchDownloadApi;

const props = defineProps<Props>();
const router = useRouter();

const { data: collection, getData: getCollection } = useCollection({
    params: {
        id: props.id,
    },
});

const { getData: getCollectionLive } = useCollectionLive({
    params: {
        id: props.id,
    },
});

const { data: subtitles, getData: getSubtitles } = useSubtitles();
const { getData: getSubtitlesLive } = useSubtitlesLive();
const addArticleModal: Ref<InstanceType<typeof IonModal> | null> = ref(null);
const editModal: Ref<InstanceType<typeof IonModal> | null> = ref(null);
const addNoteModal: Ref<InstanceType<typeof IonModal> | null> = ref(null);
const copyCollectionModal: Ref<InstanceType<typeof IonModal> | null> = ref(null);
const searchInputString: Ref<string> = ref('');
const selectedSegment: Ref<'search' | 'selected'> = ref('search');
const updatedTitle: Ref<string> = ref('');
const copyCollectionTitle: Ref<string> = ref('');
const reorderedItems: Item[] = [];
const checkedArticles: Ref<VArticleItemListEmits['onCheck']['items']> = ref([]);
const collectionKey: Ref<number> = ref(0);
const selectKey: Ref<number> = ref(0);
const tempNote: Ref<string> = ref('');
const tempItemTitleToEditNote: Ref<string | undefined> = ref();
const tempItemIdToEditNote: Ref<string | undefined> = ref();

const searchResults: Ref<(SearchTaskApi | SearchIssueApi | SearchDownloadApi)[] | undefined> =
    ref();

const tempNewSearchedArticlesList: Ref<(SearchTaskApi | SearchIssueApi | SearchDownloadApi)[]> =
    ref([]);

const collectionHasOnlyOneItem: ComputedRef<boolean> = computed(() => {
    return collection.value?.items.length === 1;
});

const collectionItemsForModal: ComputedRef<void | Item[]> = computed(() => {
    if (!collection.value?.items.length) {
        return;
    }

    return collection.value.items.reduce((result: Item[], item) => {
        if (isCollectionSeparator(item)) {
            result.push({
                id: item.field_category.id,
                type: item.field_category.type,
            });

            return result;
        }

        result.push({
            id: item.field_item.id,
            type: item.field_item.type,
        });

        return result;
    }, []);
});

const subscribeBtnText: ComputedRef<string> = computed(() => {
    if (collection.value && collection.value.isSubscribed) {
        return $t.collection.unsubscribe;
    }

    return $t.collection.subscribe;
});

const subscribeIcon: ComputedRef<string> = computed(() => {
    if (collection.value && collection.value.isSubscribed) {
        return 'icon/collection-unsubscribe.svg';
    }

    return 'icon/collection-subscribe.svg ';
});

const collectionWithReorderedItems: ComputedRef<(CollectionItem | CollectionSeparator)[]> =
    computed(() => {
        return reorderedItems.reduce((result: (CollectionItem | CollectionSeparator)[], item) => {
            const collectionFound = collection.value?.items.find((collection) => {
                if (isCollectionSeparator(collection)) {
                    return collection.field_category.id === item.id;
                }

                return collection.field_item.id === item.id;
            });

            if (!collectionFound) {
                return result;
            }

            result.push(collectionFound);

            return result;
        }, []);
    });

const isMyCollection: ComputedRef<boolean | undefined> = computed(() => {
    return collection.value?.isMyCollection;
});

async function updateItemsOrder({ items }: Reorder): Promise<void> {
    reorderedItems.length = 0;

    items.forEach((item) => {
        reorderedItems.push({
            id: item.id,
            type: item.type,
        });
    });
}

function updateCheckedItems({ items }: VArticleItemListEmits['onCheck']): void {
    checkedArticles.value = items;
}

async function deleteCollectionItem(item: VArticleItemListEmits['onDelete']): Promise<void> {
    if (collectionHasOnlyOneItem.value) {
        closeModal(editModal.value);
    }

    if (!collection || !collection.value) {
        return;
    }

    const newItems = collection.value.items.filter((collectionItem) => {
        if (isCollectionSeparator(collectionItem)) {
            return collectionItem.field_category.id !== item.id;
        }

        return collectionItem.field_item.id !== item.id;
    });

    await updateCollectionInStorage({
        ...collection.value,
        items: newItems,
    });

    await getCollection();

    collectionKey.value = Math.random();
}

async function removeCheckedArticles(): Promise<void> {
    if (!checkedArticles.value.length || !collection.value?.items.length) {
        return;
    }

    const filteredItems: (CollectionItem | CollectionSeparator)[] = collection.value.items.filter(
        (item) => {
            if (isCollectionSeparator(item)) {
                return true;
            }

            return !checkedArticles.value.find(
                (article) =>
                    article.id === item.field_item.id && article.type === item.field_item.type,
            );
        },
    );

    await updateCollectionInStorage({
        ...collection.value,
        items: filteredItems,
    });

    checkedArticles.value = [];

    await getCollection();
    collectionKey.value = Math.random();
}

async function getSearchResults(): Promise<void> {
    if (!searchInputString.value) {
        return;
    }

    const { data: results, getData: getResults } = useArticleSearch({
        params: {
            fulltext: searchInputString.value || '',
        },
    });

    await getResults();

    searchResults.value = results.value?.data;
}

function findSearchedArticleInCollectionById(
    collectionItem: SearchTaskApi | SearchIssueApi | SearchDownloadApi,
): CollectionItem | void {
    if (!searchResults.value || !collection.value || !collection.value.items.length) {
        return;
    }

    const item = collection.value.items.find((item) => {
        if (!isCollectionItem(item)) {
            return false;
        }

        return item.field_item.id === collectionItem.id;
    });

    return item as CollectionItem;
}

function toggleArticleInTempList(article: SearchApiType): void {
    const articleInTempList = tempNewSearchedArticlesList.value.find(
        (object) => object.id === article.id && object.type === article.type,
    );

    if (articleInTempList) {
        tempNewSearchedArticlesList.value = tempNewSearchedArticlesList.value.filter(
            (object) => !(object.id === article.id && object.type === article.type),
        );

        return;
    }

    tempNewSearchedArticlesList.value.push(article);
}

async function saveNewItemsToMyCollection(): Promise<void> {
    if (!collection.value || !tempNewSearchedArticlesList.value.length) {
        return;
    }

    const newArticles = tempNewSearchedArticlesList.value.filter((article) => {
        return !collection.value?.items?.find((item) => {
            const fieldItem = isCollectionItem(item) ? item.field_item : undefined;

            return fieldItem?.id === article.id && fieldItem?.type === article.type;
        });
    });

    const mappedItemsToCollectionItem: ComputedRef<CollectionItem[]> = computed(() => {
        return mapSearchResultsToCollectionItem(newArticles);
    });

    await updateCollectionInStorage({
        ...collection.value,
        items: [...collection.value.items, ...mappedItemsToCollectionItem.value],
    });

    await getCollection();

    createToast(`${newArticles.length} ${$t.collection.articlesAddedToCollection}`);

    tempNewSearchedArticlesList.value = [];
}

async function saveEditedCollection(): Promise<void> {
    if (reorderedItems.length) {
        if (!collection.value || !collection.value.items.length) {
            return;
        }

        const newCollection = {
            ...collection.value,
            items: collectionWithReorderedItems.value,
        };

        await updateCollectionInStorage(newCollection);

        await getCollection();
    }

    if (!collection.value) {
        return;
    }

    if (!updatedTitle.value.length) {
        return;
    }

    if (updatedTitle.value.length) {
        collection.value = {
            ...collection.value,
            private_title: updatedTitle.value,
        };
    }

    updatedTitle.value = '';

    return updateCollectionInStorage(collection.value);
}

const alertHeadlineInputs: ComputedRef<AlertInput[] | undefined> = computed(() => {
    if (!subtitles.value || !collection.value) {
        return;
    }

    // initially thought we don't want same headline multiple times, but it's actually fine
    return subtitles.value.map((subtitle) => {
        return {
            name: subtitle.name,
            type: 'checkbox',
            label: subtitle.name,
            value: subtitle,
        };
    });
});

const openAddHeadlineAlert = async (): Promise<void> => {
    if (!subtitles.value || !alertHeadlineInputs.value) {
        return;
    }

    const alert = await alertController.create({
        header: $t.collection.addHeadline,
        inputs: alertHeadlineInputs.value,
        buttons: [
            {
                text: $t.cancel,
                role: 'cancel',
            },
            {
                text: $t.confirm,
                role: 'confirm',
                handler: addSubtitlesToCollection,
            },
        ],
    });

    return alert.present();
};

async function addSubtitlesToCollection(subtitles: Subtitle[]): Promise<void> {
    if (!collection.value || !subtitles.length) {
        return;
    }

    const collectionSeparators: CollectionSeparator[] = subtitles.map(
        mapSubtitleToCollectionSeparator,
    );

    collection.value = {
        ...collection.value,
        items: [...collection.value.items, ...collectionSeparators],
    };

    await updateCollectionInStorage(collection.value);
    await getCollection();
    collectionKey.value = Math.random();
}

const updateSelectedSegment = (event: CustomEvent) => {
    selectedSegment.value = event.detail.value;
};

async function updateLearnedCount({
    id,
    learnStatusId,
}: {
    id: string;
    learnStatusId: SolvedEnumId | string;
}): Promise<void> {
    if (!collection.value) {
        return;
    }

    const newCollectionItems = collection.value.items.map((item) => {
        if (isCollectionItem(item) && id === item.field_item.id) {
            item.field_solved_id = learnStatusId;
        }

        return item;
    });

    const newCollection: Collection = {
        ...collection.value,
        items: newCollectionItems,
    };

    await updateCollectionInStorage(newCollection);

    await getCollection();
}

async function openDeleteCollectionConfirmationSheet(): Promise<void> {
    const actionSheet = await actionSheetController.create({
        header: $t.collection.confirmDeleteCollectionHeader(collection.value?.private_title || ''),
        buttons: [
            {
                text: $t.collection.confirmDeleteCollection,
                role: 'destructive',
                data: {
                    action: 'delete',
                },
                handler: deleteMyCollection,
            },
            {
                text: $t.cancel,
                role: 'cancel',
                data: {
                    action: 'cancel',
                },
            },
        ],
    });

    return actionSheet.present();
}

async function openDeleteMultipleItemsConfirmationSheet(): Promise<void> {
    const actionSheet = await actionSheetController.create({
        header: $t.collection.confirmDeleteMultipleArticlesHeader(checkedArticles.value.length),
        buttons: [
            {
                text: $t.collection.confirmDeleteMultipleArticles,
                role: 'destructive',
                data: {
                    action: 'delete',
                },
                handler: removeCheckedArticles,
            },
            {
                text: $t.cancel,
                role: 'cancel',
                data: {
                    action: 'cancel',
                },
            },
        ],
    });

    return actionSheet.present();
}

async function openDeleteItemConfirmationSheet(
    item: VArticleItemListEmits['onDelete'],
): Promise<void> {
    const itemName: ComputedRef<string> = computed(() => {
        if (!collection.value || !collection.value.items.length) {
            return '';
        }

        return collection.value.items.reduce(
            (result: string, collectionItem: CollectionItem | CollectionSeparator) => {
                if (result) {
                    return result;
                }

                if (
                    isCollectionSeparator(collectionItem) &&
                    collectionItem.field_category.id === item.id
                ) {
                    return collectionItem.field_category.name;
                }

                if (isCollectionItem(collectionItem) && collectionItem.field_item.id === item.id) {
                    return collectionItem.field_item.title;
                }

                return '';
            },
            '',
        );
    });

    const actionSheet = await actionSheetController.create({
        header: $t.collection.confirmDeleteArticleHeader(itemName.value),
        buttons: [
            {
                text: $t.collection.confirmDeleteArticle(itemName.value),
                role: 'destructive',
                data: {
                    action: 'delete',
                },
                handler: () => deleteCollectionItem(item),
            },
            {
                text: $t.cancel,
                role: 'cancel',
                data: {
                    action: 'cancel',
                },
            },
        ],
    });

    return actionSheet.present();
}

async function deleteMyCollection(): Promise<void> {
    if (!collection.value) {
        return;
    }

    await deleteCollection(collection.value);
    closeModal(editModal.value);

    return navigateBackToCollectionIndex();
}

function isSearchedArticleSelected(
    article: SearchTaskApi | SearchIssueApi | SearchDownloadApi,
): boolean {
    return tempNewSearchedArticlesList.value.some(
        (object) => object.id === article.id && object.type === article.type,
    );
}

function navigateBackToCollectionIndex() {
    // replace will replace the current history entry, so the user can't go back to the deleted collection
    router.replace({
        name: RouteName.COLLECTION_INDEX,
    });
}

function openHistory(): void {
    // @TODO: not sure what we're supposed to show here. probably related to the slider we also need on the Home page
    devLog('openHistory');
}

async function toggleSubscribe(): Promise<void> {
    if (!collection.value) {
        return;
    }

    const newCollection = {
        ...collection.value,
        isSubscribed: !collection.value.isSubscribed,
    };

    await updateCollectionInStorage(newCollection);
    await getCollection();
}

function handleAddItemSelect(selectedValue: SelectCustomEvent): void {
    selectKey.value = Math.random();

    if (selectedValue.detail.value === AddItemSelectOption.ADD_ARTICLE) {
        openModal(addArticleModal?.value);

        return;
    }

    if (selectedValue.detail.value === AddItemSelectOption.ADD_HEADLINE) {
        openAddHeadlineAlert();

        return;
    }
}

function openCopyCollectionModal() {
    copyCollectionTitle.value = `${collection.value?.private_title} (Kopie)`;
    openModal(copyCollectionModal.value);
}

function openNoteModal(id: string) {
    const collectionItem = collection.value?.items.find((item) => {
        if (isCollectionSeparator(item)) {
            return false;
        }

        return item.field_item.id === id;
    });

    if (!collectionItem || !isCollectionItem(collectionItem)) {
        return;
    }

    tempItemIdToEditNote.value = collectionItem.id;
    tempItemTitleToEditNote.value = collectionItem.field_item.title;
    tempNote.value = collectionItem.field_note;
    openModal(addNoteModal.value);
}

async function copyCollection(title: string): Promise<void> {
    if (!collection.value) {
        return;
    }

    const newCollection = await cloneCollection(collection.value, title);

    return navigateToCollectionById(newCollection.id);
}

async function toggleLearnMode(learnMode: boolean) {
    if (!collection.value) {
        return;
    }

    const newCollection: Collection = {
        ...collection.value,
        isLearnMode: learnMode,
    };

    await updateCollectionInStorage(newCollection);

    await getCollection();
}

async function saveNoteToItem() {
    if (!collection.value || !tempItemIdToEditNote.value) {
        return;
    }

    const newCollectionItems = collection.value.items.map((item) => {
        if (isCollectionItem(item) && tempItemIdToEditNote.value === item.id) {
            item.field_note = tempNote.value;
        }

        return item;
    });

    const newCollection: Collection = {
        ...collection.value,
        items: newCollectionItems,
    };

    await updateCollectionInStorage(newCollection);
    await getCollection();
}

async function handleRefresh(event: RefresherCustomEvent): Promise<void> {
    await createRefresherHandler({
        event: event,
        callback: async () => {
            await getCollectionLive();
            await getSubtitlesLive();
            await getCollection();
            await getSubtitles();
        },
    });
}

onIonViewWillEnter(() => {
    if (collection.value && collection.value.isMyCollection && collection.value.isSubscribed) {
        // @TODO: temporary warning while we are working on the feature. to remove once we have a proper solution
        devLog(
            'Warning: isMyCollection and isSubscribed are both true. This should not be possible.',
            collection.value.id,
        );
    }

    getCollection();
    getSubtitles();
});
</script>

<template>
    <v-page modifier="v-p-0 md:v-p-0">
        <v-loader :logs="['useCollection', 'useCollectionByTitle', 'useTask', 'useIssue']" />

        <template #refresher>
            <v-refresher v-if="!collection?.isMyCollection" @ion-refresh="handleRefresh" />
        </template>

        <template #header>
            <v-collection-header
                :is-my-collection="collection?.isMyCollection"
                :is-subscribed="collection?.isSubscribed"
                @on-copy-collection="openCopyCollectionModal"
                @on-open-history="openHistory"
                @on-open-edit-modal="openModal(editModal)"
                @on-toggle-subscribe="toggleSubscribe"
            >
                <template v-if="collection">
                    {{ collection.private_title }}
                </template>

                <template v-if="collection" #sub-title>{{ collection.title }}</template>
            </v-collection-header>
        </template>

        <template v-if="collection">
            <template v-if="getCollectionItemsCount(collection)">
                <v-learn-progress
                    v-if="isMyCollection"
                    :current="getLearnedCollectionItemsCount(collection)"
                    :max="getCollectionItemsCount(collection)"
                    modifier="v-my-box-lg v-px-box-xl"
                    :is-learn-mode="collection.isLearnMode"
                    @on-toggle="toggleLearnMode"
                >
                    <template #left-side>
                        <v-select
                            :key="selectKey"
                            :placeholder="$t.collection.addContent"
                            @ion-change="handleAddItemSelect"
                        >
                            <template #option>
                                <ion-select-option :value="AddItemSelectOption.ADD_ARTICLE">
                                    + {{ $t.collection.addArticle }}
                                </ion-select-option>

                                <ion-select-option :value="AddItemSelectOption.ADD_HEADLINE">
                                    + {{ $t.collection.addHeadline }}
                                </ion-select-option>
                            </template>
                        </v-select>
                    </template>
                </v-learn-progress>

                <div v-for="(item, index) in collection.items" :key="item.id">
                    <h2
                        v-if="isCollectionSeparator(item)"
                        class="v-h3 v-border-b v-border-b-gray-50 v-px-box v-py-box-xl v-font-bold"
                    >
                        {{ item.field_category.name }}
                    </h2>

                    <v-favorite-wrapper
                        v-else
                        :id="item.field_item.id"
                        :type="item.field_item.type"
                    >
                        <template #default="{ branch, subtitle, handleFavorite, isFavorite, link }">
                            <router-link
                                :to="link"
                                :class="`v-block v-border-gray-50 ${getBorder(index)}`"
                            >
                                <v-article-info-slide
                                    :id="item.field_item.id"
                                    :type="item.field_item.type"
                                    :learn-status="item.field_solved_id"
                                    :title="item.field_item.title"
                                    :subtitle="subtitle"
                                    :branch="branch"
                                    :is-favorite="isFavorite"
                                    :is-learn-mode="collection.isLearnMode"
                                    :is-my-collection="collection.isMyCollection"
                                    :has-note="Boolean(item.field_note)"
                                    @on-favorite="handleFavorite"
                                    @on-edit-note="openNoteModal"
                                    @on-learn-status-click="updateLearnedCount"
                                    @on-delete="openDeleteItemConfirmationSheet(item.field_item)"
                                >
                                    <template v-if="item.field_note" #after>
                                        <p class="v-text-h5">Notiz:</p>

                                        <p class="v-text-h5 v-text-gray">
                                            {{ item.field_note }}
                                        </p>
                                    </template>
                                </v-article-info-slide>
                            </router-link>
                        </template>
                    </v-favorite-wrapper>
                </div>
            </template>

            <template v-if="isMyCollection && !getCollectionItemsCount(collection)">
                <p class="v-p v-mt-box-xl v-px-box-xl">{{ $t.collection.noItemsParagraph }}</p>

                <div class="v-mt-box-xl v-px-box-xl">
                    <v-placeholder-button type="add" @click="openModal(addArticleModal)" />
                </div>
            </template>

            <template v-if="!isMyCollection">
                <v-button modifier="v-mt-box-md v-p-box v-w-full" @click="toggleSubscribe">
                    <v-icon :src="subscribeIcon" with-space-right />

                    {{ subscribeBtnText }}
                </v-button>
            </template>

            <v-modal ref="addArticleModal" with-save @on-confirm="saveNewItemsToMyCollection">
                <template #title>{{ $t.collection.addArticle }}</template>

                <ion-segment
                    v-model="selectedSegment"
                    :value="SegmentValue.SEARCH"
                    class="v-mb-2 v-p-1"
                    @ion-change="updateSelectedSegment"
                >
                    <ion-segment-button :value="SegmentValue.SEARCH">
                        <ion-label>
                            {{ $t.search.collectionArticleSearchSegmentSearch }}
                        </ion-label>
                    </ion-segment-button>

                    <ion-segment-button :value="SegmentValue.SELECTED">
                        <ion-label>
                            {{ $t.search.collectionArticleSearchSegmentSelected }}
                            {{ tempNewSearchedArticlesList.length }}
                        </ion-label>
                    </ion-segment-button>
                </ion-segment>

                <template v-if="selectedSegment === SegmentValue.SEARCH">
                    <div class="v-mt-box-md">
                        <v-search-bar
                            v-model="searchInputString"
                            :placeholder="$t.search.globalSearchPlaceholder"
                            @on-submit="getSearchResults"
                        />
                    </div>

                    <v-loader :logs="['useArticleSearch']" />

                    <template v-if="searchResults">
                        <div v-for="result in searchResults" :key="result.id">
                            <ion-list
                                :class="
                                    cn(
                                        'v-mt-box v-flex v-items-center v-justify-between v-rounded-sm v-border v-border-gray-50 v-p-box-sm',
                                        {
                                            'v-border-2 v-border-black':
                                                isSearchedArticleSelected(result),
                                            'v-border-2 v-border-purple-50 v-text-purple-50':
                                                Boolean(
                                                    findSearchedArticleInCollectionById(result),
                                                ),
                                        },
                                    )
                                "
                                @click="toggleArticleInTempList(result)"
                            >
                                {{ result.title }}
                                <v-icon
                                    v-if="
                                        isSearchedArticleSelected(result) ||
                                        Boolean(findSearchedArticleInCollectionById(result))
                                    "
                                    with-space-left
                                    :icon="checkmark"
                                />
                            </ion-list>
                        </div>
                    </template>
                </template>

                <template v-if="selectedSegment === SegmentValue.SELECTED">
                    <h3 class="v-h3 v-mb-box-xs v-mt-box-md v-font-bold">
                        {{ $t.search.collectionArticleSearchHeadline }}
                    </h3>

                    <template v-if="!tempNewSearchedArticlesList.length">
                        <p class="v-p">{{ $t.search.collectionArticleSearch1 }}</p>

                        <p class="v-p">{{ $t.search.collectionArticleSearch2 }}</p>
                    </template>

                    <template v-if="tempNewSearchedArticlesList.length">
                        <template v-for="article in tempNewSearchedArticlesList" :key="article.id">
                            <ion-list
                                class="v-mt-box v-flex v-items-center v-justify-between v-rounded-sm v-border v-border-gray-50 v-p-box-sm"
                                :class="{
                                    'v-border-2 !v-border-black':
                                        isSearchedArticleSelected(article),
                                }"
                            >
                                {{ article.title }}
                                <v-icon
                                    v-if="isSearchedArticleSelected(article)"
                                    :icon="close"
                                    @click="toggleArticleInTempList(article)"
                                />
                            </ion-list>
                        </template>
                    </template>
                </template>
            </v-modal>

            <v-modal
                ref="editModal"
                trigger="collections-edit-modal"
                with-save
                @on-confirm="saveEditedCollection"
            >
                <template #title>{{ $t.collection.editCollectionTitle }}</template>

                <p class="v-text-sm">{{ $t.collection.editTitleField }}</p>

                <v-input
                    v-model="updatedTitle"
                    :placeholder="collection.private_title"
                    modifier="v-mt-box"
                />

                <v-article-item-list
                    v-if="collectionItemsForModal"
                    :key="collectionKey"
                    :items="collectionItemsForModal"
                    @on-reorder="updateItemsOrder"
                    @on-check="updateCheckedItems"
                    @on-delete="openDeleteItemConfirmationSheet"
                />

                <template #footer>
                    <v-modal-footer>
                        <template #before>
                            <v-button
                                v-if="checkedArticles.length"
                                modifier="v-w-full"
                                color="tertiary"
                                @click="openDeleteMultipleItemsConfirmationSheet"
                            >
                                {{ $t.collection.deleteArticle }}
                            </v-button>
                        </template>

                        <v-button
                            modifier="v-w-full"
                            color="secondary"
                            @click="openDeleteCollectionConfirmationSheet"
                        >
                            {{ $t.collection.deleteCollection }}
                        </v-button>
                    </v-modal-footer>
                </template>
            </v-modal>

            <v-modal ref="addNoteModal" with-save @on-confirm="saveNoteToItem">
                <template #title>{{ $t.collection.addNoteModalTitle }}</template>

                <p class="v-p">
                    {{
                        $t.collection.addNoteModalHeadline(
                            tempItemTitleToEditNote || '',
                            collection.private_title,
                        )
                    }}
                </p>

                <v-textarea v-model="tempNote" modifier="v-mt-box-xs" />
            </v-modal>

            <v-modal
                ref="copyCollectionModal"
                with-save
                @on-confirm="copyCollection(copyCollectionTitle)"
            >
                <template #title>{{ $t.collection.copyCollectionTitle }}</template>

                <p class="v-text-sm">{{ $t.collection.copyTitleField }}</p>

                <v-input v-model="copyCollectionTitle" modifier="v-mt-box" />

                <p class="v-mt-box v-text-secondary">{{ $t.collection.copyCollectionInfo }}</p>
            </v-modal>
        </template>
    </v-page>
</template>
