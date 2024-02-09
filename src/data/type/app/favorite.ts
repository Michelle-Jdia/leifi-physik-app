import { ContentType } from '@/data/type/helper/contentType';

export type FavoriteTypeKey = ContentType.ISSUE | ContentType.TASK | ContentType.DOWNLOAD;

export const FavoriteTypeKeyArray: FavoriteTypeKey[] = [
    ContentType.ISSUE,
    ContentType.TASK,
    ContentType.DOWNLOAD,
];

export function isFavoriteType(
    input: ContentType,
): input is ContentType.ISSUE | ContentType.TASK | ContentType.DOWNLOAD {
    return (
        input === ContentType.ISSUE || input === ContentType.TASK || input === ContentType.DOWNLOAD
    );
}

export interface Favorite {
    id: string;
    type: FavoriteTypeKey;
}
