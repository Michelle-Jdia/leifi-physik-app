import type { SearchIssueCategoryApi } from '@/data/type/api/field/searchIssueCategoryApi';
import type { SearchTaskTypeApi } from '@/data/type/api/field/searchTaskTypeApi';
import type { SearchTopicBranchApi } from '@/data/type/api/field/searchTopicBranchApi';
import type { SearchTopicReferencedBranchApi } from '@/data/type/api/field/searchTopicReferencedBranchApi';
import type { ContentType } from '@/data/type/helper/contentType';

export interface SearchApi {
    id: string;
    type: string;
}

export type SearchApiGeneric =
    | SearchTopicApi
    | SearchTaskApi
    | SearchIssueApi
    | SearchLinkApi
    | SearchDownloadApi;

export interface SearchTopicApi extends SearchApi {
    type: ContentType.TOPIC;
    name: string;
    field_topic_referenced_branch?: SearchTopicReferencedBranchApi;
    description?: {
        processed: string;
    };
}

export interface SearchTaskApi extends SearchApi {
    type: ContentType.TASK;
    title: string;
    field_referenced_topic: SearchTopicBranchApi;
    field_task_type: SearchTaskTypeApi;
}

export interface SearchIssueApi extends SearchApi {
    type: ContentType.ISSUE;
    title: string;
    field_referenced_topic: SearchTopicBranchApi;
    field_issue_category: SearchIssueCategoryApi;
}

export interface SearchLinkApi extends SearchApi {
    type: ContentType.LINK;
    title: string;
}

// @TODO: update API with Topic/Branch for Download as well
export interface SearchDownloadApi extends SearchApi {
    type: ContentType.DOWNLOAD;
    title: string;
    field_referenced_topic: SearchTopicBranchApi;
}
