import type { IssueApi } from '@/data/type/api/issueApi';
import type { Issue } from '@/data/type/app/issue';
import type { ReadIssueInput } from '@/data/repository/issueRepository';
import { $readIssues, $readIssue, $readIssuesByTopic } from '@/data/repository/issueRepository';
import {
    $useIssueStorage,
    $useIssuesStorage,
    $useIssuesByTopicStorage,
} from '@/data/storage/issueStorage';
import { createFetcher } from '@/connection/helper/fetcher';
import {
    parseDateStringToTimestamp,
    parseObjectRelationArray,
    parseRenderedStringArray,
    parseValueToString,
} from '@/connection/helper/dataMap';

export enum IssueCategory {
    one = 'Grundwissen',
    two = 'Versuche',
    three = 'Ausblick',
    four = 'Geschichte',
}

function createIssue(input: IssueApi): Issue {
    return {
        id: parseValueToString(input.id),
        changed: parseDateStringToTimestamp(input.changed),
        title: parseValueToString(input.title),
        is_news: input.field_issue_is_news || false,
        issue_related_leifi: input.field_issue_related_leifi || [], // TODO: no example so far
        issue_teaser_content: parseValueToString(input.field_issue_teaser_content?.processed),
        issue_teaser_title: parseValueToString(input.field_issue_teaser_title),
        issue_weight: input.field_issue_weight || 0,
        news_date: parseDateStringToTimestamp(input.field_news_date),
        has_video: input.field_node_has_video || false,
        issue_category: parseValueToString(input.field_issue_category.meta?.name),
        issue_other_related_nodes: parseObjectRelationArray(input.field_issue_other_related_nodes),
        issue_paragraphs: parseRenderedStringArray(input.field_issue_paragraphs),
        issue_paragraphs_ext: parseRenderedStringArray(input.field_issue_paragraphs_ext),
        issue_related_nodes: parseObjectRelationArray(input.field_issue_related_nodes),
        node_videos: parseObjectRelationArray(input.field_node_videos),
        referenced_topic: parseValueToString(input.field_referenced_topic.id),
    };
}

export const useIssues = createFetcher<never, Issue[]>(
    async () => {
        const { data } = await $readIssues();

        return data.data.map((item) => {
            return createIssue(item);
        });
    },
    $useIssuesStorage,
    {
        log: 'useIssues',
    },
);

export const useIssue = createFetcher<ReadIssueInput, Issue>(
    async (input) => {
        const { data } = await $readIssue(input);
        const firstItem = data.data[0];

        return createIssue(firstItem);
    },
    $useIssueStorage,
    {
        log: 'useIssue',
    },
);

export const useIssuesByTopic = createFetcher<ReadIssueInput, Issue[]>(
    async (input) => {
        const { data } = await $readIssuesByTopic(input);

        return data.data.map(createIssue);
    },
    $useIssuesByTopicStorage,
    {
        log: 'useIssuesByTopic',
    },
);

export function isIssueFirstCategory(issue: Issue): boolean {
    return issue.issue_category === IssueCategory.one;
}

export function isIssueSecondCategory(issue: Issue): boolean {
    return issue.issue_category === IssueCategory.two;
}

export function isIssueThirdCategory(issue: Issue): boolean {
    return issue.issue_category === IssueCategory.three;
}

export function isIssueFourthCategory(issue: Issue): boolean {
    return issue.issue_category === IssueCategory.four;
}
