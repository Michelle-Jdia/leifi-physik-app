import type { TaskApi } from '@/data/type/api/taskApi';
import type { Task } from '@/data/type/app/task';
import type {
    ReadTaskInput,
    ReadTaskByIssueInput,
    ReadTaskByTopicInput,
} from '@/data/repository/taskRepository';
import { forEach } from 'ramda';
import {
    $readTasks,
    $readTask,
    $readTasksByTopic,
    $readTasksByIssue,
} from '@/data/repository/taskRepository';
import {
    $useTaskStorage,
    $useTasksStorage,
    $useTasksByTopicStorage,
    $useTasksByIssueStorage,
} from '@/data/storage/taskStorage';
import { createFetcher } from '@/connection/helper/fetcher';
import {
    parseDateStringToTimestamp,
    parseObjectRelationArray,
    parseRenderedStringArray,
    parseValueToString,
} from '@/connection/helper/dataMap';

function createTast(input: TaskApi): Task {
    return {
        id: parseValueToString(input.id),
        changed: parseDateStringToTimestamp(input.changed),
        title: parseValueToString(input.title),
        has_video: input.field_node_has_video,
        is_news: input.field_task_is_news,
        date: parseDateStringToTimestamp(input.field_news_date),
        typ: parseValueToString(input.field_task_typ),
        question: parseRenderedStringArray(input.field_task_question),
        type: parseValueToString(input.field_task_type.meta?.name),
        answer: parseRenderedStringArray(input.field_task_answer),
        paragraphs: parseValueToString(input.field_task_paragraphs?.meta?.rendered_string),
        referenced_issue: parseObjectRelationArray(input.field_task_referenced_issue),
        referenced_topic: parseValueToString(input.field_referenced_topic.id),
        level: parseValueToString(input.field_task_level.meta?.name),
        videos: parseObjectRelationArray(input.field_node_videos),
    };
}

export const useTasks = createFetcher<never, Task[]>(
    async () => {
        const { data } = await $readTasks();

        return data.data.map(createTast);
    },
    $useTasksStorage,
    {
        log: 'useTasks',
    },
);

export const useTask = createFetcher<ReadTaskInput, Task>(
    async (input) => {
        const { data } = await $readTask(input);
        const firstItem = data.data[0];

        return createTast(firstItem);
    },
    $useTaskStorage,
    {
        log: 'useTask',
    },
);

export const useTasksByTopic = createFetcher<ReadTaskByTopicInput, Task[]>(
    async (input) => {
        const { data } = await $readTasksByTopic(input);

        return data.data.map(createTast);
    },
    $useTasksByTopicStorage,
    {
        log: 'useTasksByTopic',
    },
);

export const useTasksByIssue = createFetcher<ReadTaskByIssueInput, Task[]>(
    async (input) => {
        const { data } = await $readTasksByIssue(input);

        return data.data.map(createTast);
    },
    $useTasksByIssueStorage,
    {
        log: 'useTasksByIssue',
    },
);

export const sortTasksByType = (tasks: Task[]): Record<string, Task[]> => {
    const tasksByType: Record<string, Task[]> = {};

    forEach<Task>((task) => {
        const { type } = task;

        if (!tasksByType[type]) {
            tasksByType[type] = [task];

            return;
        }

        // @ts-ignore
        tasksByType[type].push(task);
    }, tasks);

    return tasksByType;
};
