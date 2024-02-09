import type { RenderedStringApi } from '@/data/type/api/field/renderedStringApi';

export interface ParagraphBoxExtendedApi {
    type: string;
    uuid: string;
    field_paragraph_box2_color: string;
    field_paragraph_box2_headline: string;
    field_paragraph_box2_content: RenderedStringApi[];
}
