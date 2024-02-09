import type { TimeStorageTable } from '@/data/helper/storage';
import { createStorage } from '@/data/helper/storage';

type identifier = string | 'all';

type TimeStorage = Record<TimeStorageTable, Record<identifier, number>>;

export const timeStorage = createStorage<TimeStorage>('time');

export async function $readTimeStorage(
    key: TimeStorageTable,
): Promise<Record<string, number> | void> {
    const data = (await timeStorage.read()) || {};

    // @ts-ignore
    return data[key];
}

export async function $writeTimeStorage(
    key: TimeStorageTable,
    identifier: Record<string, number>,
): Promise<void> {
    const data = (await timeStorage.read()) || {};

    // @ts-ignore
    data[key] = {
        // @ts-ignore
        ...(data[key] || {}),
        ...identifier,
    };

    // @ts-ignore
    return timeStorage.write(data);
}
