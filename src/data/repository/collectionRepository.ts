import type { CollectionApi } from '@/data/type/api/collectionApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadCollectionByIdInput {
    params: {
        id: string;
    };
}

export interface ReadCollectionByTitleInput {
    params: {
        title: string;
    };
}

export interface ReadCollectionOutput {
    data: CollectionApi[];
}

const defaultParams = {
    include: 'field_item.field_item',
    'fields[node--issue]': ['title', 'field_issue_category', 'field_referenced_topic'].join(),
    'fields[node--download]': ['title', 'field_referenced_topic'].join(),
    'fields[node--task]': ['title', 'field_referenced_topic'].join(),
    'fields[paragraph--collection_item]': [
        'field_note',
        'field_important',
        'field_item',
        'field_solved',
    ].join(),
    'fields[paragraph--collection_separator]': 'field_category',
    'filter[status]': '1',
    jsonapi_include: '1',
};

export const $readCollection = createEndpoint<ReadCollectionByIdInput, ReadCollectionOutput>({
    link: 'collection',
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

export const $readCollectionByTitle = createEndpoint<
    ReadCollectionByTitleInput,
    ReadCollectionOutput
>({
    link: 'collection',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
                'filter[title]': axiosConfig.params?.title || '',
            },
        };
    },
});

export const $readCollections = createEndpoint<ReadCollectionOutput>({
    link: 'collection',
    params: {
        ...defaultParams,
    },
});
