import type { LinkApi } from '@/data/type/api/linkApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadLinkInput {
    params: {
        id: string;
    };
}

export interface ReadLinkOutput {
    data: [LinkApi];
    // included?: [ColorApi?, IconApi?, FileApi?];
}

const defaultParams = {
    // include: [
    //     'field_link_type',
    // 'field_referenced_topic',
    // ].join(),
    jsonapi_include: 1,
};

export const $readLink = createEndpoint<ReadLinkInput, ReadLinkOutput>({
    link: 'link',
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

export const $readLinks = createEndpoint<never, ReadLinkOutput>({
    link: 'link',
    params: {
        ...defaultParams,
    },
});
