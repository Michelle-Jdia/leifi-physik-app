import type {
    ReadTaskInput,
    ReadTaskByIssueInput,
    ReadTaskByTopicInput,
} from '@/data/repository/taskRepository';
import type { Task } from '@/data/type/app/task';
import { mergeDeepRight } from 'ramda';
import { createStorage, createStorageHandler } from '@/data/helper/storage';

const taskStorage = createStorage<{ [id: string]: Task }>('task');

export const $useTasksStorage = createStorageHandler<ReadTaskInput, Task[]>({
    async read() {
        const tasks = (await taskStorage.read()) || {};

        if (!Object.values(tasks).length) {
            return;
        }

        return Object.values(tasks);
    },

    async write(data) {
        const tasks = (await taskStorage.read()) || {};

        data.forEach((task) => {
            if (!tasks[task.id]) {
                tasks[task.id] = task;
            }

            if (tasks[task.id]) {
                tasks[task.id] = mergeDeepRight(tasks[task.id] || {}, task);
            }
        });

        return taskStorage.write(tasks);
    },
});

export const $useTaskStorage = createStorageHandler<ReadTaskInput, Task>({
    async read(input) {
        const taskId = input?.params.id;

        if (!taskId) {
            return;
        }

        const tasks = (await taskStorage.read()) || {};

        return tasks[taskId];
    },

    async write(data) {
        const tasks = (await taskStorage.read()) || {};
        const taskId = data.id;

        if (!Object.keys(tasks).length) {
            return taskStorage.write({
                [taskId]: data,
            });
        }

        if (!tasks[taskId]) {
            tasks[taskId] = data;

            return taskStorage.write(tasks);
        }

        tasks[taskId] = mergeDeepRight(tasks[taskId] || {}, data);

        return taskStorage.write(tasks);
    },
});

export const $useTasksByTopicStorage = createStorageHandler<ReadTaskByTopicInput, Task[]>({
    async read(input) {
        const tasks = (await taskStorage.read()) || {};

        const tasksByTopic = Object.values(tasks).filter(
            (task) => task.referenced_topic === input?.params.topicId,
        );

        if (!tasksByTopic.length) {
            return;
        }

        return tasksByTopic;
    },

    async write(data) {
        const tasks = (await taskStorage.read()) || {};

        data.forEach((task) => {
            if (!tasks[task.id]) {
                tasks[task.id] = task;
            }

            if (tasks[task.id]) {
                tasks[task.id] = mergeDeepRight(tasks[task.id] || {}, task);
            }
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
            if (!tasks[task.id]) {
                tasks[task.id] = task;
            }

            if (tasks[task.id]) {
                tasks[task.id] = mergeDeepRight(tasks[task.id] || {}, task);
            }
        });

        return taskStorage.write(tasks);
    },
});
