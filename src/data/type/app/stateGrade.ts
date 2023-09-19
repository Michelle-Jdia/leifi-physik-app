import type { Media } from '@/data/type/app/media';

export interface StateGrade {
    id: string;
    changed: number;
    name: string;
    headline: string;
    icon: Media | null;
}
