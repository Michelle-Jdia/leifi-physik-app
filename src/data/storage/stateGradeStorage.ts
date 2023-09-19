import type { ReadStateGradeInput } from '@/data/repository/stateGradeRepository';
import type { StateGrade } from '@/data/type/app/stateGrade';
import { mergeDeepRight } from 'ramda';
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
            if (!stateGrades[stateGrade.id]) {
                stateGrades[stateGrade.id] = stateGrade;
            }

            if (stateGrades[stateGrade.id]) {
                stateGrades[stateGrade.id] = mergeDeepRight(
                    stateGrades[stateGrade.id] || {},
                    stateGrade,
                );
            }
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

        if (!Object.keys(stateGrades).length) {
            return stateGradeStorage.write({
                [stateGradeId]: data,
            });
        }

        if (!stateGrades[stateGradeId]) {
            stateGrades[stateGradeId] = data;

            return stateGradeStorage.write(stateGrades);
        }

        stateGrades[stateGradeId] = mergeDeepRight(stateGrades[stateGradeId] || {}, data);

        return stateGradeStorage.write(stateGrades);
    },
});
