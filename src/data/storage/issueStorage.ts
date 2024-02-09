import type { ReadIssueByIdInput, ReadIssuesByTopicInput } from '@/data/repository/issueRepository';
import type { Issue } from '@/data/type/app/issue';
import {
    createStorage,
    createStorageHandler,
    defaultStorageReadMany,
    defaultStorageReadSingle,
} from '@/data/helper/storage';

const issueStorage = createStorage<{ [id: string]: Issue }>('issue');

export const $useIssuesStorage = createStorageHandler<never, Issue[]>({
    async read() {
        return defaultStorageReadMany(issueStorage);
    },

    async write(data) {
        if (!data.length) {
            return;
        }

        const issues = (await issueStorage.read()) || {};

        data.forEach((issue) => {
            issues[issue.id] = issue;
        });

        return issueStorage.write(issues);
    },
});

export const $useIssueStorage = createStorageHandler<ReadIssueByIdInput, Issue>({
    async read(input) {
        return defaultStorageReadSingle(issueStorage, input);
    },

    async write(data) {
        const issues = (await issueStorage.read()) || {};
        const issueId = data.id;

        issues[issueId] = data;

        return issueStorage.write(issues);
    },
});

export const $useIssuesByTopicStorage = createStorageHandler<ReadIssuesByTopicInput, Issue[]>({
    async read(input) {
        const topicID = input?.params.topicId;

        if (!topicID) {
            return;
        }

        const issues = (await issueStorage.read()) || {};

        if (!Object.values(issues).length) {
            return;
        }

        const issuesByTopic = Object.values(issues).filter(
            (issue) => issue.referenced_topic === topicID,
        );

        if (!issuesByTopic.length) {
            return;
        }

        return issuesByTopic;
    },

    async write(data) {
        if (!data.length) {
            return;
        }

        const issues = (await issueStorage.read()) || {};

        data.forEach((issue) => {
            issues[issue.id] = issue;
        });

        return issueStorage.write(issues);
    },
});
