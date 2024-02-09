import type { ContentType } from '@/data/type/helper/contentType';

export interface CollectionSeparatorApi {
    type: ContentType.COLLECTION_SEPARATOR;
    id: string;
    field_category: {
        type: ContentType.SUBTITLE;
        id: string;
        meta: {
            name: string;
        };
    };
}
