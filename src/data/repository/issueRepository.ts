import type { IssueApi } from '@/data/type/api/issueApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadIssueByIdInput {
    params: {
        id: string;
    };
}

export interface ReadIssuesByTopicInput {
    params: {
        topicId: string;
    };
}

export interface ReadIssueIdByTopicCategoryWeightInput {
    params: {
        topicId: string;
        categoryId: string;
        weight: string;
    };
}

export interface ReadIssueOutput {
    data: IssueApi[];
    // included?: [ColorApi?, IconApi?, FileApi?];
}

export interface ReadIssueIdByTopicCategoryWeightOutput {
    data: Record<'id', string>[];
}

const defaultParams = {
    include: ['field_issue_paragraphs', 'field_issue_paragraphs_ext'].join(),
    'filter[status][value]': '1',
    jsonapi_include: '1',
};

export const $readIssue = createEndpoint<ReadIssueByIdInput, ReadIssueOutput>({
    link: 'issue',
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

export const $readIssues = createEndpoint<ReadIssueOutput>({
    link: 'issue',
    params: {
        ...defaultParams,
    },
});

export const $readIssuesByTopic = createEndpoint<ReadIssuesByTopicInput, ReadIssueOutput>({
    link: 'issue',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
                'filter[field_referenced_topic.id]': axiosConfig.params?.topicId || '',
            },
        };
    },
});

export const $readNextIssueId = createEndpoint<
    ReadIssueIdByTopicCategoryWeightInput,
    ReadIssueIdByTopicCategoryWeightOutput
>({
    link: 'issue',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
                'fields[node--issue]': 'id',
                'filter[field_referenced_topic.id]': axiosConfig.params?.topicId || '',
                'filter[field_issue_category.id]': axiosConfig.params?.categoryId || '',
                'filter[weight][condition][path]': 'field_issue_weight',
                'filter[weight][condition][operator]': '>',
                'filter[weight][condition][value]': axiosConfig.params?.weight || '',
                'sort[weight][path]': 'field_issue_weight',
                'sort[weight][direction]': 'ASC',
                'page[limit]': '1',
            },
        };
    },
});

export const $readPrevIssueId = createEndpoint<
    ReadIssueIdByTopicCategoryWeightInput,
    ReadIssueIdByTopicCategoryWeightOutput
>({
    link: 'issue',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
                'fields[node--issue]': 'id',
                'filter[field_referenced_topic.id]': axiosConfig.params?.topicId || '',
                'filter[field_issue_category.id]': axiosConfig.params?.categoryId || '',
                'filter[weight][condition][path]': 'field_issue_weight',
                'filter[weight][condition][operator]': '<',
                'filter[weight][condition][value]': axiosConfig.params?.weight || '',
                'sort[weight][path]': 'field_issue_weight',
                'sort[weight][direction]': 'DESC',
                'page[limit]': '1',
            },
        };
    },
});
