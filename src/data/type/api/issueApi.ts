import type { ObjectRelationApi } from '@/data/type/api/field/objectRelationApi';
import type { ParagraphBoxExtendedApi } from '@/data/type/api/field/paragraphBoxExtendedApi';
import type { RenderedStringApi } from '@/data/type/api/field/renderedStringApi';
import type { TextApi } from '@/data/type/api/field/textApi';

export interface IssueApi {
    id: string;
    status: boolean;
    changed: string;
    title: string;
    field_issue_is_news: boolean;
    field_issue_related_leifi: string[];
    field_issue_teaser_content: TextApi;
    field_issue_teaser_title: string;
    field_issue_weight: number;
    field_news_date: string | null;
    field_node_has_video: boolean;
    field_issue_category: {
        id: string;
        meta?: {
            name: string;
        };
    };
    field_issue_other_related_nodes: ObjectRelationApi[];
    field_issue_paragraphs: (RenderedStringApi | ParagraphBoxExtendedApi)[];
    field_issue_paragraphs_ext: (RenderedStringApi | ParagraphBoxExtendedApi)[];
    field_issue_related_nodes: ObjectRelationApi[];
    field_node_videos: ObjectRelationApi[];
    field_referenced_topic: ObjectRelationApi;
}
