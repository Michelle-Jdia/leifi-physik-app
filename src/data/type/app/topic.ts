import type { Media } from '@/data/type/app/media';
import type { ContentType } from '@/data/type/helper/contentType';

export interface Topic {
    id: string;
    type: ContentType.TOPIC;
    changed: number;
    name: string;
    weight: number;
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
