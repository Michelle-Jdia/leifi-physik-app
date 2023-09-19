import type { ReadIssueInput } from '@/data/repository/issueRepository';
import type { Issue } from '@/data/type/app/issue';
import { mergeDeepRight } from 'ramda';
import { createStorage, createStorageHandler } from '@/data/helper/storage';

const issueStorage = createStorage<{ [id: string]: Issue }>('issue');

export const $useIssuesStorage = createStorageHandler<ReadIssueInput, Issue[]>({
    async read() {
        const issues = (await issueStorage.read()) || {};

        if (!Object.values(issues).length) {
            return;
        }

        return Object.values(issues);
    },

    async write(data) {
        const issues = (await issueStorage.read()) || {};

        data.forEach((issue) => {
            if (!issues[issue.id]) {
                issues[issue.id] = issue;
            }

            if (issues[issue.id]) {
                issues[issue.id] = mergeDeepRight(issues[issue.id] || {}, issue);
            }
        });

        return issueStorage.write(issues);
    },
});

export const $useIssueStorage = createStorageHandler<ReadIssueInput, Issue>({
    async read(input) {
        const issueId = input?.params.id;

        if (!issueId) {
            return;
        }

        const issues = (await issueStorage.read()) || {};

        return issues[issueId];
    },

    async write(data) {
        const issues = (await issueStorage.read()) || {};
        const issueId = data.id;

        if (!Object.keys(issues).length) {
            return issueStorage.write({
                [issueId]: data,
            });
        }

        if (!issues[issueId]) {
            issues[issueId] = data;

            return issueStorage.write(issues);
        }

        issues[issueId] = mergeDeepRight(issues[issueId] || {}, data);

        return issueStorage.write(issues);
    },
});

export const $useIssuesByTopicStorage = createStorageHandler<ReadIssueInput, Issue[]>({
    async read(input) {
        const topicID = input?.params.topicId;

        if (!topicID) {
            return;
        }

        const issues = (await issueStorage.read()) || {};

        const issuesByTopic = Object.values(issues).filter(
            (issue) => issue.referenced_topic === input?.params.topicId,
        );

        if (!issuesByTopic.length) {
            return;
        }

        return issuesByTopic;
    },

    async write(data) {
        const issues = (await issueStorage.read()) || {};

        data.forEach((issue) => {
            if (!issues[issue.id]) {
                issues[issue.id] = issue;
            }

            if (issues[issue.id]) {
                issues[issue.id] = mergeDeepRight(issues[issue.id] || {}, issue);
            }
        });

        return issueStorage.write(issues);
    },
});
