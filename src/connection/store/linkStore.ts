import type { LinkApi } from '@/data/type/api/linkApi';
import type { Link } from '@/data/type/app/link';
import type { ReadLinkInput } from '@/data/repository/linkRepository';
import { $readLinks, $readLink } from '@/data/repository/linkRepository';
import { $useLinkStorage, $useLinksStorage } from '@/data/storage/linkStorage';
import { createFetcher } from '@/connection/helper/fetcher';
import { parseValueToString, parseDateStringToTimestamp } from '@/connection/helper/dataMap';

function createLink(input: LinkApi): Link {
    return {
        id: parseValueToString(input.id),
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
        const firstItem = data.data[0];

        return createLink(firstItem);
    },
    $useLinkStorage,
    {
        log: 'getLink',
    },
);
