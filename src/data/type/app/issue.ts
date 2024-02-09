import type { Paragraph } from '@/data/type/app/field/Paragraph';
import type { ParagraphBoxExtended } from '@/data/type/app/field/paragraphBoxExtended';
import type { ContentType } from '@/data/type/helper/contentType';

export interface Issue {
    id: string;
    type: ContentType.ISSUE;
    changed: number;
    title: string;
    is_news: boolean;
    issue_related_leifi?: string[];
    issue_teaser_content: string;
    issue_teaser_title: string;
    issue_weight: number;
    news_date: number;
    has_video: boolean;
    issue_category: {
        id: string;
        name: string;
    };
    issue_other_related_nodes: string[];
    issue_paragraphs: (Paragraph | ParagraphBoxExtended)[];
    issue_paragraphs_ext: (Paragraph | ParagraphBoxExtended)[];
    issue_related_nodes: string[];
    node_videos: string[];
    referenced_topic: string;
    has_tasks: boolean;
    opt?: {
        // optional fields to be filled on-demand and not persisted
        referenced_branch?: string;
        branch_name?: string;
    };
}
