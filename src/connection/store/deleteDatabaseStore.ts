import { $useDeleteStorage } from '@/data/storage/deleteDatabaseStorage';

export async function useDeleteDatabase(): Promise<void> {
    return $useDeleteStorage();
}
