import type { ReadSolvedInput } from '@/data/repository/solvedRepository';
import type { Solved } from '@/data/type/app/solved';
import { createStorage, createStorageHandler } from '@/data/helper/storage';

const solvedStorage = createStorage<{ [id: string]: Solved }>('solved');

export const $useSingleSolvedStorage = createStorageHandler<ReadSolvedInput, Solved>({
    async read(input) {
        const solvedId = input?.params.id;

        if (!solvedId) return;

        const multiSolved = (await solvedStorage.read()) || {};

        if (!Object.values(multiSolved).length) {
            return;
        }

        return multiSolved[solvedId];
    },

    async write(data, input) {
        const solvedId = input?.params.id;

        if (!solvedId) return;

        const multiSolved = (await solvedStorage.read()) || {};

        multiSolved[solvedId] = data;

        return solvedStorage.write(multiSolved);
    },
});

export const $useMultiSolvedStorage = createStorageHandler<never, Solved[]>({
    async read() {
        const multiSolved = (await solvedStorage.read()) || {};

        if (!Object.values(multiSolved).length) {
            return;
        }

        return Object.values(multiSolved);
    },

    async write(data) {
        if (!data.length) {
            return;
        }

        const multiSolved = (await solvedStorage.read()) || {};

        data.forEach((solved) => {
            multiSolved[solved.id] = solved;
        });

        return solvedStorage.write(multiSolved);
    },
});
