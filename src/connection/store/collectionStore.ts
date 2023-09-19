import type { CollectionApi } from '@/data/type/api/collectionApi';
import type { Collection } from '@/data/type/app/collection';
import type { ReadCollectionInput } from '@/data/repository/collectionRepository';
import { $readCollections, $readCollection } from '@/data/repository/collectionRepository';
import { $useCollectionStorage, $useCollectionsStorage } from '@/data/storage/collectionStorage';
import { createFetcher } from '@/connection/helper/fetcher';
import {
    parseDateStringToTimestamp,
    parseRenderedStringArray,
    parseValueToString,
} from '@/connection/helper/dataMap';

function createCollection(input: CollectionApi): Collection {
    return {
        id: input.id,
        changed: parseDateStringToTimestamp(input.changed),
        title: parseValueToString(input.title),
        private_title: parseValueToString(input.field_private_title),
        items: parseRenderedStringArray(input.field_item),
    };
}

export const getCollection = createFetcher<ReadCollectionInput, Collection>(
    async (input) => {
        const { data } = await $readCollection(input);
        const firstItem = data.data[0];

        return createCollection(firstItem);
    },
    $useCollectionStorage,
    {
        log: 'getCollection',
    },
);

export const getCollections = createFetcher<never, Collection[]>(
    async () => {
        const { data } = await $readCollections();

        return data.data.map(createCollection);
    },
    $useCollectionsStorage,
    {
        log: 'getCollections',
    },
);
