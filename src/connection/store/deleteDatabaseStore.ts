import { $deleteAllStorage } from '@/data/helper/storage';

export async function deleteAllStorage(): Promise<void> {
    return $deleteAllStorage();
}

export async function getDatabaseUsage(): Promise<string> {
    return navigator.storage.estimate().then((res) => {
        return ((res.usage || 1) / 1024 / 1024).toFixed(2);
    });
}
