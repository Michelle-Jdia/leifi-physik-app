import type { ReadLinkInput } from '@/data/repository/linkRepository';
import type { Link } from '@/data/type/app/link';
import { mergeDeepRight } from 'ramda';
import { createStorage, createStorageHandler } from '@/data/helper/storage';

/**
 * @deprecated We will most likely not be using link storage in the app. If we do in the future, please bring up to date
 */

const linkStorage = createStorage<{ [id: string]: Link }>('link');

export const $useLinksStorage = createStorageHandler<ReadLinkInput, Link[]>({
    async read() {
        const links = await linkStorage.read();

        if (!links?.length) {
            return;
        }

        return Object.values(links);
    },

    async write(data) {
        const links = (await linkStorage.read()) || {};

        if (!data) {
            return;
        }

        data.forEach((link) => {
            if (!links[link.id]) {
                links[link.id] = link;
            }

            if (links[link.id]) {
                links[link.id] = mergeDeepRight(links[link.id] || {}, link);
            }
        });

        linkStorage.write(links);
    },
});

export const $useLinkStorage = createStorageHandler<ReadLinkInput, Link>({
    async read(input) {
        const links = await linkStorage.read();

        if (!links?.length) {
            return;
        }

        const linkId = input?.params.id;

        if (!linkId || !links[linkId]) {
            return;
        }

        return links[linkId];
    },

    async write(data) {
        const links = await linkStorage.read();

        if (!data) {
            return;
        }

        const linkId = data.id;

        if (!links) {
            linkStorage.write({
                [linkId]: data,
            });

            return;
        }

        if (!links[linkId]) {
            links[linkId] = data;
            linkStorage.write(links);

            return;
        }

        links[linkId] = mergeDeepRight(links[linkId] || {}, data);
        linkStorage.write(links);
    },
});
