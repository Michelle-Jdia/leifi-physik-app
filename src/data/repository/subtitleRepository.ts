import type { SubtitleApi } from '@/data/type/api/subtitleApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadSubtitleOutput {
    data: SubtitleApi[];
}

const defaultParams = {
    jsonapi_include: '1',
};

export const $readSubtitles = createEndpoint<ReadSubtitleOutput>({
    link: 'subtitle',
    params: {
        ...defaultParams,
    },
});
