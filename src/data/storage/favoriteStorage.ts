import { createStorageHandler, createStorage } from '@/data/helper/storage';

export type FavoriteStorage = string[];

export type FavoriteTypeKey = 'issue' | 'task';

export interface ReadFavoriteInput {
    params: {
        id?: string;
        type: FavoriteTypeKey;
    };
}

const initialState = {
    issue: [],
    task: [],
};

const favoriteStorage = createStorage<{ [key in FavoriteTypeKey]: FavoriteStorage }>('favorite');

export const $useFavoritesStorage = createStorageHandler<ReadFavoriteInput, FavoriteStorage>({
    async read(input) {
        const favoriteType = input?.params.type;

        if (!favoriteType) {
            return;
        }

        const favorites = (await favoriteStorage.read()) || initialState;

        return favorites[favoriteType];
    },

    async write(data, input) {
        // remove multiple items from storage (used in "Edit" mode of FavoriteIndex)
        const favoriteType = input?.params.type;

        if (!favoriteType) {
            return;
        }

        const favorites = (await favoriteStorage.read()) || initialState;

        favorites[favoriteType] = [...favorites[favoriteType], ...data];

        return favoriteStorage.write(favorites);
    },
});

export const $useFavoriteStorage = createStorageHandler<ReadFavoriteInput, string>({
    async read(input) {
        // this is basically "isFavorite", so we really only need a true/false return, or return value here and turn into bool in the store
        const favoriteId = input?.params.id;
        const favoriteType = input?.params.type;

        if (!favoriteId || !favoriteType) {
            return;
        }

        const favorites = (await favoriteStorage.read()) || initialState;

        if (!favorites[favoriteType].includes(favoriteId)) {
            return;
        }

        return favoriteId;
    },

    async write(favoriteId, input) {
        const favoriteType = input?.params.type;

        if (!input || !favoriteId || !favoriteType) {
            return;
        }

        const favorites = (await favoriteStorage.read()) || initialState;
        const isFavoriteByIdFound = favorites[favoriteType].includes(favoriteId);

        if (!isFavoriteByIdFound) {
            // case 1: item not a favorite, we add to favorites
            favorites[favoriteType].push(favoriteId);

            return favoriteStorage.write(favorites);
        }

        // case 2: this would be the Off part of the On/Off switch. It's already a favorite item, so we remove it from storage
        favorites[favoriteType] = favorites[favoriteType].filter((id) => id !== favoriteId);

        return favoriteStorage.write(favorites);
    },
});
