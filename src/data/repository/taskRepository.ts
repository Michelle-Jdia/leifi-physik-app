import type { TaskApi } from '@/data/type/api/taskApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadTaskByIdInput {
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
    data: TaskApi[];
    meta?: {
        count: number;
    };
    // included?: [ColorApi?, IconApi?, FileApi?];
}

const defaultParams = {
    // include: [
    //     'field_task_type',
    // 'field_task_referenced_issue',
    // 'field_referenced_topic',
    // 'field_task_level',
    // ].join(),
    jsonapi_include: '1',
};

const minimalParams = {
    'page[limit]': '1',
    'fields[node--task]': ['id', 'type'].join(),
};

export const $readTask = createEndpoint<ReadTaskByIdInput, ReadTaskOutput>({
    link: 'task',
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

export const $readTasks = createEndpoint<ReadTaskOutput>({
    link: 'task',
    params: {
        ...defaultParams,
    },
});

export const $readTasksByTopic = createEndpoint<ReadTaskByTopicInput, ReadTaskOutput>({
    link: 'task',
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

export const $readTasksByIssue = createEndpoint<ReadTaskByIssueInput, ReadTaskOutput>({
    link: 'task',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
                'filter[field_task_referenced_issue.id]': axiosConfig.params?.issueId || '',
            },
        };
    },
});

export const $readTasksCountByIssue = createEndpoint<ReadTaskByIssueInput, ReadTaskOutput>({
    link: 'task',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...minimalParams,
                'filter[field_task_referenced_issue.id]': axiosConfig.params?.issueId || '',
            },
        };
    },
});
