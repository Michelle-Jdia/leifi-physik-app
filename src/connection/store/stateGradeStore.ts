import type { StateGradeApi } from '@/data/type/api/stateGradeApi';
import type { StateGrade } from '@/data/type/app/stateGrade';
import type { ReadStateGradeInput } from '@/data/repository/stateGradeRepository';
import { $readStateGrades, $readStateGrade } from '@/data/repository/stateGradeRepository';
import { $useStateGradeStorage, $useStateGradesStorage } from '@/data/storage/stateGradeStorage';
import { createFetcher } from '@/connection/helper/fetcher';
import {
    parseDateStringToTimestamp,
    parseMediaItem,
    parseValueToString,
} from '@/connection/helper/dataMap';

function createStateGrade(input: StateGradeApi): StateGrade {
    return {
        id: parseValueToString(input.id),
        changed: parseDateStringToTimestamp(input.changed),
        name: parseValueToString(input.name),
        headline: parseValueToString(input.field_state_grade_headline),
        icon: parseMediaItem(input.field_state_grade_icon),
    };
}

export const getStateGrades = createFetcher<never, StateGrade[]>(
    async () => {
        const { data } = await $readStateGrades();

        return data.data.map(createStateGrade);
    },
    $useStateGradesStorage,
    {
        log: 'getStateGrades',
    },
);

export const getStateGrade = createFetcher<ReadStateGradeInput, StateGrade>(
    async (input) => {
        const { data } = await $readStateGrade(input);
        const firstItem = data.data[0];

        return createStateGrade(firstItem);
    },
    $useStateGradeStorage,
    {
        log: 'getStateGrade',
    },
);
