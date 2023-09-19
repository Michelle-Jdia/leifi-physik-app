export interface Issue {
    id: string;
    changed: number;
    title: string;
    is_news: boolean;
    issue_related_leifi?: string[];
    issue_teaser_content: string;
    issue_teaser_title: string;
    issue_weight: number;
    news_date: number;
    has_video: boolean;
    issue_category: string;
    issue_other_related_nodes: string[];
    issue_paragraphs: string[];
    issue_paragraphs_ext: string[];
    issue_related_nodes: string[];
    node_videos: string[];
    referenced_topic: string;
    opt?: {
        // optional fields to be filled on-demand and not persisted
        referenced_branch?: string;
        branch_name?: string;
    };
}
