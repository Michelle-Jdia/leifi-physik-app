import type {
    ReadTaskByIdInput,
    ReadTaskByIssueInput,
    ReadTaskByTopicInput,
} from '@/data/repository/taskRepository';
import type { Task } from '@/data/type/app/task';
import {
    createStorage,
    createStorageHandler,
    defaultStorageReadMany,
    defaultStorageReadSingle,
} from '@/data/helper/storage';

const taskStorage = createStorage<{ [id: string]: Task }>('task');

export const $useTasksStorage = createStorageHandler<never, Task[]>({
    async read() {
        return defaultStorageReadMany(taskStorage);
    },

    async write(data) {
        const tasks = (await taskStorage.read()) || {};

        data.forEach((task) => {
            tasks[task.id] = task;
        });

        return taskStorage.write(tasks);
    },
});

export const $useTaskStorage = createStorageHandler<ReadTaskByIdInput, Task>({
    async read(input) {
        return defaultStorageReadSingle(taskStorage, input);
    },

    async write(data) {
        const tasks = (await taskStorage.read()) || {};
        const taskId = data.id;

        tasks[taskId] = data;

        return taskStorage.write(tasks);
    },
});

export const $useTasksByTopicStorage = createStorageHandler<ReadTaskByTopicInput, Task[]>({
    async read(input) {
        const taskId = input?.params.topicId;

        if (!taskId) {
            return;
        }

        const tasks = (await taskStorage.read()) || {};

        if (!Object.values(tasks).length) {
            return;
        }

        const tasksByTopic = Object.values(tasks).filter(
            (task) => task.referenced_topic === taskId,
        );

        if (!tasksByTopic.length) {
            return;
        }

        return tasksByTopic;
    },

    async write(data) {
        const tasks = (await taskStorage.read()) || {};

        data.forEach((task) => {
            tasks[task.id] = task;
        });

        return taskStorage.write(tasks);
    },
});

export const $useTasksByIssueStorage = createStorageHandler<ReadTaskByIssueInput, Task[]>({
    async read(input) {
        const issueId = input?.params.issueId;

        if (!issueId) {
            return;
        }

        const tasks = (await taskStorage.read()) || {};

        if (!Object.values(tasks).length) {
            return;
        }

        const tasksByIssue = Object.values(tasks).filter((task) =>
            task.referenced_issue.includes(issueId),
        );

        if (!tasksByIssue.length) {
            return;
        }

        return tasksByIssue;
    },

    async write(data) {
        const tasks = (await taskStorage.read()) || {};

        data.forEach((task) => {
            tasks[task.id] = task;
        });

        return taskStorage.write(tasks);
    },
});
