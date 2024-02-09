<script setup lang="ts">
import type { Collection } from '@/data/type/app/collection';
import type { Download } from '@/data/type/app/download';
import type { Issue } from '@/data/type/app/issue';
import type { Task } from '@/data/type/app/task';
import type { IonModal } from '@ionic/vue';
import type { Ref } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { bookmarkOutline } from 'ionicons/icons';
import { ref, watch } from 'vue';
import { $t } from '@/application/translation';
import { closeModal, openModal } from '@/connection/helper/modal';
import { useArticleState } from '@/state/articleState';
import { useFavoriteState } from '@/state/favoriteState';
import { getBorder } from '@/presentation/helper/style';
import VFavoriteHeader from '@/layout/header/VFavoriteHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VArticleItemList from '@/container/list/VArticleItemList/VArticleItemList.vue';
import VFavoriteWrapper from '@/container/wrapper/VFavoriteWrapper/VFavoriteWrapper.vue';
import VInputButton from '@/molecule/form/VInputButton/VInputButton.vue';
import VModalFooter from '@/molecule/modal/VModalFooter/VModalFooter.vue';
import VArticleInfoSlide from '@/molecule/slide/VArticleInfoSlide/VArticleInfoSlide.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VCheckbox from '@/atom/checkbox/VCheckbox/VCheckbox.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VModal from '@/atom/modal/VModal/VModal.vue';

type IonModalInstance = InstanceType<typeof IonModal>;
const editModeModal: Ref<IonModalInstance | undefined> = ref();
const addToCollectionsModal: Ref<IonModalInstance | null> = ref(null);
const createCollectionModal: Ref<IonModalInstance | null> = ref(null);
const tempCollectionsToUpdate: Collection[] = [];
const favoriteState = useFavoriteState();
const articleState = useArticleState();

function toggleArticleInTempList(event: CustomEvent, item: Collection): void {
    if (event.detail.checked === true) {
        tempCollectionsToUpdate.push(item);
    }

    if (event.detail.checked === false) {
        const filtered = tempCollectionsToUpdate.filter(
            (collection) => !(collection.id === item.id && collection.type === item.type),
        );

        tempCollectionsToUpdate.length = 0;
        tempCollectionsToUpdate.push(...filtered);
    }
}

// @TODO can we even make any of this addcollection html/logic reusable?
async function handleAddToCollectionModal(): Promise<void> {
    const articles: Ref<(Issue | Task | Download)[]> = ref([]);

    for (const favorite of favoriteState.checkedFavorites) {
        const item = await articleState.loadArticleByType(favorite.type, favorite.id);

        if (!item) {
            continue;
        }

        articles.value.push(item);
    }

    await articleState.saveArticlesToCollections(articles.value, tempCollectionsToUpdate);

    closeModal(addToCollectionsModal.value);
}

async function handleCreateCollectionSubmit({ value }: { value: string }): Promise<void> {
    const articles: Ref<(Issue | Task | Download)[]> = ref([]);

    for (const favorite of favoriteState.checkedFavorites) {
        const item = await articleState.loadArticleByType(favorite.type, favorite.id);

        if (!item) {
            continue;
        }

        articles.value.push(item);
    }

    await articleState.createAndAddArticleToNewCollection(articles.value, value);
    closeModal(createCollectionModal.value);
}

const unwatch = watch(editModeModal, (value) => {
    if (!value) {
        return;
    }

    favoriteState.setModal(editModeModal.value);

    unwatch();
});

onIonViewWillEnter(() => {
    favoriteState.getFavorites();
    articleState.getCollections();
});
</script>

<template>
    <v-page modifier="v-px-0 md:v-px-0">
        <template #header>
            <v-favorite-header
                :with-edit-mode="favoriteState.hasFavorites"
                @on-open-edit-modal="openModal(editModeModal)"
            >
                {{ $t.favorite.title }}
            </v-favorite-header>
        </template>

        <v-loader :logs="['useIssue', 'useTopic', 'useBranch']" />

        <div v-if="favoriteState.hasFavorites">
            <div v-for="(favorite, index) in favoriteState.favorites" :key="favorite.id">
                <v-favorite-wrapper :id="favorite.id" :type="favorite.type">
                    <template
                        #default="{ title, subtitle, branch, handleFavorite, isFavorite, link }"
                    >
                        <router-link
                            :to="link"
                            :class="`v-block ${getBorder(index)} v-border-gray-50`"
                        >
                            <v-article-info-slide
                                :id="favorite.id"
                                :type="favorite.type"
                                :title="title"
                                :subtitle="subtitle"
                                :branch="branch"
                                :is-favorite="isFavorite"
                                @on-favorite="handleFavorite"
                            />
                        </router-link>
                    </template>
                </v-favorite-wrapper>
            </div>
        </div>

        <div v-else class="v-p v-px-box-xl md:v-px-section">
            <h3>Wusstest du schon? Hier kannst du Inhalte zu einer Favoriten-Liste hinzufügen.</h3>

            <div class="v-mt-box">
                Klicke dazu einfach auf das
                <v-icon :icon="bookmarkOutline" with-space-left with-space-right /> Symbol dort wo
                du es in der App siehst.
            </div>
        </div>

        <v-modal
            v-if="favoriteState.hasFavorites"
            ref="editModeModal"
            with-save
            @on-confirm="favoriteState.updateFavorites"
        >
            <template #title>Favoriten bearbeiten</template>

            <v-article-item-list
                v-if="favoriteState.favorites"
                :key="favoriteState.favoriteKey"
                :items="favoriteState.favorites"
                @on-reorder="favoriteState.updateFavoritesOrder"
                @on-check="favoriteState.updateCheckedFavorites"
                @on-delete="favoriteState.removeFavoriteItem"
            />

            <template #footer>
                <v-modal-footer v-if="favoriteState.checkedFavorites.length">
                    <v-button
                        modifier="v-w-full"
                        color="tertiary"
                        size="small"
                        @click="favoriteState.openConfirmationSheet"
                    >
                        Entfernen
                    </v-button>

                    <v-button
                        modifier="v-w-full v-ml-box-md"
                        size="small"
                        color="tertiary"
                        @click="openModal(addToCollectionsModal)"
                    >
                        In Sammlung
                    </v-button>
                </v-modal-footer>
            </template>
        </v-modal>

        <v-modal ref="addToCollectionsModal" with-save @on-confirm="handleAddToCollectionModal">
            <template #title>{{ $t.collection.addCollection }}</template>

            <v-button modifier="v-mb-box-md v-w-full" @click="openModal(createCollectionModal)">
                <v-icon src="icon/add-collection.svg" with-space-right />

                {{ $t.collection.createCollection }}
            </v-button>

            <template v-if="articleState.collections && articleState.collections.length">
                <div v-for="collection in articleState.collections" :key="collection.id">
                    <div
                        :class="'v-flex v-items-center v-rounded v-border v-border-gray-20 v-bg-white v-p-box v-mb-box-md'"
                    >
                        <v-checkbox
                            modifier="v-mr-auto v-w-full v-h3 v-font-bold"
                            @ion-change="(event) => toggleArticleInTempList(event, collection)"
                        >
                            {{ collection.private_title }}
                        </v-checkbox>
                    </div>
                </div>
            </template>
        </v-modal>

        <v-modal ref="createCollectionModal">
            <template #title>{{ $t.collection.addCollection }}</template>

            <v-input-button
                icon="icon/add-collection.svg"
                :button-text="$t.collection.create"
                :placeholder="$t.collection.collectionName"
                @on-submit="handleCreateCollectionSubmit"
            />
        </v-modal>
    </v-page>
</template>
