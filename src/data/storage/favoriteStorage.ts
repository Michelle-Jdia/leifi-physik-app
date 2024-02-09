import type { Favorite } from '@/data/type/app/favorite';
import { createStorage } from '@/data/helper/storage';

// @TODO use also type here? uuids have a pretty crazy uniqueness, but still better to identify what we are working with.. no?
export interface ReadFavoriteInput {
    id: string;
}

export const $favoriteStorage = createStorage<Favorite[]>('favorite');

export async function $readFavoriteStorage(input: ReadFavoriteInput): Promise<Favorite | void> {
    const favoriteId = input.id;
    const favorites = (await $favoriteStorage.read()) || [];
    const favorite = favorites.find((favorite) => favorite.id === favoriteId);

    return favorite;
}

export async function $writeFavoriteStorage(data: Favorite): Promise<void> {
    const favorites = (await $favoriteStorage.read()) || [];
    const isAlreadyFavoriteIndex = favorites.findIndex((favorite) => favorite.id === data.id);

    if (isAlreadyFavoriteIndex !== -1) {
        return;
    }

    favorites.unshift(data);

    return $favoriteStorage.write(favorites);
}

export async function $deleteFavoriteStorage(data: Favorite): Promise<void> {
    const favorites = (await $favoriteStorage.read()) || [];
    const isAlreadyFavoriteIndex = favorites.findIndex((favorite) => favorite.id === data.id);

    if (isAlreadyFavoriteIndex === -1) {
        return;
    }

    favorites.splice(isAlreadyFavoriteIndex, 1);

    return $favoriteStorage.write(favorites);
}
