import type { ContentType } from '@/data/type/helper/contentType';

export interface CollectionSeparator {
    type: string;
    id: string;
    field_category: {
        type: ContentType.SUBTITLE;
        id: string;
        name: string;
    };
}
