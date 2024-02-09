import type { SolvedEnumId } from '@/data/type/api/solvedApi';
import type { ContentType } from '@/data/type/helper/contentType';

export interface CollectionItem {
    type: string;
    id: string;
    field_note: string;
    field_important: boolean;
    field_solved_id: SolvedEnumId | string;
    field_item: {
        type: ContentType.ISSUE | ContentType.TASK | ContentType.DOWNLOAD;
        id: string;
        title: string;
        field_issue_category: string;
        field_referenced_topic_id: string;
    };
}
