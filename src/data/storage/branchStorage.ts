import type { ReadBranchInput } from '@/data/repository/branchRepository';
import type { Branch } from '@/data/type/app/branch';
import { mergeDeepRight } from 'ramda';
import { createStorage, createStorageHandler } from '@/data/helper/storage';

const branchStorage = createStorage<{ [id: string]: Branch }>('branch');

export const $useBranchesStorage = createStorageHandler<never, Branch[]>({
    async read() {
        const branches = (await branchStorage.read()) || {};

        if (!Object.values(branches).length) {
            return;
        }

        return Object.values(branches);
    },

    async write(data) {
        const branches = (await branchStorage.read()) || {};

        data.forEach((branch) => {
            if (!branches[branch.id]) {
                branches[branch.id] = branch;
            }

            if (branches[branch.id]) {
                branches[branch.id] = mergeDeepRight(branches[branch.id] || {}, branch);
            }
        });

        return branchStorage.write(branches);
    },
});

export const $useBranchStorage = createStorageHandler<ReadBranchInput, Branch>({
    async read(input) {
        const branchId = input?.params.id;

        if (!branchId) {
            return;
        }

        const branches = (await branchStorage.read()) || {};

        return branches[branchId];
    },

    async write(data) {
        const branches = (await branchStorage.read()) || {};
        const branchId = data.id;

        if (!Object.keys(branches).length) {
            return branchStorage.write({
                [branchId]: data,
            });
        }

        if (!branches[branchId]) {
            // branch with id wasn't found, so we create a new one
            branches[branchId] = data;

            return branchStorage.write(branches);
        }

        // branch with id was found, so we merge the new data with the existing one
        branches[branchId] = mergeDeepRight(branches[branchId] || {}, data);

        return branchStorage.write(branches);
    },
});
