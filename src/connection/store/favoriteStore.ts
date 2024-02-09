import type { ReadFavoriteInput } from '@/data/storage/favoriteStorage';
import type { Favorite } from '@/data/type/app/favorite';
import {
    $deleteFavoriteStorage,
    $favoriteStorage,
    $readFavoriteStorage,
    $writeFavoriteStorage,
} from '@/data/storage/favoriteStorage';
import { createReactiveData } from '@/connection/helper/fetcher';
import { createToast } from '@/connection/helper/toast';

export const useFavorite = createReactiveData<ReadFavoriteInput, Favorite | void>(
    $readFavoriteStorage,
);

export const useFavorites = createReactiveData($favoriteStorage.read);

export async function addFavorite(favorite: Favorite): Promise<void> {
    await $writeFavoriteStorage(favorite);

    createToast('Der Artikel wurde zu Deinen Favoriten hinzugefügt', {
        color: 'success',
    });
}

export async function removeFavorite(favorite: Favorite): Promise<void> {
    await $deleteFavoriteStorage(favorite);

    createToast('Der Artikel wurde von Deinen Favoriten entfernt', {
        color: 'success',
    });
}

export async function toggleFavorite(favorite: Favorite): Promise<void> {
    const favoriteInStorage = await $readFavoriteStorage(favorite);

    if (!favoriteInStorage) {
        return addFavorite(favorite);
    }

    return removeFavorite(favorite);
}

export function setFavorites(favorites: Favorite[]): Promise<void> {
    return $favoriteStorage.write(favorites);
}
