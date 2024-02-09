import type { ContentType } from '@/data/type/helper/contentType';

export enum SolvedEnumId {
    LEARNED = '2b9baee1-ac46-4e72-9f79-1d12fe2d98f7',
    REPEAT = 'ad764b4c-c17b-4fc3-8f50-229a3295ef59',
    NOT_LEARNED = '4cd52197-be97-442a-9d17-15a45e0ded98',
}

export interface SolvedApi {
    type: ContentType.SOLVED;
    id: SolvedEnumId | string;
    name: string;
}
