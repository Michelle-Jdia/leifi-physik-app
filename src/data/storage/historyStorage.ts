import type { History } from '@/data/type/app/history';
import { createStorage } from '@/data/helper/storage';

const MAX_HISTORY = 20;

export const $historyStorage = createStorage<History[]>('history');

export async function $writeHistoryStorage(data: History) {
    const history = (await $historyStorage.read()) || [];
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
    $historyStorage.write(history);
}
