import type { ReadTopicByBranchInput, ReadTopicByIdInput } from '@/data/repository/topicRepository';
import type { Topic } from '@/data/type/app/topic';
import {
    createStorage,
    createStorageHandler,
    defaultStorageReadMany,
    defaultStorageReadSingle,
} from '@/data/helper/storage';

const topicStorage = createStorage<{ [id: string]: Topic }>('topic');

export const $useTopicsStorage = createStorageHandler<never, Topic[]>({
    async read() {
        return defaultStorageReadMany(topicStorage);
    },

    async write(data) {
        const topics = (await topicStorage.read()) || {};

        data.forEach((topic) => {
            topics[topic.id] = topic;
        });

        return topicStorage.write(topics);
    },
});

export const $useTopicStorage = createStorageHandler<ReadTopicByIdInput, Topic>({
    async read(input) {
        return defaultStorageReadSingle(topicStorage, input);
    },

    async write(data) {
        const topics = (await topicStorage.read()) || {};
        const topicId = data.id;

        topics[topicId] = data;

        return topicStorage.write(topics);
    },
});

export const $useTopicsByBranchStorage = createStorageHandler<ReadTopicByBranchInput, Topic[]>({
    async read(input) {
        const branchId = input?.params.branchId;

        if (!branchId) {
            return;
        }

        const topics = (await topicStorage.read()) || {};

        if (!Object.values(topics).length) {
            return;
        }

        const topicsByBranch = Object.values(topics).filter(
            (topic) => topic.referenced_branch === branchId,
        );

        if (!topicsByBranch.length) {
            return;
        }

        return topicsByBranch;
    },

    async write(data) {
        if (!data.length) {
            return;
        }

        const topics = (await topicStorage.read()) || {};

        data.forEach((topic) => {
            topics[topic.id] = topic;
        });

        return topicStorage.write(topics);
    },
});
