import type { DownloadApi } from '@/data/type/api/downloadApi';
import { createEndpoint } from '@/data/helper/endpoint';

export interface ReadDownloadInput {
    params: {
        id: string;
    };
}

export interface ReadDownloadByTopicInput {
    params: {
        topicId: string;
    };
}

export interface ReadDownloadOutput {
    data: DownloadApi[];
}

const defaultParams = {
    // include: [
    //     'field_download_preview.field_media_image',
    //     'field_download_type',
    //     'field_download_file.field_media_file_1',
    // 'field_referenced_topic',
    // ].join(),
    // 'fields[media--image]': 'field_media_image',
    jsonapi_include: '1',
};

export const $readDownload = createEndpoint<ReadDownloadInput, ReadDownloadOutput>({
    link: 'download',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
                'filter[id]': axiosConfig.params?.id || '',
            },
        };
    },
});

export const $readDownloads = createEndpoint<ReadDownloadOutput>({
    link: 'download',
    params: {
        ...defaultParams,
    },
});

export const $readDownloadsByTopic = createEndpoint<ReadDownloadByTopicInput, ReadDownloadOutput>({
    link: 'download',
    configureEndpoint: (axiosConfig) => {
        return {
            ...axiosConfig,
            params: {
                ...defaultParams,
                'filter[field_referenced_topic.id]': axiosConfig.params?.topicId || '',
            },
        };
    },
});
