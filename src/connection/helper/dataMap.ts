import type { CollectionItemApi } from '@/data/type/api/field/collectionItemApi';
import type { CollectionSeparatorApi } from '@/data/type/api/field/collectionSeparatorApi';
import type { MediaApi } from '@/data/type/api/field/mediaApi';
import type { ObjectRelationApi } from '@/data/type/api/field/objectRelationApi';
import type { ParagraphBoxExtendedApi } from '@/data/type/api/field/paragraphBoxExtendedApi';
import type {
    RenderedStringApi,
    RenderedStringApiWithoutMeta,
} from '@/data/type/api/field/renderedStringApi';
import type { CollectionItem } from '@/data/type/app/field/collectionItem';
import type { CollectionSeparator } from '@/data/type/app/field/collectionSeparator';
import type { Paragraph } from '@/data/type/app/field/Paragraph';
import type { ParagraphBoxExtended } from '@/data/type/app/field/paragraphBoxExtended';
import type { StructuredString } from '@/data/type/app/field/StructuredString';
import type { Media } from '@/data/type/app/media';
import { devLog } from '@/application/helper/log';
import { isParagraphBoxExtendedApi } from '@/data/type/helper/contentType';
import { isCollectionItemApi, isCollectionSeparatorApi } from '@/store/collectionStore';

export function parseDateStringToTimestamp(input?: string | null): number {
    if (!input) {
        return 0;
    }

    return new Date(input).getTime() / 1000 || 0;
}

export function parseValueToString(input?: string | null): string {
    if (!input) {
        return '';
    }

    return input;
}

export function parseBranchColor(input?: string | null): string {
    if (!input) {
        return '';
    }

    return `v-bg-${input}`;
}

export function parseRenderedStringArray(input?: RenderedStringApi[]): string[] {
    if (!input || !Array.isArray(input)) {
        return [];
    }

    try {
        // if input is Array, meta will be there (unless unexpected changes in API), but TS still complains, hence the || ''
        // it complains because meta can be undefined  "meta?: {"
        return input.map((obj) => obj.meta?.rendered_string || '');
    } catch (error) {
        devLog(error);

        return [];
    }
}

export function parseObjectRelationArray(input?: ObjectRelationApi[]): string[] {
    if (!input || !Array.isArray(input) || !input[0] || !input[0].id) {
        return [];
    }

    // if input is array, id will be there, but TS still complaining, so we return '' in the impossible case that id isn't there
    // TS complaining bcuz ObjectRelationApi has id?: string
    return input.map((obj) => obj.id || '');
}

export function parseMediaArray(input?: MediaApi[]): Media[] {
    if (!input || !Array.isArray(input) || !input[0] || !input[0].meta) {
        return [];
    }

    if (Array.isArray(input)) {
        return input.map((item) => ({
            id: parseValueToString(item.id),
            type: parseValueToString(item.type),
            changed: parseDateStringToTimestamp(item.meta?.media.changed),
            name: parseValueToString(item.meta?.media.name),
            url: parseValueToString(item.meta?.media.url),
            alt: parseValueToString(item.meta?.media.alt),
            title: parseValueToString(item.meta?.media.title),
            mime: parseValueToString(item.meta?.media.mime),
            size: parseInt(item.meta?.media.size || '0'),
        }));
    }

    return [];
}

export function parseMediaItem(input?: MediaApi): Media | null {
    if (!input || Array.isArray(input) || !input.meta) {
        // do we want to try and get first item in case of array? empty API response seems to be an object, not array.
        // So array should be a populated field
        return null;
    }

    return {
        id: parseValueToString(input.id),
        type: parseValueToString(input.type),
        changed: parseDateStringToTimestamp(input.meta.media.changed),
        name: parseValueToString(input.meta.media.name),
        url: parseValueToString(input.meta.media.url),
        alt: parseValueToString(input.meta.media.alt),
        title: parseValueToString(input.meta.media.title),
        mime: parseValueToString(input.meta.media.mime),
        size: parseInt(input.meta.media.size),
    };
}

export function parseParagraphArray(input?: RenderedStringApi[]): Paragraph[] {
    if (!input || !Array.isArray(input) || !input[0] || !input[0].meta) {
        return [];
    }

    try {
        // if input is Array, meta will be there (unless unexpected changes in API), but TS still complains
        const result = input.filter((item) => item);

        return result.map(parseParagraph);
    } catch (error) {
        devLog(error);

        return [];
    }
}

function parseParagraph(input: RenderedStringApi): Paragraph {
    return {
        type: input.type,
        id: input.id,
        rendered_string: input.meta?.rendered_string || '',
        attachments: input.meta?.attachments || [],
    };
}

export function parseParagraphExtendedArray(
    input: (RenderedStringApi | ParagraphBoxExtendedApi)[],
): (Paragraph | ParagraphBoxExtended)[] {
    if (!input || !Array.isArray(input) || !input[0]) {
        return [];
    }

    const filteredInput = input.filter((item) => item);

    return filteredInput.map((item) => {
        if (isParagraphBoxExtendedApi(item)) {
            return {
                type: item.type,
                headline: item.field_paragraph_box2_headline,
                color: item.field_paragraph_box2_color,
                content: parseParagraphArray(item.field_paragraph_box2_content),
            };
        }

        return parseParagraph(item);
    });
}

export function parseStructuredString(
    input?: RenderedStringApiWithoutMeta,
): StructuredString | null {
    if (!input || Array.isArray(input)) {
        return null;
    }

    return {
        rendered_string: input.rendered_string || '',
        attachments: input.attachments || [],
    };
}

export function parseCollectionItems(
    input?: (CollectionItemApi | CollectionSeparatorApi)[],
): (CollectionItem | CollectionSeparator)[] {
    if (!input || (!Array.isArray(input) && !input[0])) {
        return [];
    }

    const filteredInput = input.filter((item) => {
        return isCollectionItemApi(item) || isCollectionSeparatorApi(item);
    });

    if (!filteredInput.length) {
        return [];
    }

    return filteredInput.map(
        (
            item: CollectionItemApi | CollectionSeparatorApi,
        ): CollectionItem | CollectionSeparator => {
            if (isCollectionItemApi(item)) {
                return {
                    type: item.type,
                    id: item.id,
                    field_note: item.field_note ?? '',
                    field_important: item.field_important,
                    field_solved_id: item.field_solved.id,
                    field_item: {
                        type: item.field_item.type,
                        id: item.field_item.id,
                        title: item.field_item.title,
                        field_issue_category: item.field_item.field_issue_category?.meta.name ?? '',
                        field_referenced_topic_id: item.field_item.field_referenced_topic?.id ?? '',
                    },
                };
            }

            return {
                type: item.type,
                id: item.id,
                field_category: {
                    type: item.field_category.type,
                    id: item.field_category.id,
                    name: item.field_category.meta.name,
                },
            };
        },
    );
}

interface Weighted {
    weight: number;
}

export function sortByWeight<T extends Weighted>(input: T[]): T[] {
    return input.sort((inputA, inputB) => {
        return inputA.weight - inputB.weight;
    });
}

export function generateAppID(): string {
    const dateInMs = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 1000000000);

    return `app_internal_id_${dateInMs}${randomNumber}`;
}
