import type { ObjectRelationApi } from '@/data/type/api/field/objectRelationApi';

export interface LinkApi {
    id: string;
    status: boolean;
    changed: string | null;
    title: string;
    field_link_description: string;
    field_link_url: {
        uri: string;
        title: string | null;
    };
    field_link_type: {
        meta?: {
            name: string;
        };
    };
    field_referenced_topic: ObjectRelationApi;
}
