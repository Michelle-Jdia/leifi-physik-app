import type { Media } from '@/data/type/app/media';

export interface Branch {
    id: string;
    changed: number;
    name: string;
    description: string;
    headline: string;
    color: string;
    icon: Media | null;
}
