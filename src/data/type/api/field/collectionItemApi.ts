import type { SolvedApi } from '@/data/type/api/solvedApi';
import type { ContentType } from '@/data/type/helper/contentType';

export interface CollectionItemApi {
    type: ContentType.COLLECTION_ITEM;
    id: string;
    field_note: string | null;
    field_important: boolean;
    field_item: {
        type: ContentType.TASK | ContentType.ISSUE | ContentType.DOWNLOAD;
        id: string;
        title: string;
        field_issue_category?: {
            type: ContentType.SUBTITLE;
            id: string;
            meta: {
                name: string;
            };
        };
        field_referenced_topic?: {
            type: string;
            id: string;
        };
    };
    field_solved: SolvedApi;
}
