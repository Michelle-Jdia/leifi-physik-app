import type { TopicApi } from '@/data/type/api/topicApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadTopicInput {
    params: {
        id?: string;
        branchId?: string;
        title?: string;
    };
}

export interface ReadTopicOutput {
    data: [TopicApi];
    // included?: [MediaImageApi?, FileApi?];
}

const defaultParams = {
    // include: [
    //     'field_topic_image.field_media_image',
    //     'field_topic_referenced_branch.field_branch_color',
    //     'field_topic_referenced_branch.field_branch_icon.field_media_image',
    //     'field_topic_referenced_grades.field_state_grade_icon.field_media_image',
    //     'field_topic_referenced_grades.parent.field_state_grade_icon.field_media_image',
    // ].join(),
    // 'fields[media--icon]': 'field_media_image',
    // 'fields[media--image]': 'field_media_image',
    jsonapi_include: 1,
};

export const $readTopic = createEndpoint<ReadTopicInput, ReadTopicOutput>({
    link: 'topic',
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

export const $readTopics = createEndpoint<never, ReadTopicOutput>({
    link: 'topic',
    params: defaultParams,
});

export const $readTopicsByBranch = createEndpoint<ReadTopicInput, ReadTopicOutput>({
    link: 'topic',
    configureAxios: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
                'filter[field_topic_referenced_branch.id]': axiosConfig.params.branchId,
            },
        };
    },
});
