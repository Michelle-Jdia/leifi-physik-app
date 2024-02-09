import type { SolvedApi } from '@/data/type/api/solvedApi';
import type { Solved } from '@/data/type/app/solved';
import { $readMultiSolved } from '@/data/repository/solvedRepository';
import { $useMultiSolvedStorage } from '@/data/storage/solvedStorage';
import { ContentType } from '@/data/type/helper/contentType';
import { parseValueToString } from '@/connection/helper/dataMap';
import { createFetcher } from '@/connection/helper/fetcher';

function createSolved(input: SolvedApi): Solved {
    return {
        type: ContentType.SOLVED,
        id: parseValueToString(input.id),
        name: parseValueToString(input.name),
    };
}

export const useMultiSolved = createFetcher<never, Solved[]>(
    async () => {
        const { data } = await $readMultiSolved();

        if (!data.data?.length) {
            return;
        }

        return data.data.map(createSolved);
    },
    $useMultiSolvedStorage,
    {
        log: 'useMultiSolved',
        useCache: true,
    },
);

export const useMultiSolvedLive = createFetcher<never, Solved[]>(
    async () => {
        const { data } = await $readMultiSolved();

        if (!data || !data.data) {
            return;
        }

        return data.data.map(createSolved);
    },
    $useMultiSolvedStorage,
    {
        log: 'useMultiSolved',
        useCache: true,
    },
);

// export const useSingleSolved = createFetcher<ReadSolvedInput, Solved>(
//     async (input) => {
//         const { data } = await $readSingleSolved(input);
//
//         if (!data || !data.data) {
//             return;
//         }
//
//         const firstItem = data.data[0];
//
//         return createSolved(firstItem);
//     },
//     $useSingleSolvedStorage,
//     {
//         log: 'useSingleSolved',
//     },
// );
