import type { ReadBranchByIdInput } from '@/data/repository/branchRepository';
import type { Branch } from '@/data/type/app/branch';
import {
    createStorage,
    createStorageHandler,
    defaultStorageReadMany,
    defaultStorageReadSingle,
} from '@/data/helper/storage';

const branchStorage = createStorage<{ [id: string]: Branch }>('branch');

export async function $readBranchStorage(input?: ReadBranchByIdInput): Promise<Branch | void> {
    return defaultStorageReadSingle(branchStorage, input);
}

export async function $readBranchesStorage(): Promise<Branch[] | void> {
    return defaultStorageReadMany(branchStorage);
}

export async function $writeBranchStorage(data: Branch): Promise<void> {
    const branches = (await branchStorage.read()) || {};
    const branchId = data.id;

    branches[branchId] = data;

    return branchStorage.write(branches);
}

export async function $writeBranchesStorage(data: Branch[]): Promise<void> {
    const branches = (await branchStorage.read()) || {};

    data.forEach((branch) => {
        branches[branch.id] = branch;
    });

    return branchStorage.write(branches);
}

export const $useBranchesStorage = createStorageHandler<never, Branch[]>({
    read: $readBranchesStorage,
    write: $writeBranchesStorage,
});

export const $useBranchStorage = createStorageHandler<ReadBranchByIdInput, Branch>({
    read: $readBranchStorage,
    write: $writeBranchStorage,
});
