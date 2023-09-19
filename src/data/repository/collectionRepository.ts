import { createEndpoint } from '@/data/helper/endpoint';
import type { CollectionApi } from '@/data/type/api/collectionApi';

export interface ReadCollectionInput {
    params: {
        id?: string;
    };
}

export interface ReadCollectionOutput {
    data: [CollectionApi];
}

const defaultParams = {
    // include: ['field_item.field_category', 'field_item.field_item'].join(),
    'filter[status]': '1',
    jsonapi_include: 1,
};

export const $readCollection = createEndpoint<ReadCollectionInput, ReadCollectionOutput>({
    link: 'collection',
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

export const $readCollections = createEndpoint<never, ReadCollectionOutput>({
    link: 'collection',
    params: {
        ...defaultParams,
    },
});
