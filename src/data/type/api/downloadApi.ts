import type { MediaApi } from '@/data/type/api/field/mediaApi';
import type { TextApi } from '@/data/type/api/field/textApi';
import type { ObjectRelationApi } from '@/data/type/api/field/objectRelationApi';

export interface DownloadApi {
    id: string;
    status: boolean;
    changed: string;
    title: string;
    field_animation_background: string | null;
    field_animation_caption: string | null;
    field_animation_code: string | null;
    field_animation_intro: string | null;
    field_animation_type: string | null;
    field_download_description: TextApi;
    field_download_didactic_info: TextApi;
    field_download_is_news: boolean | null;
    field_news_date: string | null;
    field_download_file: MediaApi[];
    field_download_preview: MediaApi;
    field_download_type: {
        meta?: {
            name: string;
        };
    };
    field_referenced_topic: ObjectRelationApi;
}
