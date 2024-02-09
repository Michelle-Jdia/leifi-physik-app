import type { MediaApi } from '@/data/type/api/field/mediaApi';
import type { TextApi } from '@/data/type/api/field/textApi';

export interface BranchApi {
    id: string;
    status: boolean;
    changed: string | null;
    name: string;
    weight: number;
    description: TextApi;
    field_branch_headline: string | null;
    field_branch_color: {
        meta?: {
            field_class_name: string;
        };
    };
    field_branch_icon: MediaApi;
}
