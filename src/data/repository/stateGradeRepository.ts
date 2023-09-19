import type { StateGradeApi } from '@/data/type/api/stateGradeApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadStateGradeInput {
    params: {
        id: string;
    };
}

export interface ReadStateGradeOutput {
    data: [StateGradeApi];
}

const defaultParams = {
    // include: ['field_state_grade_icon.field_media_image'].join(),
    jsonapi_include: 1,
};

export const $readStateGrade = createEndpoint<ReadStateGradeInput, ReadStateGradeOutput>({
    link: 'stategrade',
    configureAxios: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
                'filter[id]': axiosConfig.params.id,
            },
        };
    },
});

export const $readStateGrades = createEndpoint<never, ReadStateGradeOutput>({
    link: 'stategrade',
    params: {
        ...defaultParams,
    },
});
