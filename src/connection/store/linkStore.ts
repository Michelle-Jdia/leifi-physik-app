import type { ReadLinkInput } from '@/data/repository/linkRepository';
import type { LinkApi } from '@/data/type/api/linkApi';
import type { Link } from '@/data/type/app/link';
import { $readLink, $readLinks } from '@/data/repository/linkRepository';
import { $useLinksStorage, $useLinkStorage } from '@/data/storage/linkStorage';
import { ContentType } from '@/data/type/helper/contentType';
import { parseDateStringToTimestamp, parseValueToString } from '@/connection/helper/dataMap';
import { createFetcher } from '@/connection/helper/fetcher';

function createLink(input: LinkApi): Link {
    return {
        id: parseValueToString(input.id),
        type: ContentType.LINK,
        changed: parseDateStringToTimestamp(input.changed),
        title: parseValueToString(input.title),
        description: parseValueToString(input.field_link_description),
        link_url: {
            uri: parseValueToString(input.field_link_url.uri),
            title: parseValueToString(input.field_link_url.title),
        },
        link_type: parseValueToString(input.field_link_type.meta?.name),
        referenced_topic: parseValueToString(input.field_referenced_topic.id),
    };
}

export const getLinks = createFetcher<never, Link[]>(
    async () => {
        const { data } = await $readLinks();

        if (!data.data?.length) {
            return;
        }

        return data.data.map(createLink);
    },
    $useLinksStorage,
    {
        log: 'getLinks',
    },
);

export const getLink = createFetcher<ReadLinkInput, Link>(
    async (input) => {
        const { data } = await $readLink(input);

        if (!data || !data.data || !data.data[0]) {
            return;
        }

        const firstItem = data.data[0];

        return createLink(firstItem);
    },
    $useLinkStorage,
    {
        log: 'getLink',
    },
);
