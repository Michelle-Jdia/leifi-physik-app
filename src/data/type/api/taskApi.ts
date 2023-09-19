import type { RenderedStringApi } from '@/data/type/api/field/renderedStringApi';
import type { ObjectRelationApi } from '@/data/type/api/field/objectRelationApi';

export interface TaskApi {
    id: string;
    status: boolean;
    changed: string;
    title: string;
    field_node_has_video: boolean;
    field_task_is_news: boolean;
    field_news_date: string;
    field_task_typ: string;
    field_task_question: RenderedStringApi[];
    field_task_type: {
        meta?: {
            name: string;
        };
    };
    field_task_answer: RenderedStringApi[];
    field_task_paragraphs: RenderedStringApi;
    field_task_referenced_issue: ObjectRelationApi[];
    field_referenced_topic: ObjectRelationApi;
    field_task_level: {
        meta?: {
            name: string;
            field_task_difficulty_lv_color: string;
        };
    };
    field_node_videos: ObjectRelationApi[];
}
