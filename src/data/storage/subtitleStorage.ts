import type { Subtitle } from '@/data/type/app/subtitle';
import { createStorage, createStorageHandler, defaultStorageReadMany } from '@/data/helper/storage';

const subtitleStorage = createStorage<{ [id: string]: Subtitle }>('subtitle');

export const $useSubtitleStorage = createStorageHandler<never, Subtitle[]>({
    async read() {
        return defaultStorageReadMany(subtitleStorage);
    },

    async write(data) {
        if (!data.length) {
            return;
        }

        const subtitles = (await subtitleStorage.read()) || {};

        data.forEach((subtitle) => {
            subtitles[subtitle.id] = subtitle;
        });

        return subtitleStorage.write(subtitles);
    },
});

export async function getSubtitleById(id: string): Promise<Subtitle | undefined> {
    const subtitles = (await subtitleStorage.read()) || {};

    return subtitles[id];
}
