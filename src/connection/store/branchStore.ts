import type { BranchApi } from '@/data/type/api/branchApi';
import type { Branch } from '@/data/type/app/branch';
import type { ReadBranchInput } from '@/data/repository/branchRepository';
import { $readBranches, $readBranch } from '@/data/repository/branchRepository';
import { $useBranchStorage, $useBranchesStorage } from '@/data/storage/branchStorage';
import { createFetcher } from '@/connection/helper/fetcher';
import {
    parseValueToString,
    parseDateStringToTimestamp,
    parseMediaItem,
} from '@/connection/helper/dataMap';

function createBranch(input: BranchApi): Branch {
    return {
        id: parseValueToString(input.id),
        changed: parseDateStringToTimestamp(input.changed),
        name: parseValueToString(input.name),
        description: parseValueToString(input.description?.processed),
        headline: parseValueToString(input.field_branch_headline),
        color: parseValueToString(input.field_branch_color.meta?.field_class_name),
        icon: parseMediaItem(input.field_branch_icon),
    };
}

export const useBranch = createFetcher<ReadBranchInput, Branch>(
    async (input) => {
        const { data } = await $readBranch(input);
        const firstItem = data.data[0];

        return createBranch(firstItem);
    },
    $useBranchStorage,
    {
        log: 'useBranch',
    },
);

export const useBranches = createFetcher<never, Branch[]>(
    async () => {
        const { data } = await $readBranches();

        return data.data.map(createBranch);
    },
    $useBranchesStorage,
    {
        log: 'useBranches',
    },
);
