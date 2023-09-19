import type { ReadTopicInput } from '@/data/repository/topicRepository';
import type { Topic } from '@/data/type/app/topic';
import { mergeDeepRight } from 'ramda';
import { createStorage, createStorageHandler } from '@/data/helper/storage';

const topicStorage = createStorage<{ [id: string]: Topic }>('topic');

export const $useTopicsStorage = createStorageHandler<ReadTopicInput, Topic[]>({
    async read() {
        const topics = (await topicStorage.read()) || {};

        if (!Object.values(topics).length) {
            return;
        }

        return Object.values(topics);
    },

    async write(data) {
        const topics = (await topicStorage.read()) || {};

        data.forEach((topic) => {
            if (!topics[topic.id]) {
                topics[topic.id] = topic;
            }

            topics[topic.id] = mergeDeepRight(topics[topic.id] || {}, topic);
        });

        return topicStorage.write(topics);
    },
});

export const $useTopicStorage = createStorageHandler<ReadTopicInput, Topic>({
    async read(input) {
        const topicId = input?.params.id;

        if (!topicId) {
            return;
        }

        const topics = (await topicStorage.read()) || {};

        return topics[topicId];
    },

    async write(data) {
        const topics = (await topicStorage.read()) || {};
        const topicId = data.id;

        if (!Object.keys(topics).length) {
            return topicStorage.write({
                [topicId]: data,
            });
        }

        if (!topics[topicId]) {
            topics[topicId] = data;

            return topicStorage.write(topics);
        }

        topics[topicId] = mergeDeepRight(topics[topicId] || {}, data);

        return topicStorage.write(topics);
    },
});

export const $useTopicsByBranchStorage = createStorageHandler<ReadTopicInput, Topic[]>({
    async read(input) {
        const branchId = input?.params.branchId;

        if (!branchId) {
            return;
        }

        const topics = (await topicStorage.read()) || {};

        const topicsByBranch = Object.values(topics).filter(
            (topic) => topic.referenced_branch === input?.params.branchId,
        );

        if (!topicsByBranch.length) {
            return;
        }

        return topicsByBranch;
    },

    async write(data) {
        const topics = (await topicStorage.read()) || {};

        data.forEach((topic) => {
            if (!topics[topic.id]) {
                topics[topic.id] = topic;
            }

            if (topics[topic.id]) {
                topics[topic.id] = mergeDeepRight(topics[topic.id] || {}, topic);
            }
        });

        return topicStorage.write(topics);
    },
});
