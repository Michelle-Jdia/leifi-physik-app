import type { ContentType } from '@/data/type/helper/contentType';

export interface Solved {
    type: ContentType.SOLVED;
    id: string;
    name: string;
}
