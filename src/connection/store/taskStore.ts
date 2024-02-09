import type {
    ReadTaskByIdInput,
    ReadTaskByIssueInput,
    ReadTaskByTopicInput,
} from '@/data/repository/taskRepository';
import type { TaskApi } from '@/data/type/api/taskApi';
import type { Task, TaskColorKey } from '@/data/type/app/task';
import { forEach } from 'ramda';
import {
    $readTask,
    $readTasks,
    $readTasksByIssue,
    $readTasksByTopic,
} from '@/data/repository/taskRepository';
import {
    $useTasksByIssueStorage,
    $useTasksByTopicStorage,
    $useTasksStorage,
    $useTaskStorage,
} from '@/data/storage/taskStorage';
import { ContentType } from '@/data/type/helper/contentType';
import {
    parseDateStringToTimestamp,
    parseObjectRelationArray,
    parseParagraphArray,
    parseRenderedStringArray,
    parseValueToString,
} from '@/connection/helper/dataMap';
import { createFetcher } from '@/connection/helper/fetcher';

function createTask(input: TaskApi): Task {
    return {
        id: parseValueToString(input.id),
        type: ContentType.TASK,
        changed: parseDateStringToTimestamp(input.changed),
        title: parseValueToString(input.title),
        has_video: input.field_node_has_video,
        is_news: input.field_task_is_news,
        date: parseDateStringToTimestamp(input.field_news_date),
        typ: parseValueToString(input.field_task_typ),
        question: parseParagraphArray(input.field_task_question),
        task_type: parseValueToString(input.field_task_type.meta?.name),
        answer: parseRenderedStringArray(input.field_task_answer),
        paragraphs: parseValueToString(input.field_task_paragraphs?.meta?.rendered_string),
        referenced_issue: parseObjectRelationArray(input.field_task_referenced_issue),
        referenced_topic: parseValueToString(input.field_referenced_topic.id),
        level: {
            name: parseValueToString(input.field_task_level.meta?.name),
            color: parseValueToString(input.field_task_level.meta?.field_task_difficulty_lv_color),
        },
        videos: parseObjectRelationArray(input.field_node_videos),
    };
}

const taskDifficultyIndexMap: Record<TaskColorKey, number> = {
    green: 0,
    yellow: 1,
    red: 2,
};

export const useTasks = createFetcher<never, Task[]>(
    async () => {
        const { data } = await $readTasks();

        if (!data.data?.length) {
            return;
        }

        return data.data.map(createTask);
    },
    $useTasksStorage,
    {
        log: 'useTasks',
        useCache: true,
    },
);

export const useTask = createFetcher<ReadTaskByIdInput, Task>(
    async (input) => {
        const { data } = await $readTask(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];

        return createTask(firstItem);
    },
    $useTaskStorage,
    {
        log: 'useTask',
        useCache: true,
    },
);

export const useTaskLive = createFetcher<ReadTaskByIdInput, Task>(
    async (input) => {
        const { data } = await $readTask(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];

        return createTask(firstItem);
    },
    $useTaskStorage,
    {
        log: 'useTaskLive',
        useCache: false,
    },
);

export const useTasksByTopic = createFetcher<ReadTaskByTopicInput, Task[]>(
    async (input) => {
        const { data } = await $readTasksByTopic(input);

        if (!data.data?.length) {
            return;
        }

        return data.data.map(createTask);
    },
    $useTasksByTopicStorage,
    {
        log: 'useTasksByTopic',
        useCache: true,
    },
);

export const useTasksByIssue = createFetcher<ReadTaskByIssueInput, Task[]>(
    async (input) => {
        const { data } = await $readTasksByIssue(input);

        if (!data.data?.length) {
            return;
        }

        return data.data.map(createTask).sort(sortTasksByDifficulty);
    },
    $useTasksByIssueStorage,
    {
        log: 'useTasksByIssue',
        useCache: true,
    },
);

export const useTasksByIssueLive = createFetcher<ReadTaskByIssueInput, Task[]>(
    async (input) => {
        const { data } = await $readTasksByIssue(input);

        if (!data.data?.length) {
            return;
        }

        return data.data.map(createTask).sort(sortTasksByDifficulty);
    },
    $useTasksByIssueStorage,
    {
        log: 'useTasksByIssueLive',
        useCache: false,
    },
);

export const sortTasksByType = (tasks: Task[]): Record<string, Task[]> => {
    const tasksByType: Record<string, Task[]> = {};

    forEach<Task>((task) => {
        const { task_type } = task;

        if (!tasksByType[task_type]) {
            tasksByType[task_type] = [task];

            return;
        }

        // @ts-ignore
        tasksByType[task_type].push(task);
    }, tasks);

    return tasksByType;
};

export function sortTasksByDifficulty(taskA: Task, taskB: Task): number {
    //@ts-ignore
    return taskDifficultyIndexMap[taskA.level.color] - taskDifficultyIndexMap[taskB.level.color];
}
