import type { ContentType } from '@/data/type/helper/contentType';

// @TODO rename on a simple clean PR
export type AllowedTypes =
    | ContentType.ISSUE
    | ContentType.TASK
    | ContentType.DOWNLOAD
    | ContentType.SUBTITLE;
