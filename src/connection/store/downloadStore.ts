import type { DownloadApi } from '@/data/type/api/downloadApi';
import type { Download } from '@/data/type/app/download';
import type { ReadDownloadInput } from '@/data/repository/downloadRepository';
import { $readDownload, $readDownloads } from '@/data/repository/downloadRepository';
import { $useDownloadsStorage, $useDownloadStorage } from '@/data/storage/downloadStorage';
import { createFetcher } from '@/connection/helper/fetcher';
import {
    parseDateStringToTimestamp,
    parseMediaArray,
    parseMediaItem,
    parseValueToString,
} from '@/connection/helper/dataMap';

function createDownload(input: DownloadApi): Download {
    return {
        id: parseValueToString(input.id),
        changed: parseDateStringToTimestamp(input.changed),
        title: parseValueToString(input.title),
        animation_background: parseValueToString(input.field_animation_background),
        animation_caption: parseValueToString(input.field_animation_caption),
        animation_code: parseValueToString(input.field_animation_code),
        animation_intro: parseValueToString(input.field_animation_intro),
        animation_type: parseValueToString(input.field_animation_type),
        download_description: parseValueToString(input.field_download_description?.processed),
        download_didactic_info: parseValueToString(input.field_download_didactic_info?.processed),
        download_is_news: input.field_download_is_news || false,
        news_date: parseDateStringToTimestamp(input.field_news_date),
        download_file: parseMediaArray(input.field_download_file),
        download_preview: parseMediaItem(input.field_download_preview),
        download_type: parseValueToString(input.field_download_type.meta?.name),
        referenced_topic: parseValueToString(input.id),
    };
}

export const getDownload = createFetcher<ReadDownloadInput, Download>(
    async (input) => {
        const { data } = await $readDownload(input);
        const firstItem = data.data[0];

        return createDownload(firstItem);
    },
    $useDownloadStorage,
    {
        log: 'getDownload',
    },
);

export const getDownloads = createFetcher<never, Download[]>(
    async () => {
        const { data } = await $readDownloads();

        return data.data.map(createDownload);
    },
    $useDownloadsStorage,
    {
        log: 'getDownloads',
    },
);
