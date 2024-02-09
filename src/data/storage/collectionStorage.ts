import type {
    ReadCollectionByIdInput,
    ReadCollectionByTitleInput,
} from '@/data/repository/collectionRepository';
import type { Collection } from '@/data/type/app/collection';
import {
    createStorage,
    createStorageHandler,
    defaultStorageReadMany,
    defaultStorageReadSingle,
} from '@/data/helper/storage';

const collectionStorage = createStorage<{ [id: string]: Collection }>('collection');

export const $useCollectionsStorage = createStorageHandler<never, Collection[]>({
    async read() {
        return defaultStorageReadMany(collectionStorage);
    },

    async write(data) {
        if (!data.length) {
            return;
        }

        const collections = (await collectionStorage.read()) || {};

        data.forEach((collection) => {
            collections[collection.id] = collection;
        });

        return collectionStorage.write(collections);
    },
});

export const $useCollectionStorage = createStorageHandler<ReadCollectionByIdInput, Collection>({
    async read(input) {
        return defaultStorageReadSingle(collectionStorage, input);
    },

    async write(data) {
        const collections = (await collectionStorage.read()) || {};
        const collectionId = data.id;

        collections[collectionId] = data;

        return collectionStorage.write(collections);
    },
});

// remove this and create 1 function to do the job and export it
export const $useCollectionDeleteStorage = createStorageHandler<
    ReadCollectionByIdInput,
    Collection
>({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async read() {},
    async write(data) {
        const collections = (await collectionStorage.read()) || {};
        const collectionId = data.id;

        if (collections[collectionId]) {
            delete collections[collectionId];
        }

        return collectionStorage.write(collections);
    },
});

export const $useCollectionByTitleStorage = createStorageHandler<
    ReadCollectionByTitleInput,
    Collection
>({
    async read(input) {
        const collectionTitle = input?.params.title;

        if (!collectionTitle) {
            return;
        }

        const collections = (await collectionStorage.read()) || {};

        if (!Object.values(collections).length) {
            return;
        }

        const collection = Object.values(collections).find(
            (collection) => collection.title === collectionTitle,
        );

        if (!collection) {
            return;
        }

        return collection;
    },

    async write(data) {
        const collections = (await collectionStorage.read()) || {};
        const collectionId = data.id;

        collections[collectionId] = data;

        return collectionStorage.write(collections);
    },
});

export const $useMyCollections = createStorageHandler<ReadCollectionByTitleInput, Collection[]>({
    async read() {
        const collections = (await collectionStorage.read()) || {};

        if (!Object.values(collections).length) {
            return;
        }

        const collection = Object.values(collections).filter(
            (collection) => collection.isMyCollection,
        );

        if (!collection.length) {
            return;
        }

        return collection;
    },

    async write(data) {
        if (!data.length) {
            return;
        }

        const collections = (await collectionStorage.read()) || {};

        data.forEach((collection) => {
            collections[collection.id] = collection;
        });

        return collectionStorage.write(collections);
    },
});
