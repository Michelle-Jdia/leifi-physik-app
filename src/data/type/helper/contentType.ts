import type { ParagraphBoxExtendedApi } from '@/data/type/api/field/paragraphBoxExtendedApi';
import type { RenderedStringApi } from '@/data/type/api/field/renderedStringApi';
import type { Download } from '@/data/type/app/download';
import type { Paragraph } from '@/data/type/app/field/Paragraph';
import type { ParagraphBoxExtended } from '@/data/type/app/field/paragraphBoxExtended';
import type { Issue } from '@/data/type/app/issue';
import type { Task } from '@/data/type/app/task';

export enum ContentType {
    BRANCH = 'taxonomy_term--branch',
    COLLECTION = 'node--collection',
    COLLECTION_ITEM = 'paragraph--collection_item',
    COLLECTION_SEPARATOR = 'paragraph--collection_separator',
    DOWNLOAD = 'node--download',
    ISSUE = 'node--issue',
    LINK = 'node--link',
    SOLVED = 'taxonomy_term--solved',
    SUBTITLE = 'taxonomy_term--subtitle',
    TASK = 'node--task',
    TOPIC = 'taxonomy_term--topic',
    P_TOC = 'paragraph--toc',
    P_HEADLINE = 'paragraph--headline',
    P_BOX_EXTENDED = 'paragraph--box_extended',
}

export const contentTypeMapToHumanReadableName = new Map<ContentType, string>([
    [ContentType.ISSUE, 'Thema'],
    [ContentType.TASK, 'Aufgabe'],
    [ContentType.TOPIC, 'Themenbereich'],
    [ContentType.DOWNLOAD, 'Download'],
]);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function isIssueStringType(input: string): input is ContentType.ISSUE {
    return input === ContentType.ISSUE;
}

export function isDownloadStringType(input: string): input is ContentType.DOWNLOAD {
    return input === ContentType.DOWNLOAD;
}

export function isTaskStringType(input: string): input is ContentType.TASK {
    return input === ContentType.TASK;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function isIssueObjectType(input: Issue | Task | Download): input is Issue {
    return input.type === ContentType.ISSUE;
}

export function isParagraphToc(input: Paragraph) {
    return input.type === ContentType.P_TOC;
}

export function isParagraphHeadline(input: Paragraph) {
    return input.type === ContentType.P_HEADLINE;
}

export function isParagraphBoxExtended(
    input: ParagraphBoxExtended | Paragraph,
): input is ParagraphBoxExtended {
    return input.type === ContentType.P_BOX_EXTENDED;
}

export function isParagraphBoxExtendedApi(
    input: RenderedStringApi | ParagraphBoxExtendedApi,
): input is ParagraphBoxExtendedApi {
    return input.type === ContentType.P_BOX_EXTENDED;
}
