import type { ReadBranchByIdInput } from '@/data/repository/branchRepository';
import type { BranchApi } from '@/data/type/api/branchApi';
import type { Branch } from '@/data/type/app/branch';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { fetchResourceAndConvertToString, getFileNameFromUrl } from '@/data/helper/filesystem';
import { $readBranch, $readBranches } from '@/data/repository/branchRepository';
import { $useBranchesStorage, $useBranchStorage } from '@/data/storage/branchStorage';
import { ContentType } from '@/data/type/helper/contentType';
import {
    parseBranchColor,
    parseDateStringToTimestamp,
    parseMediaItem,
    parseValueToString,
    sortByWeight,
} from '@/connection/helper/dataMap';
import { createFetcher } from '@/connection/helper/fetcher';

function createBranch(input: BranchApi): Branch {
    return {
        id: parseValueToString(input.id),
        type: ContentType.BRANCH,
        changed: parseDateStringToTimestamp(input.changed),
        name: parseValueToString(input.name),
        weight: input.weight,
        description: parseValueToString(input.description?.processed),
        headline: parseValueToString(input.field_branch_headline),
        color: parseBranchColor(input.field_branch_color.meta?.field_class_name),
        icon: parseMediaItem(input.field_branch_icon),
    };
}

async function getAndPrepareBranches(): Promise<Branch[] | void> {
    const { data } = await $readBranches();

    if (!data.data?.length) {
        return;
    }

    const mappedData = data.data.map(createBranch);

    return sortByWeight(mappedData);
}

export const useBranch = createFetcher<ReadBranchByIdInput, Branch>(
    async (input) => {
        const { data } = await $readBranch(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];

        return createBranch(firstItem);
    },
    $useBranchStorage,
    {
        log: 'useBranch',
        useCache: true,
    },
);

export const useBranches = createFetcher<never, Branch[]>(
    getAndPrepareBranches,
    $useBranchesStorage,
    {
        log: 'useBranches',
        useCache: true,
        // async getLastFetchTime() {
        //     const data = await $readTimeStorage('branch');
        //
        //     return data?.all || 0;
        // },
    },
);

export const useBranchesLive = createFetcher<never, Branch[]>(
    async () => {
        // const key = 'branch';
        // const identifier = await $readTimeStorage(key);
        // const timestampAsString = identifier ? identifier.all : '';
        //
        // const { data } = await $readNewBranches({
        //     params: {
        //         timestamp: String(timestampAsString),
        //     },
        // });
        //
        // if (!data.data?.length) {
        //     return;
        // }
        //
        // await $writeTimeStorage(key, {
        //     all: Date.now(),
        // });

        const { data } = await $readBranches();

        if (!data.data?.length) {
            return;
        }

        for (let i = 0; i < data.data.length; i++) {
            const curr = data.data[i];

            if (!curr) {
                continue;
            }

            const resourceUrl = curr.field_branch_icon.meta?.media.url;

            if (!resourceUrl) {
                continue;
            }

            const resourceString = await fetchResourceAndConvertToString(resourceUrl);
            const path = getFileNameFromUrl(resourceUrl);

            await Filesystem.writeFile({
                path: `leifiapp/image/${path}`,
                data: resourceString,
                directory: Directory.External,
                encoding: Encoding.UTF8,
            });
        }

        const mappedData = data.data.map(createBranch);

        return sortByWeight(mappedData);
    },
    $useBranchesStorage,
    {
        log: 'useBranchesLive',
    },
);
