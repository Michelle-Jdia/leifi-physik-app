import type { ShallowRef } from 'vue';
import type { Storage } from '@/data/helper/storage';
import { shallowRef } from 'vue';
import { devLog } from '@/application/helper/log';
import { useLogState } from '@/connection/state/logState';

interface Fetcher<O> {
    data: ShallowRef<O | void>;
    getData: () => Promise<O | void>;
}

interface SharedFetcherOptions<O> {
    defaultState?: null | O;
}

interface FetcherOptions<I, O> extends SharedFetcherOptions<O> {
    log?: string | ((input?: I) => string);
    withCache?: boolean;
}

function getDefaultOptions<I, O>(): FetcherOptions<I, O> {
    return {
        log: '',
        withCache: true,
        defaultState: null,
    };
}

export function createFetcher<I, O>(
    callback: (input?: I) => Promise<O>,
    storageHandler: Storage<I, O>,
    options?: FetcherOptions<I, O>,
): (input?: I) => Fetcher<O> {
    const defaultOptions = getDefaultOptions<I, O>();

    const mergedOptions = {
        ...defaultOptions,
        ...options,
    };

    const handleData = async (data: ShallowRef<O>, input?: I): Promise<O | void> => {
        const logStore = useLogState();
        let dataFoundInStorage = false;

        try {
            if (mergedOptions.withCache) {
                const storageData = await storageHandler.read(input);

                if (storageData) {
                    data.value = storageData;
                    dataFoundInStorage = true;

                    // to do only DB or fetch
                    // return data.value;
                }
            }

            if (!dataFoundInStorage) {
                if (typeof mergedOptions.log === 'string') {
                    logStore.add([mergedOptions.log]);
                }

                if (typeof mergedOptions.log === 'function') {
                    logStore.add([mergedOptions.log(input)]);
                }

                const response = await callback(input);

                storageHandler.write(response, input);
                data.value = response;
            }

            if (dataFoundInStorage) {
                callback(input).then((response) => {
                    storageHandler.write(response, input);
                    data.value = response;
                });
            }

            return data.value;
        } catch (error) {
            devLog('createFetcher error', {
                error,
            });
        } finally {
            if (!dataFoundInStorage) {
                if (typeof mergedOptions.log === 'string') {
                    logStore.remove([mergedOptions.log]);
                }

                if (typeof mergedOptions.log === 'function') {
                    logStore.remove([mergedOptions.log(input)]);
                }
            }
        }
    };

    return (input?) => {
        const data: ShallowRef<O> = shallowRef(mergedOptions.defaultState as O);

        return {
            getData: async () => {
                return handleData(data, input);
            },
            data,
        };
    };
}

export function createReactiveData<I, O>(
    callback: (input?: I) => Promise<O>,
    options?: SharedFetcherOptions<O>,
): (input?: I) => Fetcher<O> {
    const defaultOptions = getDefaultOptions<I, O>();

    const mergedOptions = {
        defaultState: defaultOptions.defaultState,
        ...options,
    };

    const handleData = async (data: ShallowRef<O>, input?: I): Promise<O | void> => {
        try {
            const response = await callback(input);

            data.value = response;

            return data.value;
        } catch (error) {
            devLog('createReactiveData error', {
                error,
            });
        }
    };

    return (input?) => {
        const data: ShallowRef<O> = shallowRef(mergedOptions.defaultState as O);

        return {
            getData: async () => {
                return handleData(data, input);
            },
            data,
        };
    };
}
