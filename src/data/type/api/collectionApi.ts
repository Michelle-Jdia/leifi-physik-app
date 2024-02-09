import type { CollectionItemApi } from '@/data/type/api/field/collectionItemApi';
import type { CollectionSeparatorApi } from '@/data/type/api/field/collectionSeparatorApi';

export interface CollectionApi {
    id: string;
    status: boolean;
    changed: string;
    title: string;
    field_private_title: string;
    field_item: (CollectionSeparatorApi | CollectionItemApi)[];
}
