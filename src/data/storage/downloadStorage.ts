import type { ReadDownloadInput } from '@/data/repository/downloadRepository';
import type { Download } from '@/data/type/app/download';
import { mergeDeepRight } from 'ramda';
import { createStorage, createStorageHandler } from '@/data/helper/storage';

/**
 * @deprecated We will most likely not be using Downloads in the app. If we do in the future, please bring up to date
 */

const downloadStorage = createStorage<{ [id: string]: Download }>('download');

export const $useDownloadsStorage = createStorageHandler<ReadDownloadInput, Download[]>({
    async read() {
        const downloads = await downloadStorage.read();

        if (!downloads?.length) {
            return;
        }

        return Object.values(downloads);
    },

    async write(data) {
        const downloads = (await downloadStorage.read()) || {};

        if (!data) {
            return;
        }

        data.forEach((download) => {
            if (!downloads[download.id]) {
                downloads[download.id] = download;
            }

            if (downloads[download.id]) {
                downloads[download.id] = mergeDeepRight(downloads[download.id] || {}, download);
            }
        });

        downloadStorage.write(downloads);
    },
});

export const $useDownloadStorage = createStorageHandler<ReadDownloadInput, Download>({
    async read(input) {
        const downloads = await downloadStorage.read();

        if (!downloads?.length) {
            return;
        }

        const downloadId = input?.params.id;

        if (!downloadId || !downloads[downloadId]) {
            return;
        }

        return downloads[downloadId];
    },

    async write(data) {
        const downloads = await downloadStorage.read();

        if (!data) {
            return;
        }

        const downloadId = data.id;

        if (!downloads) {
            downloadStorage.write({
                [downloadId]: data,
            });

            return;
        }

        if (!downloads[downloadId]) {
            downloads[downloadId] = data;
            downloadStorage.write(downloads);

            return;
        }

        downloads[downloadId] = mergeDeepRight(downloads[downloadId] || {}, data);
        downloadStorage.write(downloads);
    },
});
