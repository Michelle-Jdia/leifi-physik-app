import type { ReadStateGradeInput } from '@/data/repository/stateGradeRepository';
import type { StateGradeApi } from '@/data/type/api/stateGradeApi';
import type { StateGrade } from '@/data/type/app/stateGrade';
import { $readStateGrade, $readStateGrades } from '@/data/repository/stateGradeRepository';
import { $useStateGradesStorage, $useStateGradeStorage } from '@/data/storage/stateGradeStorage';
import {
    parseDateStringToTimestamp,
    parseMediaItem,
    parseValueToString,
} from '@/connection/helper/dataMap';
import { createFetcher } from '@/connection/helper/fetcher';

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

        if (!data.data?.length) {
            return;
        }

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

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];

        return createStateGrade(firstItem);
    },
    $useStateGradeStorage,
    {
        log: 'getStateGrade',
    },
);
