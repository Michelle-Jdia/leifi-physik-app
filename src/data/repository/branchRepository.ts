import type { BranchApi } from '@/data/type/api/branchApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadBranchInput {
    params: {
        id: string;
    };
}

export interface ReadBranchOutput {
    data: [BranchApi];
    // included?: [ColorApi?, IconApi?, FileApi?];
}

const defaultParams = {
    // include: ['field_branch_color', 'field_branch_icon.field_media_image'].join(),
    // 'fields[media--icon]': 'field_media_image',
    jsonapi_include: 1,
};

export const $readBranch = createEndpoint<ReadBranchInput, ReadBranchOutput>({
    link: 'branch',
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

export const $readBranches = createEndpoint<never, ReadBranchOutput>({
    link: 'branch',
    params: {
        ...defaultParams,
    },
});
