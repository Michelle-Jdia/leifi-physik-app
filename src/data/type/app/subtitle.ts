import type { ContentType } from '@/data/type/helper/contentType';

export interface Subtitle {
    type: ContentType.SUBTITLE;
    id: string;
    name: string;
    changed: number;
}
