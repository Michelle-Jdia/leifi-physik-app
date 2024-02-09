import type { ParagraphAttachment } from '@/data/type/app/field/ParagraphAttachment';

export interface Paragraph {
    type: string;
    id: string;
    rendered_string: string;
    attachments: ParagraphAttachment[];
}
