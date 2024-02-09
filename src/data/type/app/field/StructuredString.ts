import type { ParagraphAttachment } from '@/data/type/app/field/ParagraphAttachment';

export interface StructuredString {
    rendered_string: string;
    attachments: ParagraphAttachment[];
}
