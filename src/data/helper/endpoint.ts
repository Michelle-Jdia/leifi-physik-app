import type { LinkManagerKeys } from '@/data/helper/linkManager';
import type { HttpOptions, HttpResponse, HttpResponseType } from '@capacitor/core';
import type { Method } from 'axios';
import { CapacitorHttp } from '@capacitor/core';
import { isDev } from '@/env/app';
import { devLog } from '@/application/helper/log';
import { linkManager } from '@/data/helper/linkManager';
import { defaultHeaders } from '@/data/helper/networkAdapter';

// import { adapter } from '@/data/helper/networkAdapter';

interface GenericHttpResponse<O> extends HttpResponse {
    data: O;
}

export type EndpointParams = Record<string, string | string[]>;

export type EndpointPayload = Record<string, any>;

export type EndpointHeaders = Record<string, string>;

export type EndpointInput = {
    params?: EndpointParams;
    data?: EndpointPayload;
    headers?: EndpointHeaders;
};

export interface EndpointConfig extends EndpointInput {
    link: LinkManagerKeys;
    method?: Method;
    configureEndpoint?: (httpConfig: HttpOptions) => HttpOptions;
    responseType?: HttpResponseType;
}

type EndpointPossibleOutput<O> = Promise<GenericHttpResponse<Partial<O> | O>>;

const startStyle = 'color: hsl(199, 96%, 74%)';
const endStyle = 'color: hsl(156, 72%, 67%)';

function handleError(error: unknown | Error): void {
    if (!isDev) {
        return;
    }

    // if (axios.isAxiosError(error)) {
    //     if (error.response) {
    //         devLog('data', error.response.data);
    //         devLog('status', error.response.status);
    //         devLog('header', error.response.headers);
    //
    //         return;
    //     }
    //
    //     if (error.request) {
    //         devLog('request', error.request);
    //
    //         return;
    //     }
    //
    //     devLog('error', error.message);
    // }

    devLog('error', error);
}

export function createEndpoint<O>(config: EndpointConfig): () => EndpointPossibleOutput<O>;

export function createEndpoint<I extends EndpointInput, O>(
    config: EndpointConfig,
): (input: I) => EndpointPossibleOutput<O>;

export function createEndpoint<I extends EndpointInput, O>(config: EndpointConfig) {
    return async (input?: I): EndpointPossibleOutput<O> => {
        const params = {
            ...config.params,
            ...input?.params,
        };

        // const data = {
        //     ...config.data,
        //     ...input?.data,
        // };

        const headers = {
            ...defaultHeaders,
            ...config.headers,
            ...input?.headers,
        };

        const method = config.method || 'GET';
        const url = linkManager.getLink(config.link);
        const responseType = config.responseType || 'json';

        const defaultHttpConfig: HttpOptions = {
            url,
            method,
            params,
            // data, // Can't use data with GET method
            headers,
            responseType,
        };

        const createHttpConfig = (defaultHttpConfig: HttpOptions) => {
            if (!config.configureEndpoint) {
                return defaultHttpConfig;
            }

            return config.configureEndpoint(defaultHttpConfig);
        };

        const httpConfig = createHttpConfig(defaultHttpConfig);

        try {
            devLog(`%c start`, startStyle, httpConfig);

            const startStamp = performance.now();
            const response: GenericHttpResponse<O> = await CapacitorHttp.request(httpConfig);
            const endStamp = performance.now();
            const execTime = Math.round(endStamp - startStamp);

            devLog(`%c finish [${execTime}ms]`, endStyle, response);

            return response;
        } catch (error: unknown | Error) {
            handleError(error);

            throw error;
        }
    };
}
