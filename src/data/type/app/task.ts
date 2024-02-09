import type { Paragraph } from '@/data/type/app/field/Paragraph';
import type { ContentType } from '@/data/type/helper/contentType';

export interface Task {
    id: string;
    type: ContentType.TASK;
    changed: number;
    title: string;
    has_video: boolean;
    is_news: boolean;
    date: number;
    typ: string;
    question: Paragraph[];
    answer: string[];
    paragraphs: string;
    referenced_issue: string[];
    task_type: string;
    referenced_topic: string;
    level: {
        name: string;
        color: string;
    };
    videos: string[];
}

export enum TaskColor {
    green = 'task-level-green',
    yellow = 'task-level-yellow',
    red = 'task-level-red',
}

export type TaskColorKey = keyof typeof TaskColor;
