import type { EndpointInput } from '@/data/helper/endpoint';
import type { StorageHandler } from '@/data/helper/storage';
import type { ShallowRef } from 'vue';
import { alert } from 'ionicons/icons';
import { shallowRef } from 'vue';
import { devLog } from '@/application/helper/log';
import { $t } from '@/application/translation';
import { createToast } from '@/connection/helper/toast';
import { useLogState } from '@/state/logState';

type Log<I> = string | ((input: I) => string);

type LogActionType = 'add' | 'remove';

interface FetcherOutput<I, O> {
    data: ShallowRef<O | void>;
    getData(): Promise<O | void>;
    getData(input: I): Promise<O | void>;
}

interface FetcherConfig<I> {
    log?: Log<I>;
    useCache?: boolean;
    // getLastFetchTime?(input: I): Promise<number>;
}

function isValidResponse<O>(response: O | void): response is O {
    return (
        !!response &&
        ((Array.isArray(response) && Boolean(response.length)) ||
            (typeof response === 'object' && Boolean(Object.keys(response).length)))
    );
}

function handleLog<I>(log: Log<I>, input: I | undefined, action: LogActionType): void {
    const logStore = useLogState();

    if (typeof log === 'string') {
        logStore[action]([log]);
    } else if (typeof log === 'function' && input) {
        logStore[action]([log(input)]);
    }
}

export function createFetcher<I extends never, O>(
    callback: () => Promise<O | void>,
    storageHandler: StorageHandler<I, O>,
    config?: FetcherConfig<I>,
): () => FetcherOutput<I, O>;

export function createFetcher<I extends EndpointInput, O>(
    callback: (input: I) => Promise<O | void>,
    storageHandler: StorageHandler<I, O>,
    config?: FetcherConfig<I>,
): (input: I) => FetcherOutput<I, O>;

export function createFetcher<I extends EndpointInput, O>(
    callback: (input?: I) => Promise<O | void>,
    storageHandler: StorageHandler<I, O>,
    config?: FetcherConfig<I>,
): (input?: I) => FetcherOutput<I, O> {
    const { log = '', useCache = false } = config || {};

    return (input?: I) => {
        const data: ShallowRef<O | void> = shallowRef();

        return {
            data,
            async getData(optionalInput?: I) {
                const inputToUse = optionalInput || input;

                try {
                    // const timestamp =
                    //     // @ts-ignore // this is a safe ignore
                    //     config?.getLastFetchTime && (await config.getLastFetchTime(inputToUse));
                    //
                    // if (!timestamp && config?.getLastFetchTime) {
                    //     handleLog(log, inputToUse, 'add');
                    //
                    //     const response = await callback(inputToUse);
                    //
                    //     if (!isValidResponse(response)) {
                    //         return;
                    //     }
                    //
                    //     storageHandler.write(response, inputToUse);
                    //
                    //     data.value = response;
                    //
                    //     return data.value;
                    // }

                    const storageData = await storageHandler.read(inputToUse);

                    if (storageData) {
                        data.value = storageData;

                        if (useCache) {
                            return data.value;
                        }

                        callback(inputToUse).then((response) => {
                            if (!isValidResponse(response)) {
                                return;
                            }

                            storageHandler.write(response, inputToUse);

                            data.value = response;
                        });

                        return data.value;
                    }

                    handleLog(log, inputToUse, 'add');

                    const response = await callback(inputToUse);

                    if (!isValidResponse(response)) {
                        return;
                    }

                    storageHandler.write(response, inputToUse);

                    data.value = response;

                    return data.value;
                } catch (err) {
                    createToast($t.error.connection, {
                        color: 'danger',
                        icon: alert,
                    });

                    devLog(err);
                } finally {
                    handleLog(log, inputToUse, 'remove');
                }
            },
        };
    };
}

export function createReactiveData<O>(
    callback: () => Promise<O | void>,
): () => FetcherOutput<never, O>;

export function createReactiveData<I, O>(
    callback: (input: I) => Promise<O | void>,
): (input: I) => FetcherOutput<I, O>;

export function createReactiveData<I, O>(
    callback: (input?: I) => Promise<O | void>,
): (input?: I) => FetcherOutput<I, O> {
    return (input?: I) => {
        const data: ShallowRef<O | void> = shallowRef();

        return {
            data,
            async getData() {
                try {
                    const response = await callback(input);

                    data.value = response;

                    return data.value;
                } catch (err) {
                    createToast($t.error.connection, {
                        color: 'danger',
                        icon: alert,
                    });
                }
            },
        };
    };
}
