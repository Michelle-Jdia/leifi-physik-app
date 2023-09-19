import type { MediaApi } from '@/data/type/api/field/mediaApi';
import type { RenderedStringApi } from '@/data/type/api/field/renderedStringApi';
import type { Media } from '@/data/type/app/media';
import { devLog } from '@/application/helper/log';
import type { ObjectRelationApi } from '@/data/type/api/field/objectRelationApi';

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

export function parseRenderedStringArray(input?: RenderedStringApi[]): string[] {
    if (!input || !Array.isArray(input)) {
        return [];
    }

    try {
        // if input is Array, meta will be there (unless unexpected changes in API), but TS still complains, hence the || ''
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
            size: Number(item.meta?.media.size), // for some reason parseInt doesn't work here. something about string | undefined
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

    if (input.meta) {
        return {
            id: parseValueToString(input.id),
            type: parseValueToString(input.type),
            changed: parseDateStringToTimestamp(input.meta?.media.changed),
            name: parseValueToString(input.meta?.media.name),
            url: parseValueToString(input.meta?.media.url),
            alt: parseValueToString(input.meta?.media.alt),
            title: parseValueToString(input.meta?.media.title),
            mime: parseValueToString(input.meta?.media.mime),
            size: parseInt(input.meta?.media.size),
        };
    }

    return null;
}
