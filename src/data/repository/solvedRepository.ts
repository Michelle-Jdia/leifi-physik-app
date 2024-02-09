import type { SolvedApi } from '@/data/type/api/solvedApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadSolvedInput {
    params: {
        id: string;
    };
}

export interface ReadSolvedOutput {
    data: SolvedApi[];
}

const defaultParams = {
    // include: ['field_state_grade_icon.field_media_image'].join(),
    jsonapi_include: '1',
};

export const $readSingleSolved = createEndpoint<ReadSolvedInput, ReadSolvedOutput>({
    link: 'solved',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
                'filter[id]': axiosConfig.params?.id || '',
            },
        };
    },
});

export const $readMultiSolved = createEndpoint<ReadSolvedOutput>({
    link: 'solved',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
            },
        };
    },
});
