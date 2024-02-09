import type {
    Reorder,
    Emits as VArticleItemListEmits,
} from '@/container/list/VArticleItemList/VArticleItemList.vue';
import type { Favorite } from '@/data/type/app/favorite';
import type { IonModal } from '@ionic/vue';
import type { ComputedRef, Ref } from 'vue';
import { actionSheetController } from '@ionic/vue';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { isFavoriteType } from '@/data/type/app/favorite';
import { removeFavorite, setFavorites, useFavorites } from '@/store/favoriteStore';

export const useFavoriteState = defineStore('favorite', () => {
    const { data: favorites, getData: getFavorites } = useFavorites();
    const checkedFavorites: Ref<VArticleItemListEmits['onCheck']['items']> = ref([]);
    const reorderedFavorites: Favorite[] = [];
    const modal: Ref<InstanceType<typeof IonModal> | void> = ref();
    const favoriteKey = ref();

    function setModal(inputModal: InstanceType<typeof IonModal> | void): void {
        modal.value = inputModal;
    }

    async function closeModal(): Promise<void> {
        return modal?.value?.$el.dismiss();
    }

    function updateCheckedFavorites({ items }: VArticleItemListEmits['onCheck']): void {
        checkedFavorites.value = items;
    }

    async function updateFavoritesOrder({ items }: Reorder): Promise<void> {
        reorderedFavorites.length = 0;

        items.forEach((item) => {
            if (isFavoriteType(item.type)) {
                reorderedFavorites.push({
                    id: item.id,
                    type: item.type,
                });
            }
        });
    }

    async function removeFavoriteItem(favorite: Favorite): Promise<void> {
        if (favorites.value?.length === 1) {
            await closeModal();
        }

        await removeFavorite(favorite);

        await getFavorites();

        favoriteKey.value = Math.random();
    }

    async function updateFavorites(): Promise<void> {
        if (!reorderedFavorites.length) {
            return;
        }

        await setFavorites(reorderedFavorites);

        getFavorites();
    }

    async function removeCheckedFavorites(): Promise<void> {
        if (!checkedFavorites.value.length || !favorites.value || !modal.value) {
            return;
        }

        const updatedFavorites = favorites.value.filter((favorite) => {
            return !checkedFavorites.value.find(
                (fav) => favorite.id === fav.id && favorite.type === fav.type,
            );
        });

        // DON'T CHANGE ORDER
        await closeModal();
        await setFavorites(updatedFavorites);
        await getFavorites();
    }

    function addCollection() {
        return;
    }

    async function openConfirmationSheet(): Promise<void> {
        const actionSheet = await actionSheetController.create({
            header: `${checkedFavorites.value.length} ausgewählte Artikel aus Favoriten entfernen?`,
            buttons: [
                {
                    text: 'Ja, ausgewählte Artikel aus Favoriten entfernen',
                    role: 'destructive',
                    data: {
                        action: 'delete',
                    },
                    handler: removeCheckedFavorites,
                },
                {
                    text: 'Abbrechen',
                    role: 'cancel',
                    data: {
                        action: 'cancel',
                    },
                },
            ],
        });

        return actionSheet.present();
    }

    const hasFavorites: ComputedRef<boolean> = computed(() => {
        return Boolean(favorites.value && favorites.value.length);
    });

    return {
        favorites,
        favoriteKey,
        hasFavorites,
        checkedFavorites,
        setModal,
        getFavorites,
        updateCheckedFavorites,
        openConfirmationSheet,
        addCollection,
        updateFavorites,
        removeFavoriteItem,
        updateFavoritesOrder,
    };
});
