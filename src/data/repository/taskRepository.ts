import type { TaskApi } from '@/data/type/api/taskApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadTaskInput {
    params: {
        id: string;
    };
}

export interface ReadTaskByTopicInput {
    params: {
        topicId: string;
    };
}

export interface ReadTaskByIssueInput {
    params: {
        issueId: string;
    };
}

export interface ReadTaskOutput {
    data: [TaskApi];
    // included?: [ColorApi?, IconApi?, FileApi?];
}

const defaultParams = {
    // include: [
    //     'field_task_type',
    // 'field_task_referenced_issue',
    // 'field_referenced_topic',
    // 'field_task_level',
    // ].join(),
    jsonapi_include: 1,
};

export const $readTask = createEndpoint<ReadTaskInput, ReadTaskOutput>({
    link: 'task',
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

export const $readTasks = createEndpoint<never, ReadTaskOutput>({
    link: 'task',
    params: {
        ...defaultParams,
    },
});

export const $readTasksByTopic = createEndpoint<ReadTaskByTopicInput, ReadTaskOutput>({
    link: 'task',
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

export const $readTasksByIssue = createEndpoint<ReadTaskByIssueInput, ReadTaskOutput>({
    link: 'task',
    configureAxios: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
                'filter[field_task_referenced_issue.id]': axiosConfig.params.issueId,
            },
        };
    },
});
