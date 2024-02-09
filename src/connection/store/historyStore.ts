import { $historyStorage, $writeHistoryStorage } from '@/data/storage/historyStorage';
import { ContentType } from '@/data/type/helper/contentType';
import { createReactiveData } from '@/connection/helper/fetcher';

export const useHistory = createReactiveData($historyStorage.read);

export function getHistory() {
    return $historyStorage.read();
}

export function addTaskToHistory(id: string) {
    return $writeHistoryStorage({
        id,
        type: ContentType.TASK,
        timestamp: new Date().getTime(),
    });
}

export function addIssueToHistory(id: string) {
    return $writeHistoryStorage({
        id,
        type: ContentType.ISSUE,
        timestamp: new Date().getTime(),
    });
}

export function addDownloadToHistory(id: string) {
    return $writeHistoryStorage({
        id,
        type: ContentType.DOWNLOAD,
        timestamp: new Date().getTime(),
    });
}
