import type { SubtitleApi } from '@/data/type/api/subtitleApi';
import type { Subtitle } from '@/data/type/app/subtitle';
import { $readSubtitles } from '@/data/repository/subtitleRepository';
import { $useSubtitleStorage } from '@/data/storage/subtitleStorage';
import { ContentType } from '@/data/type/helper/contentType';
import { parseDateStringToTimestamp, parseValueToString } from '@/connection/helper/dataMap';
import { createFetcher } from '@/connection/helper/fetcher';

function createSubtitle(input: SubtitleApi): Subtitle {
    return {
        id: parseValueToString(input.id),
        changed: parseDateStringToTimestamp(input.changed),
        type: ContentType.SUBTITLE,
        name: parseValueToString(input.name),
    };
}

export const useSubtitles = createFetcher<never, Subtitle[]>(
    async () => {
        const { data } = await $readSubtitles();

        if (!data.data?.length) {
            return;
        }

        return data.data.map(createSubtitle);
    },
    $useSubtitleStorage,
    {
        log: 'useSubtitles',
        useCache: true,
    },
);

export const useSubtitlesLive = createFetcher<never, Subtitle[]>(
    async () => {
        const { data } = await $readSubtitles();

        if (!data.data?.length) {
            return;
        }

        return data.data.map(createSubtitle);
    },
    $useSubtitleStorage,
    {
        log: 'useSubtitlesLive',
        useCache: false,
    },
);
