import type { Media } from '@/data/type/app/media';

export interface Download {
    id: string;
    changed: number;
    title: string;
    animation_background: string;
    animation_caption: string;
    animation_code: string;
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
