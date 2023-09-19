import type { ReadFavoriteInput, FavoriteStorage } from '@/data/storage/favoriteStorage';
import { $useFavoritesStorage, $useFavoriteStorage } from '@/data/storage/favoriteStorage';
import { createReactiveData } from '@/connection/helper/fetcher';

export async function getFavorites(input: ReadFavoriteInput) {
    return $useFavoritesStorage.read(input);
}

export async function getFavoriteIssues() {
    return $useFavoritesStorage.read({
        params: {
            type: 'issue',
        },
    });
}

export async function getFavoriteTasks() {
    return $useFavoritesStorage.read({
        params: {
            type: 'task',
        },
    });
}

export async function getFavorite(input: ReadFavoriteInput) {
    return $useFavoriteStorage.read(input);
}

export const useFavoriteIssues = createReactiveData<never, FavoriteStorage | void>(
    getFavoriteIssues,
);

export async function setFavoriteIssue(id: string) {
    return $useFavoriteStorage.write(id, {
        params: {
            id,
            type: 'issue',
        },
    });
}

export async function setFavorite(input: ReadFavoriteInput) {
    // everything should already be in input, but storage interface awaits 2 args, where first arg should be a data object
    return $useFavoriteStorage.write(input.params.id || '', input);
}

export async function isFavoriteObject(input: ReadFavoriteInput): Promise<boolean> {
    const res = await $useFavoriteStorage.read(input);

    return Boolean(res);
}
