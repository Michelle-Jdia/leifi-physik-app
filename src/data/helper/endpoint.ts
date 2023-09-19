import type { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import type { LinkManagerKeys } from '@/data/helper/linkManager';
import axios from 'axios';
import { isDev } from '@/env/app';
import { devLog } from '@/application/helper/log';
import { adapter } from '@/data/helper/networkAdapter';
import { linkManager } from '@/data/helper/linkManager';

export type EndpointParams = Record<string, string | number | boolean | undefined | string[]>;

export type EndpointPayload = Record<string, any>;

export type EndpointHeaders = Record<string, string | number | boolean>;

export type EndpointInput = {
    params?: EndpointParams;
    data?: EndpointPayload;
    headers?: EndpointHeaders;
};

export interface EndpointConfig extends EndpointInput {
    link: LinkManagerKeys;
    method?: Method;
    configureAxios?: (axiosConfig: AxiosRequestConfig) => AxiosRequestConfig;
}

const startStyle = 'color: hsl(199, 96%, 74%)';
const endStyle = 'color: hsl(156, 72%, 67%)';

function handleError(error: unknown | Error): void {
    if (!isDev) {
        return;
    }

    if (axios.isAxiosError(error)) {
        if (error.response) {
            devLog('data', error.response.data);
            devLog('status', error.response.status);
            devLog('header', error.response.headers);

            return;
        }

        if (error.request) {
            devLog('request', error.request);

            return;
        }

        devLog('error', error.message);
    }

    devLog('error', error);
}

export const createEndpoint =
    <I extends EndpointInput = never, O = any>(config: EndpointConfig) =>
    async (input?: I): Promise<AxiosResponse<O> | never> => {
        const params = {
            ...config.params,
            ...input?.params,
        };

        const data = {
            ...config.data,
            ...input?.data,
        };

        const headers = {
            ...config.headers,
            ...input?.headers,
        };

        const method = config.method || 'GET';
        const url = linkManager.getLink(config.link);

        const defaultAxiosConfig: AxiosRequestConfig = {
            url,
            method,
            data,
            params,
            headers,
        };

        const createAxiosConfig = (defaultAxiosConfig: AxiosRequestConfig) => {
            if (!config.configureAxios) {
                return defaultAxiosConfig;
            }

            return config.configureAxios(defaultAxiosConfig);
        };

        const axiosConfig = createAxiosConfig(defaultAxiosConfig);

        try {
            devLog(`%c start`, startStyle, axiosConfig);

            const startStamp = performance.now();
            const response = await adapter.request<O>(axiosConfig);
            const endStamp = performance.now();
            const execTime = Math.round(endStamp - startStamp);

            devLog(`%c finish [${execTime}ms]`, endStyle, response);

            return response;
        } catch (error: unknown | Error) {
            handleError(error);

            throw error;
        }
    };
