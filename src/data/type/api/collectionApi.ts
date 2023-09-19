import type { RenderedStringApi } from '@/data/type/api/field/renderedStringApi';

export interface CollectionApi {
    id: string;
    status: boolean;
    changed: string;
    title: string;
    field_private_title: string;
    field_item: RenderedStringApi[];
}
