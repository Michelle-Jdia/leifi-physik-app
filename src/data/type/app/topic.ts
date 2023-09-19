import type { Media } from '@/data/type/app/media';

export interface Topic {
    id: string;
    changed: number;
    name: string;
    description: string;
    info_outlook: string;
    downloads: string;
    history: string;
    basics_tasks: string;
    degree: {
        label: string;
        value: number;
    };
    experiments: string;
    weblinks: string;
    referenced_grades: string[];
    referenced_branch: string;
    image: Media | null;
}
