export interface Task {
    id: string;
    changed: number;
    title: string;
    has_video: boolean;
    is_news: boolean;
    date: number;
    typ: string;
    question: string[];
    type: string;
    answer: string[];
    paragraphs: string;
    referenced_issue: string[];
    referenced_topic: string;
    level: string;
    videos: string[];
}
