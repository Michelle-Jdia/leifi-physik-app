import type {
    SearchDownloadApi,
    SearchIssueApi,
    SearchLinkApi,
    SearchTaskApi,
    SearchTopicApi,
} from '@/data/type/api/searchApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadSearchInput {
    params: {
        fulltext: string;
    };
}

export interface ReadSearchOffsetInput {
    params: {
        fulltext: string;
        offset: string;
        limit: string;
    };
}

export interface ReadSearchOutput {
    data: (SearchTopicApi | SearchTaskApi | SearchIssueApi | SearchLinkApi | SearchDownloadApi)[];
}

export interface ReadSearchArticleOutput {
    data: (SearchTaskApi | SearchIssueApi | SearchDownloadApi)[];
}

const fullParams = {
    'fields[node--download]': ['id', 'type', 'title', 'field_referenced_topic'].join(),
    'fields[node--issue]': [
        'id',
        'type',
        'title',
        'field_referenced_topic',
        'field_issue_category',
    ].join(),
    // 'fields[node--link]': ['id', 'type', 'title'].join(),
    'fields[node--task]': [
        'id',
        'type',
        'title',
        'field_referenced_topic',
        'field_task_type',
    ].join(),
    'fields[taxonomy_term--topic]': [
        'id',
        'type',
        'name',
        'field_topic_referenced_branch',
        'description',
    ].join(),
    jsonapi_include: '1',
};

// only issue/task/download necessary
const articleParams = {
    'fields[node--download]': ['id', 'type', 'title'].join(),
    'fields[node--issue]': [
        'id',
        'type',
        'title',
        'field_referenced_topic',
        'field_issue_category',
    ].join(),
    'fields[node--task]': [
        'id',
        'type',
        'title',
        'field_referenced_topic',
        'field_task_type',
    ].join(),
    'page[limit]': '30',
    'page[offset]': '0',
    jsonapi_include: '1',
};

export const $readSearch = createEndpoint<ReadSearchOffsetInput, ReadSearchOutput>({
    link: 'search',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...fullParams,
                'page[limit]': axiosConfig.params?.limit || '30',
                'page[offset]': axiosConfig.params?.offset || '0',
                'filter[fulltext]': axiosConfig.params?.fulltext || '',
            },
        };
    },
});

export const $readArticleSearch = createEndpoint<ReadSearchInput, ReadSearchArticleOutput>({
    link: 'search',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...articleParams,
                'filter[fulltext]': axiosConfig.params?.fulltext || '',
            },
        };
    },
});
