import type { RenderedStringAttachmentApi } from '@/data/type/api/field/renderedStringAttachmentApi';

export interface RenderedStringApi {
    type: string;
    id: string;
    meta?: {
        rendered_string: string;
        attachments: RenderedStringAttachmentApi[];
    };
}

export interface RenderedStringApiWithoutMeta {
    rendered_string: string | null;
    attachments: RenderedStringAttachmentApi[];
}
