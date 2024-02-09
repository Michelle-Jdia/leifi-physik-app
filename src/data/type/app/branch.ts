import type { Media } from '@/data/type/app/media';
import type { ContentType } from '@/data/type/helper/contentType';

export interface Branch {
    id: string;
    type: ContentType.BRANCH;
    changed: number;
    name: string;
    weight: number;
    description: string;
    headline: string;
    color: string;
    icon: Media | null;
}
