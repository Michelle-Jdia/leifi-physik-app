import { $useHistoryStorage, $useHistoriesStorage } from '@/src/data/storage/histroryStorage';

export function getHistory() {
    return $useHistoriesStorage.read();
}

export function setTaskHistory(id: string) {
    return $useHistoryStorage.write({
        id,
        type: 'task',
    });
}

export function setTopicHistory(id: string) {
    return $useHistoryStorage.write({
        id,
        type: 'topic',
    });
}

export function setIssueHistory(id: string) {
    return $useHistoryStorage.write({
        id,
        type: 'issue',
    });
}
