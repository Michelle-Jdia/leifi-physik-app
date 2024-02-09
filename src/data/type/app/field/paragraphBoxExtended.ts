import type { Paragraph } from '@/data/type/app/field/Paragraph';

export interface ParagraphBoxExtended {
    type: string;
    headline: string;
    color: string;
    content: Paragraph[];
}
