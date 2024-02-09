import type {
    ReadIssueByIdInput,
    ReadIssueIdByTopicCategoryWeightInput,
    ReadIssuesByTopicInput,
} from '@/data/repository/issueRepository';
import type { IssueApi } from '@/data/type/api/issueApi';
import type { Issue } from '@/data/type/app/issue';
import {
    $readIssue,
    $readIssues,
    $readIssuesByTopic,
    $readNextIssueId,
    $readPrevIssueId,
} from '@/data/repository/issueRepository';
import { $readTasksCountByIssue } from '@/data/repository/taskRepository';
import {
    $useIssuesByTopicStorage,
    $useIssuesStorage,
    $useIssueStorage,
} from '@/data/storage/issueStorage';
import { ContentType } from '@/data/type/helper/contentType';
import {
    parseDateStringToTimestamp,
    parseObjectRelationArray,
    parseParagraphExtendedArray,
    parseValueToString,
} from '@/connection/helper/dataMap';
import { createFetcher, createReactiveData } from '@/connection/helper/fetcher';
import { useLogState } from '@/state/logState';

export enum IssueCategory {
    one = 'Grundwissen',
    two = 'Versuche',
    three = 'Ausblick',
    four = 'Geschichte',
    five = 'Downloads',
}

export const categorySingularMap = new Map<string, string>([
    ['Grundwissen', 'Grundwissen'],
    ['Ausblick', 'Ausblick'],
    ['Versuche', 'Versuch'],
    ['Geschichte', 'Geschichte'],
]);

async function createIssueWithTaskCount(item: IssueApi): Promise<Issue> {
    if (isIssueCategoryGrundwissen(item.field_issue_category.meta?.name)) {
        const { data: tasks } = await $readTasksCountByIssue({
            params: {
                issueId: item.id,
            },
        });

        return createIssue(item, tasks.meta?.count);
    }

    return createIssue(item);
}

function createIssue(input: IssueApi, tasks?: number): Issue {
    return {
        id: parseValueToString(input.id),
        type: ContentType.ISSUE,
        changed: parseDateStringToTimestamp(input.changed),
        title: parseValueToString(input.title),
        is_news: input.field_issue_is_news || false,
        issue_related_leifi: input.field_issue_related_leifi || [], // TODO: no example so far
        issue_teaser_content: parseValueToString(input.field_issue_teaser_content?.processed),
        issue_teaser_title: parseValueToString(input.field_issue_teaser_title),
        issue_weight: input.field_issue_weight || 0,
        news_date: parseDateStringToTimestamp(input.field_news_date),
        has_video: input.field_node_has_video || false,
        issue_category: {
            id: parseValueToString(input.field_issue_category.id),
            name: parseValueToString(input.field_issue_category.meta?.name),
        },
        issue_other_related_nodes: parseObjectRelationArray(input.field_issue_other_related_nodes),
        issue_paragraphs: parseParagraphExtendedArray(input.field_issue_paragraphs),
        issue_paragraphs_ext: parseParagraphExtendedArray(input.field_issue_paragraphs_ext),
        issue_related_nodes: parseObjectRelationArray(input.field_issue_related_nodes),
        node_videos: parseObjectRelationArray(input.field_node_videos),
        referenced_topic: parseValueToString(input.field_referenced_topic.id),
        has_tasks: Boolean(tasks),
    };
}

export const useIssues = createFetcher<never, Issue[]>(
    async () => {
        const { data } = await $readIssues();

        if (!data.data?.length) {
            return;
        }

        const results: Issue[] = [];

        for (const item of data.data) {
            results.push(await createIssueWithTaskCount(item));
        }

        return results;
    },
    $useIssuesStorage,
    {
        log: 'useIssues',
        useCache: true,
    },
);

export const useIssue = createFetcher<ReadIssueByIdInput, Issue>(
    async (input) => {
        const { data } = await $readIssue(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];
        const createdIssue = await createIssueWithTaskCount(firstItem);

        return createdIssue;
    },
    $useIssueStorage,
    {
        log: 'useIssue',
        useCache: true,
    },
);

export const useIssueLive = createFetcher<ReadIssueByIdInput, Issue>(
    async (input) => {
        const { data } = await $readIssue(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];
        const createdIssue = await createIssueWithTaskCount(firstItem);

        return createdIssue;
    },
    $useIssueStorage,
    {
        log: 'useIssueLive',
        useCache: false,
    },
);

export const useIssuesByTopic = createFetcher<ReadIssuesByTopicInput, Issue[]>(
    async (input) => {
        const { data } = await $readIssuesByTopic(input);

        if (!data || !data.data) {
            return;
        }

        const results: Issue[] = [];

        for (const item of data.data) {
            results.push(await createIssueWithTaskCount(item));
        }

        return results;
    },
    $useIssuesByTopicStorage,
    {
        log: 'useIssuesByTopic',
        useCache: true,
    },
);

export const useIssuesByTopicLive = createFetcher<ReadIssuesByTopicInput, Issue[]>(
    async (input) => {
        const { data } = await $readIssuesByTopic(input);

        if (!data || !data.data) {
            return;
        }

        const results: Issue[] = [];

        for (const item of data.data) {
            results.push(await createIssueWithTaskCount(item));
        }

        return results;
    },
    $useIssuesByTopicStorage,
    {
        log: 'useIssuesByTopicLive',
        useCache: false,
    },
);

export const usePrevIssueId = createReactiveData<ReadIssueIdByTopicCategoryWeightInput, string>(
    async (input) => {
        const logState = useLogState();

        logState.add(['usePrevIssue']);

        const { data } = await $readPrevIssueId(input);

        logState.remove(['usePrevIssue']);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        return data.data[0].id;
    },
);

export const useNextIssueId = createReactiveData<ReadIssueIdByTopicCategoryWeightInput, string>(
    async (input) => {
        const logState = useLogState();

        logState.add(['useNextIssue']);

        const { data } = await $readNextIssueId(input);

        logState.remove(['useNextIssue']);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        return data.data[0].id;
    },
);

export function createIssueSubtitle(title: string, hasTasks: boolean): string {
    if (hasTasks) {
        return `${title} inkl. Aufgaben`;
    }

    return title;
}

function isIssueCategoryGrundwissen(category?: string | undefined): boolean {
    return category === IssueCategory.one;
}

export function isIssueFirstCategory(issue: Issue): boolean {
    return issue.issue_category.name === IssueCategory.one;
}

export function isIssueSecondCategory(issue: Issue): boolean {
    return issue.issue_category.name === IssueCategory.two;
}

export function isIssueThirdCategory(issue: Issue): boolean {
    return issue.issue_category.name === IssueCategory.three;
}

export function isIssueFourthCategory(issue: Issue): boolean {
    return issue.issue_category.name === IssueCategory.four;
}
