import type {
    ReadDownloadByTopicInput,
    ReadDownloadInput,
} from '@/data/repository/downloadRepository';
import type { DownloadApi } from '@/data/type/api/downloadApi';
import type { Download } from '@/data/type/app/download';
import { $readDownload, $readDownloadsByTopic } from '@/data/repository/downloadRepository';
import { $useDownloadsByTopicStorage, $useDownloadStorage } from '@/data/storage/downloadStorage';
import { ContentType } from '@/data/type/helper/contentType';
import {
    parseDateStringToTimestamp,
    parseMediaArray,
    parseMediaItem,
    parseStructuredString,
    parseValueToString,
} from '@/connection/helper/dataMap';
import { createFetcher } from '@/connection/helper/fetcher';

function createDownload(input: DownloadApi): Download {
    return {
        id: parseValueToString(input.id),
        type: ContentType.DOWNLOAD,
        changed: parseDateStringToTimestamp(input.changed),
        title: parseValueToString(input.title),
        animation_background: parseValueToString(input.field_animation_background),
        animation_caption: parseValueToString(input.field_animation_caption),
        animation_code: parseStructuredString(input.field_animation_code),
        animation_intro: parseValueToString(input.field_animation_intro),
        animation_type: parseValueToString(input.field_animation_type),
        download_description: parseValueToString(input.field_download_description?.processed),
        download_didactic_info: parseValueToString(input.field_download_didactic_info?.processed),
        download_is_news: input.field_download_is_news || false,
        news_date: parseDateStringToTimestamp(input.field_news_date),
        download_file: parseMediaArray(input.field_download_file),
        download_preview: parseMediaItem(input.field_download_preview),
        download_type: parseValueToString(input.field_download_type.meta?.name),
        referenced_topic: parseValueToString(input.field_referenced_topic.id),
    };
}

export const useDownload = createFetcher<ReadDownloadInput, Download>(
    async (input) => {
        const { data } = await $readDownload(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];

        return createDownload(firstItem);
    },
    $useDownloadStorage,
    {
        log: 'useDownload',
        useCache: true,
    },
);

export const useDownloadLive = createFetcher<ReadDownloadInput, Download>(
    async (input) => {
        const { data } = await $readDownload(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];

        return createDownload(firstItem);
    },
    $useDownloadStorage,
    {
        log: 'useDownloadLive',
        useCache: false,
    },
);

export const useDownloadsByTopic = createFetcher<ReadDownloadByTopicInput, Download[]>(
    async (input) => {
        const { data } = await $readDownloadsByTopic(input);

        if (!data.data?.length) {
            return;
        }

        return data.data.map(createDownload);
    },
    $useDownloadsByTopicStorage,
    {
        log: 'useDownloadsByTopic',
        useCache: true,
    },
);

export const useDownloadsByTopicLive = createFetcher<ReadDownloadByTopicInput, Download[]>(
    async (input) => {
        const { data } = await $readDownloadsByTopic(input);

        if (!data.data?.length) {
            return;
        }

        return data.data.map(createDownload);
    },
    $useDownloadsByTopicStorage,
    {
        log: 'useDownloadsByTopicLive',
        useCache: false,
    },
);
