import type {
    ReadDownloadByTopicInput,
    ReadDownloadInput,
} from '@/data/repository/downloadRepository';
import type { Download } from '@/data/type/app/download';
import {
    createStorage,
    createStorageHandler,
    defaultStorageReadMany,
    defaultStorageReadSingle,
} from '@/data/helper/storage';

const downloadStorage = createStorage<{ [id: string]: Download }>('download');

export const $useDownloadsStorage = createStorageHandler<ReadDownloadInput, Download[]>({
    async read() {
        return defaultStorageReadMany(downloadStorage);
    },

    async write(data) {
        if (!data.length) {
            return;
        }

        const downloads = (await downloadStorage.read()) || {};

        data.forEach((download) => {
            downloads[download.id] = download;
        });

        return downloadStorage.write(downloads);
    },
});

export const $useDownloadsByTopicStorage = createStorageHandler<
    ReadDownloadByTopicInput,
    Download[]
>({
    async read(input) {
        const topicId = input?.params.topicId;

        if (!topicId) {
            return;
        }

        const downloads = (await downloadStorage.read()) || {};

        if (!Object.values(downloads).length) {
            return;
        }

        const downloadsByTopic = Object.values(downloads).filter(
            (download) => download.referenced_topic === topicId,
        );

        if (!downloadsByTopic.length) {
            return;
        }

        return downloadsByTopic;
    },

    async write(data) {
        if (!data.length) {
            return;
        }

        const downloads = (await downloadStorage.read()) || {};

        data.forEach((download) => {
            downloads[download.id] = download;
        });

        return downloadStorage.write(downloads);
    },
});

export const $useDownloadStorage = createStorageHandler<ReadDownloadInput, Download>({
    async read(input) {
        return defaultStorageReadSingle(downloadStorage, input);
    },

    async write(data) {
        const downloadId = data.id;

        if (!downloadId) {
            return;
        }

        const downloads = (await downloadStorage.read()) || {};

        downloads[downloadId] = data;

        return downloadStorage.write(downloads);
    },
});
