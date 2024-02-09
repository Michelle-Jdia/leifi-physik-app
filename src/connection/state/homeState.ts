import type { Branch } from '@/data/type/app/branch';
import type { Collection } from '@/data/type/app/collection';
import type { Favorite } from '@/data/type/app/favorite';
import type { History } from '@/data/type/app/history';
import type { ComputedRef } from 'vue';
import { defineStore } from 'pinia';
import { computed } from 'vue';
import { sortByWeight } from '@/connection/helper/dataMap';
import { useBranches } from '@/store/branchStore';
import {
    createNewCollection,
    navigateToCollectionById,
    useMyCollections,
} from '@/store/collectionStore';
import { useFavorites } from '@/store/favoriteStore';
import { useHistory } from '@/store/historyStore';

const maxItemsToShow = 5;

function limitArray(max: number) {
    return <T>(_item: T, index: number) => {
        return index < max;
    };
}

const limitArrayToFive = limitArray(maxItemsToShow);

export const useHomeState = defineStore('home', () => {
    const { data: favorites, getData: getFavorites } = useFavorites();
    const { data: history, getData: getHistory } = useHistory();
    const { data: branches, getData: getBranches } = useBranches();
    const { data: collections, getData: getCollections } = useMyCollections();

    const limitedFavorites: ComputedRef<Favorite[] | void> = computed(() => {
        if (!favorites.value) {
            return;
        }

        return favorites.value.filter(limitArrayToFive);
    });

    const limitedHistory: ComputedRef<History[] | void> = computed(() => {
        if (!history.value) {
            return;
        }

        return history.value.filter(limitArrayToFive);
    });

    const limitedCollections: ComputedRef<Collection[] | void> = computed(() => {
        if (!collections.value) {
            return;
        }

        return collections.value.filter(limitArray(3));
    });

    const sortedBranches: ComputedRef<Branch[] | void> = computed(() => {
        if (!branches.value) {
            return;
        }

        return sortByWeight(branches.value);
    });

    async function createAndNavigateToNewCollection({ value }: { value: string }): Promise<void> {
        if (!value) {
            return;
        }

        const newCollection = await createNewCollection({
            title: value,
        });

        return navigateToCollectionById(newCollection.id);
    }

    return {
        favorites: limitedFavorites,
        history: limitedHistory,
        branches: sortedBranches,
        collections: limitedCollections,
        getFavorites,
        getHistory,
        getBranches,
        getCollections,
        createAndNavigateToNewCollection,
    };
});
