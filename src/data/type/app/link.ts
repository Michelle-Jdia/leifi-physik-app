import type { ContentType } from '@/data/type/helper/contentType';

export interface Link {
    id: string;
    type: ContentType.LINK;
    changed: number;
    title: string;
    description: string;
    link_url: {
        uri: string;
        title: string;
    };
    link_type: string;
    referenced_topic: string;
}
