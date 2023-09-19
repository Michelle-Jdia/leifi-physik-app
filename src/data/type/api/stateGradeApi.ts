import type { MediaApi } from '@/data/type/api/field/mediaApi';

export interface StateGradeApi {
    id: string;
    status: boolean;
    changed: string;
    name: string;
    field_state_grade_headline: string | null;
    field_state_grade_icon: MediaApi;
}
