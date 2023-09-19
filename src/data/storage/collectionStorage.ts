import type { ReadCollectionInput } from '@/data/repository/collectionRepository';
import type { Collection } from '@/data/type/app/collection';
import { mergeDeepRight } from 'ramda';
import { createStorage, createStorageHandler } from '@/data/helper/storage';

const collectionStorage = createStorage<{ [id: string]: Collection }>('collection');

export const $useCollectionsStorage = createStorageHandler<ReadCollectionInput, Collection[]>({
    async read() {
        const collections = (await collectionStorage.read()) || {};

        if (!Object.values(collections).length) {
            return;
        }

        return Object.values(collections);
    },

    async write(data) {
        const collections = (await collectionStorage.read()) || {};

        data.forEach((collection) => {
            if (!collections[collection.id]) {
                collections[collection.id] = collection;
            }

            if (collections[collection.id]) {
                collections[collection.id] = mergeDeepRight(
                    collections[collection.id] || {},
                    collection,
                );
            }
        });

        return collectionStorage.write(collections);
    },
});

export const $useCollectionStorage = createStorageHandler<ReadCollectionInput, Collection>({
    async read(input) {
        const collectionId = input?.params.id;

        if (!collectionId) {
            return;
        }

        const collections = (await collectionStorage.read()) || {};

        return collections[collectionId];
    },

    async write(data) {
        const collections = (await collectionStorage.read()) || {};
        const collectionId = data.id;

        if (!Object.keys(collections).length) {
            return collectionStorage.write({
                [collectionId]: data,
            });
        }

        if (!collections[collectionId]) {
            collections[collectionId] = data;

            return collectionStorage.write(collections);
        }

        collections[collectionId] = mergeDeepRight(collections[collectionId] || {}, data);

        return collectionStorage.write(collections);
    },
});
