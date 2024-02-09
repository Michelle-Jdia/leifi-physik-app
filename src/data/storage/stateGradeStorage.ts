import type { ReadStateGradeInput } from '@/data/repository/stateGradeRepository';
import type { StateGrade } from '@/data/type/app/stateGrade';
import { createStorage, createStorageHandler } from '@/data/helper/storage';

const stateGradeStorage = createStorage<{ [id: string]: StateGrade }>('stateGrade');

export const $useStateGradesStorage = createStorageHandler<ReadStateGradeInput, StateGrade[]>({
    async read() {
        const stateGrades = (await stateGradeStorage.read()) || {};

        if (!Object.values(stateGrades).length) {
            return;
        }

        return Object.values(stateGrades);
    },

    async write(data) {
        const stateGrades = (await stateGradeStorage.read()) || {};

        data.forEach((stateGrade) => {
            stateGrades[stateGrade.id] = stateGrade;
        });

        return stateGradeStorage.write(stateGrades);
    },
});

export const $useStateGradeStorage = createStorageHandler<ReadStateGradeInput, StateGrade>({
    async read(input) {
        const stateGradeId = input?.params.id;

        if (!stateGradeId) {
            return;
        }

        const stateGrades = (await stateGradeStorage.read()) || {};

        return stateGrades[stateGradeId];
    },

    async write(data) {
        const stateGrades = (await stateGradeStorage.read()) || {};
        const stateGradeId = data.id;

        stateGrades[stateGradeId] = data;

        return stateGradeStorage.write(stateGrades);
    },
});
