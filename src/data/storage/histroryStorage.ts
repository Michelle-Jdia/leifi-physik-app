import { createStorage, createStorageHandler } from '@/data/helper/storage';

type HistoryTypeKey = 'issue' | 'task' | 'topic';

export interface History {
    id: string;
    type: HistoryTypeKey;
}

const MAX_HISTORY = 20;
const historyStorage = createStorage<History[]>('history');

export const $useHistoriesStorage = createStorageHandler<never, History[]>({
    async read() {
        const history = (await historyStorage.read()) || [];

        if (!history.length) {
            return;
        }

        return history;
    },

    async write() {
        return;
    },
});

export const $useHistoryStorage = createStorageHandler<never, History>({
    async read() {
        return;
    },

    async write(data) {
        const history = (await historyStorage.read()) || [];
        const lastHistory = history[0];

        if (lastHistory && data.id === lastHistory.id) {
            return;
        }

        const dataIndexInHistory = history.findIndex((item) => data.id === item.id);

        if (dataIndexInHistory !== -1) {
            history.splice(dataIndexInHistory, 1);
        }

        history.unshift(data);
        history.splice(MAX_HISTORY);
        historyStorage.write(history);
    },
});
