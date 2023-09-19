import type { TopicApi } from '@/data/type/api/topicApi';
import type { Topic } from '@/data/type/app/topic';
import type { ReadTopicInput } from '@/data/repository/topicRepository';
import { $readTopics, $readTopic, $readTopicsByBranch } from '@/data/repository/topicRepository';
import {
    $useTopicStorage,
    $useTopicsStorage,
    $useTopicsByBranchStorage,
} from '@/data/storage/topicStorage';
import { createFetcher } from '@/connection/helper/fetcher';
import {
    parseDateStringToTimestamp,
    parseObjectRelationArray,
    parseMediaItem,
    parseValueToString,
} from '@/connection/helper/dataMap';

export enum TopicDegree {
    one = 'Sekundarstufe 1',
    two = 'Sekundarstufe 2',
    three = 'Übergreifend',
}

function createTopic(input: TopicApi): Topic {
    return {
        id: parseValueToString(input.id),
        changed: parseDateStringToTimestamp(input.changed),
        name: parseValueToString(input.name),
        description: parseValueToString(input.description?.processed),
        info_outlook: parseValueToString(input.field_topic_info_outlook),
        downloads: parseValueToString(input.field_topic_info_downloads),
        history: parseValueToString(input.field_topic_info_history),
        basics_tasks: parseValueToString(input.field_topic_info_basics_tasks),
        degree: {
            label: parseValueToString(input.field_topic_degree.label),
            value: parseInt(input.field_topic_degree.value),
        },
        experiments: parseValueToString(input.field_topic_info_experiments),
        weblinks: parseValueToString(input.field_topic_info_weblinks),
        referenced_grades: parseObjectRelationArray(input.field_topic_referenced_grades),
        referenced_branch: parseValueToString(input.field_topic_referenced_branch.id),
        image: parseMediaItem(input.field_topic_image),
    };
}

export const useTopics = createFetcher<never, Topic[]>(
    async () => {
        const { data } = await $readTopics();

        return data.data.map(createTopic);
    },
    $useTopicsStorage,
    {
        log: 'useTopics',
    },
);

export const getTopicsByBranch = createFetcher<ReadTopicInput, Topic[]>(
    async (input) => {
        const { data } = await $readTopicsByBranch(input);

        return data.data.map((item) => {
            return createTopic(item);
        });
    },
    $useTopicsByBranchStorage,
    {
        log: 'getTopicsByBranch',
    },
);

export const useTopic = createFetcher<ReadTopicInput, Topic>(
    async (input) => {
        const { data } = await $readTopic(input);
        const firstItem = data.data[0];

        return createTopic(firstItem);
    },
    $useTopicStorage,
    {
        log: 'useTopic',
    },
);

// @todo move to presentation layer
export function createTopicSlider(topic: Topic) {
    return {
        img: {
            src: topic.image?.url || '',
            alt: topic.image?.alt || '',
        },
        title: topic.name,
        link: {
            name: 'topic-id',
            params: {
                id: topic.id,
            },
        },
    };
}

export function isTopicFirstDegree(topic: Topic): boolean {
    return topic.degree.label === TopicDegree.one;
}

export function isTopicSecondDegree(topic: Topic): boolean {
    return topic.degree.label === TopicDegree.two;
}

export function isTopicThirdDegree(topic: Topic): boolean {
    return topic.degree.label === TopicDegree.three;
}
