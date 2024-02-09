import type { StructuredString } from '@/data/type/app/field/StructuredString';
import type { Media } from '@/data/type/app/media';
import type { ContentType } from '@/data/type/helper/contentType';

export interface Download {
    id: string;
    type: ContentType.DOWNLOAD;
    changed: number;
    title: string;
    animation_background: string;
    animation_caption: string;
    animation_code: StructuredString | null;
    animation_intro: string;
    animation_type: string;
    download_description: string;
    download_didactic_info: string;
    download_is_news: boolean;
    news_date: number;
    download_file: Media[];
    download_preview: Media | null;
    download_type: string;
    referenced_topic: string;
}
