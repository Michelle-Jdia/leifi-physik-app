import type { EndpointInput } from '@/data/helper/endpoint';
// import { mergeDeepRight } from 'ramda';
import { devLog } from '@/application/helper/log';
import { storage } from '@/data/helper/driver';

// list of "tables" which will be the keys to hold all the data. for autocomplete purposes (doesn't have to match routes or any other type)
export type StorageTable =
    | 'branch'
    | 'collection'
    | 'download'
    | 'favorite'
    | 'history'
    | 'issue'
    | 'link'
    | 'solved'
    | 'stateGrade'
    | 'subtitle'
    | 'system'
    | 'task'
    | 'topic'
    | 'time';

export type TimeStorageTable =
    | 'branch'
    | 'collection'
    | 'download'
    | 'issue'
    | 'link'
    | 'solved'
    | 'stateGrade'
    | 'subtitle'
    | 'task'
    | 'topic';

export interface StorageHandler<I, O> {
    read: (input?: I) => Promise<O | void>;
    write: (data: O, input?: I) => Promise<void>;
}

// export interface StorageHandler<O> {
//     read: () => Promise<O | void>;
//     write: (data: O) => Promise<void>;
// }

// export interface StorageHandlerWithInput<I, O> {
//     read: (input: I) => Promise<O | void>;
//     write: (data: O, input: I) => Promise<void>;
// }

// export function createStorageHandler<O>(implementation: StorageHandler<O>): StorageHandler<O>;

// export function createStorageHandler<I, O>(
//     implementation: StorageHandlerWithInput<I, O>,
// ): StorageHandlerWithInput<I, O>;

export function createStorageHandler<I, O>(
    implementation: StorageHandler<I, O>,
): StorageHandler<I, O> {
    return implementation;
}

export interface Storage<O> {
    read: () => Promise<O | void>;
    write: (data: O) => Promise<void>;
    clear: () => Promise<void>;
}

export const createStorage = <O>(key: StorageTable): Storage<O> => ({
    read: async (): Promise<O | void> => {
        try {
            const data = await storage.get(key);

            devLog(`read ${key} storage`);

            return data;
        } catch (error) {
            devLog(`error in ${key} storage:read`, {
                error,
            });

            throw error;
        }
    },

    write: async (data: O): Promise<void> => {
        try {
            await storage.set(key, data);

            devLog(`write ${key} storage`);
        } catch (error) {
            devLog(`error in ${key} storage:write`, {
                error,
            });

            throw error;
        }
    },

    clear: async (): Promise<void> => {
        try {
            await storage.remove(key);
        } catch (error) {
            devLog(`error in ${key} storage:clear`, {
                error,
            });

            throw error;
        }
    },
});

export async function defaultStorageReadMany<S extends Record<string, O>, O>(
    storage: Storage<S>,
): Promise<O[] | void> {
    const data = await storage.read();

    if (!data || !Object.keys(data).length) {
        return;
    }

    return Object.values(data);
}

export async function defaultStorageReadSingle<
    S extends Record<string, O>,
    I extends EndpointInput,
    O,
>(storage: Storage<S>, input?: I): Promise<O | void> {
    const id = input?.params?.id;

    if (!id || typeof id !== 'string') {
        return;
    }

    const data = await storage.read();

    if (!data || !Object.keys(data).length) {
        return;
    }

    return data[id];
}

export async function $deleteAllStorage() {
    storage.clear();
}

// export async function defaultStorageWriteMany<
//     S extends Record<string, O>,
//     I extends { id: string },
//     O,
// >(storage: Storage<S>, data: I[]): Promise<void> {
//     const storageData = await storage.read();

//     if (storageData) {
//         data.forEach((item) => {
//             storageData[item.id] = item;
//         });
//     }

//     return storage.write(storageData);
// }
