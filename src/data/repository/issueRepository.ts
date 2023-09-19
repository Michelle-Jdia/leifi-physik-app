import type { IssueApi } from '@/data/type/api/issueApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadIssueInput {
    params: {
        id?: string;
        topicId?: string;
    };
}

export interface ReadIssueOutput {
    data: [IssueApi];
    // included?: [ColorApi?, IconApi?, FileApi?];
}

const defaultParams = {
    // include: [
    //     'field_issue_category',
    // 'field_referenced_topic',
    // 'field_issue_other_related_nodes',
    // 'field_issue_related_nodes',
    // ].join(),
    jsonapi_include: 1,
};

export const $readIssue = createEndpoint<ReadIssueInput, ReadIssueOutput>({
    link: 'issue',
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

export const $readIssues = createEndpoint<never, ReadIssueOutput>({
    link: 'issue',
    params: {
        ...defaultParams,
    },
});

export const $readIssuesByTopic = createEndpoint<ReadIssueInput, ReadIssueOutput>({
    link: 'issue',
    configureAxios: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
                'filter[field_referenced_topic.id]': axiosConfig.params.topicId,
            },
        };
    },
});
