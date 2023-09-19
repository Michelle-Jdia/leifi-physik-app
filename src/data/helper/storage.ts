import { storage } from '@/data/helper/driver';

// list of "tables" which will be the keys to hold all the data. for autocomplete purposes (doesn't have to match routes or any other type)
export type StorageTable =
    | 'branch'
    | 'collection'
    | 'download'
    | 'favorite'
    | 'issue'
    | 'link'
    | 'stateGrade'
    | 'task'
    | 'topic'
    | 'history';

export interface Storage<I = never, O = any> {
    read: (input?: I) => Promise<O | void>;
    // write: (data: O, input?: I extends never ? never : I) => Promise<void>;
    write: (data: O, input?: I) => Promise<void>;
}

export function createStorageHandler<I, O>(implementation: Storage<I, O>): Storage<I, O> {
    return implementation;
}

export const createStorage = <O>(key: StorageTable) => ({
    read: (): Promise<O | void> => {
        return storage.get(key);
    },

    write: (data: O): Promise<void> => {
        return storage.set(key, data);
    },

    clear: (): Promise<void> => {
        return storage.remove(key);
    },
});
