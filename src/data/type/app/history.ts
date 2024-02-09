import type { ContentType } from '@/data/type/helper/contentType';

export type HistoryTypeKey = ContentType.ISSUE | ContentType.TASK | ContentType.DOWNLOAD;

export interface History {
    id: string;
    type: HistoryTypeKey;
    timestamp: number;
}
