import type { BranchApi } from '@/data/type/api/branchApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadBranchByIdInput {
    params: {
        id: string;
    };
}

export interface ReadNewBranchesInput {
    params: {
        timestamp: string;
    };
}

export interface ReadBranchOutput {
    data: BranchApi[];
    // included?: [ColorApi?, IconApi?, FileApi?];
}

const defaultParams = {
    // include: ['field_branch_color', 'field_branch_icon.field_media_image'].join(),
    // 'fields[media--icon]': 'field_media_image',
    jsonapi_include: '1',
};

export const $readBranch = createEndpoint<ReadBranchByIdInput, ReadBranchOutput>({
    link: 'branch',
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

export const $readBranches = createEndpoint<ReadBranchOutput>({
    link: 'branch',
    params: defaultParams,
});

export const $readNewBranches = createEndpoint<ReadNewBranchesInput, ReadBranchOutput>({
    link: 'branch',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                'filter[changed][condition][path]': 'changed',
                'filter[changed][condition][operator]': '>',
                'filter[changed][condition][value]': axiosConfig.params?.timestamp || '0',
                ...defaultParams,
            },
        };
    },
});
