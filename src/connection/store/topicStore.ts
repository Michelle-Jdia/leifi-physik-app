import type { ReadTopicByBranchInput, ReadTopicByIdInput } from '@/data/repository/topicRepository';
import type { TopicApi } from '@/data/type/api/topicApi';
import type { Topic } from '@/data/type/app/topic';
import { $readTopic, $readTopicsByBranch } from '@/data/repository/topicRepository';
import { $useTopicsByBranchStorage, $useTopicStorage } from '@/data/storage/topicStorage';
import { ContentType } from '@/data/type/helper/contentType';
import {
    parseDateStringToTimestamp,
    parseMediaItem,
    parseObjectRelationArray,
    parseValueToString,
    sortByWeight,
} from '@/connection/helper/dataMap';
import { createFetcher } from '@/connection/helper/fetcher';

export enum TopicDegree {
    one = 'Sekundarstufe 1',
    two = 'Sekundarstufe 2',
    three = 'Übergreifend',
}

function createTopic(input: TopicApi): Topic {
    return {
        id: parseValueToString(input.id),
        type: ContentType.TOPIC,
        changed: parseDateStringToTimestamp(input.changed),
        name: parseValueToString(input.name),
        weight: input.weight,
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

export const useTopicsByBranch = createFetcher<ReadTopicByBranchInput, Topic[]>(
    async (input) => {
        const { data } = await $readTopicsByBranch(input);

        if (!data || !data.data) {
            return;
        }

        const mappedData = data.data.map(createTopic);

        return sortByWeight(mappedData);
    },
    $useTopicsByBranchStorage,
    {
        log: 'getTopicsByBranch',
        useCache: true,
        // async getLastFetchTime(input) {
        //     const data = await $readTimeStorage('topic');
        //     const branchId = input?.params.branchId;
        //
        //     if (!branchId || !data) {
        //         return 0;
        //     }
        //
        //     return data[branchId] || 0;
        // },
    },
);

export const getTopicsByBranchLive = createFetcher<ReadTopicByBranchInput, Topic[]>(
    async (input) => {
        // const key = 'topic';
        // const identifier = await $readTimeStorage(key);
        // const branchId = input.params.branchId;
        // const timestampAsString = identifier ? identifier[branchId] : '';
        //
        // const { data } = await $readNewTopicsByBranch({
        //     params: {
        //         timestamp: String(timestampAsString),
        //         branchId,
        //     },
        // });
        //
        // if (!data.data?.length) {
        //     return;
        // }
        //
        // await $writeTimeStorage(key, {
        //     [branchId]: Date.now(),
        // });

        const { data } = await $readTopicsByBranch(input);

        if (!data.data?.length) {
            return;
        }

        const mappedData = data.data.map(createTopic);

        return sortByWeight(mappedData);
    },
    $useTopicsByBranchStorage,
    {
        log: 'getTopicsByBranchLive',
    },
);

export const useTopic = createFetcher<ReadTopicByIdInput, Topic>(
    async (input) => {
        const { data } = await $readTopic(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];

        return createTopic(firstItem);
    },
    $useTopicStorage,
    {
        log: 'useTopic',
        useCache: true,
    },
);

export const useTopicLive = createFetcher<ReadTopicByIdInput, Topic>(
    async (input) => {
        const { data } = await $readTopic(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];

        return createTopic(firstItem);
    },
    $useTopicStorage,
    {
        log: 'useTopicLive',
        useCache: false,
    },
);

export function isTopicFirstDegree(topic: Topic): boolean {
    return topic.degree.label === TopicDegree.one;
}

export function isTopicSecondDegree(topic: Topic): boolean {
    return topic.degree.label === TopicDegree.two;
}

export function isTopicThirdDegree(topic: Topic): boolean {
    return topic.degree.label === TopicDegree.three;
}
