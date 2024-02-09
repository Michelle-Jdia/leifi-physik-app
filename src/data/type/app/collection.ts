import type { CollectionItem } from '@/data/type/app/field/collectionItem';
import type { CollectionSeparator } from '@/data/type/app/field/collectionSeparator';
import type { ContentType } from '@/data/type/helper/contentType';

export interface Collection {
    id: string;
    type: ContentType.COLLECTION;
    changed: number;
    title: string;
    private_title: string;
    items: (CollectionItem | CollectionSeparator)[];
    isMyCollection: boolean;
    isSubscribed: boolean;
    isLearnMode: boolean;
}
