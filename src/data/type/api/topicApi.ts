import type { MediaApi } from '@/data/type/api/field/mediaApi';
import type { ObjectRelationApi } from '@/data/type/api/field/objectRelationApi';
import type { TextApi } from '@/data/type/api/field/textApi';

export interface TopicApi {
    id: string;
    status: boolean;
    changed: string;
    name: string;
    description: TextApi;
    field_topic_info_outlook: string | null;
    field_topic_info_downloads: string | null;
    field_topic_info_history: string | null;
    field_topic_info_basics_tasks: string | null;
    field_topic_info_experiments: string | null;
    field_topic_info_weblinks: string | null;
    field_topic_degree: {
        label: string;
        value: string;
    };
    field_topic_referenced_grades: ObjectRelationApi[];
    field_topic_referenced_branch: ObjectRelationApi;
    field_topic_image: MediaApi;
}
