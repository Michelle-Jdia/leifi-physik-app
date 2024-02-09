<script setup lang="ts">
import type { Collection } from '@/data/type/app/collection';
import type { IonModal, RefresherCustomEvent } from '@ionic/vue';
import type { ComputedRef, Ref } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { computed, ref } from 'vue';
import { $t } from '@/application/lang/de';
import { createRefresherHandler } from '@/connection/helper/refresher';
import { RouteName } from '@/connection/router/routeName';
import {
    createNewCollection,
    getLearnedStatus,
    navigateToCollectionById,
    useLocalCollections,
} from '@/store/collectionStore';
import VCollectionIndexHeader from '@/layout/header/VCollectionIndexHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VCollectionSearchForm from '@/container/form/VCollectionSearchForm/VCollectionSearchForm.vue';
import VGlobalSearchInput from '@/container/form/VGlobalSearchInput/VGlobalSearchInput.vue';
import VInputButton from '@/molecule/form/VInputButton/VInputButton.vue';
import VCollectionItem from '@/molecule/item/VCollectionItem/VCollectionItem.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VModal from '@/atom/modal/VModal/VModal.vue';
import VPill from '@/atom/pill/VPill/VPill.vue';
import VRefresher from '@/atom/refresher/VRefresher/VRefresher.vue';

const modal: Ref<InstanceType<typeof IonModal> | null> = ref(null);
const { data: collections, getData } = useLocalCollections();
const activeFilter: Ref<'all' | 'mine' | 'subscribed'> = ref('all');

function openAddModel(): void {
    modal.value?.$el.present();
}

function closeAddModel(): void {
    modal.value?.$el.dismiss();
}

const filteredByMyCollections: ComputedRef<undefined | Collection[]> = computed(() => {
    if (!collections.value) {
        return;
    }

    return collections.value.filter((item) => item.isMyCollection);
});

const filteredBySubscribed: ComputedRef<undefined | Collection[]> = computed(() => {
    if (!collections.value) {
        return;
    }

    return collections.value.filter((item) => item.isSubscribed);
});

const filteredByNone: ComputedRef<undefined | Collection[]> = computed(() => {
    // @TODO: just quick hack. we shouldn't even save collections to DB unless user subscribes or copies as own collection
    if (!collections.value) {
        return;
    }

    return collections.value.filter((item) => item.isSubscribed || item.isMyCollection);
    //     displayedCollections.value = collections.value;
});

const displayedCollections: ComputedRef<Collection[] | undefined> = computed(() => {
    if (activeFilter.value === 'mine') {
        return filteredByMyCollections.value;
    }

    if (activeFilter.value === 'subscribed') {
        return filteredBySubscribed.value;
    }

    return filteredByNone.value;
});

function updateFilter(filter: 'all' | 'mine' | 'subscribed') {
    activeFilter.value = filter;
}

async function createAndNavigateToNewCollection({ value }: { value: string }): Promise<void> {
    if (!modal.value || !value) {
        return;
    }

    const newCollection = await createNewCollection({
        title: value,
    });

    await navigateToCollectionById(newCollection.id);

    closeAddModel();
}

function isActive(text: string | null) {
    return activeFilter.value === text;
}

async function handleRefresh(event: RefresherCustomEvent): Promise<void> {
    await createRefresherHandler({
        event: event,
        callback: async () => {
            await getData();
        },
    });
}

onIonViewWillEnter(getData);
</script>

<template>
    <v-page>
        <v-loader :logs="['useCollection', 'useCollectionByTitle']" />

        <template #refresher>
            <v-refresher @ion-refresh="handleRefresh" />
        </template>

        <template #header>
            <v-collection-index-header @on-open-add-modal="openAddModel">
                {{ $t.collection.title }}
            </v-collection-index-header>
        </template>

        <v-global-search-input modifier="v-mb-box-xl md:v-hidden" />

        <div class="v-mt-box md:v-mt-box-md">
            <v-pill :variant="isActive('all') ? 'purple' : 'pink'" @click="updateFilter('all')">
                {{ $t.collection.indexButtonAll }}
            </v-pill>

            <v-pill
                modifier="v-ml-box-xs"
                :variant="isActive('mine') ? 'purple' : 'pink'"
                @click="updateFilter('mine')"
            >
                {{ $t.collection.indexButtonMine }}
            </v-pill>

            <v-pill
                modifier="v-ml-box-xs"
                :variant="isActive('subscribed') ? 'purple' : 'pink'"
                @click="updateFilter('subscribed')"
            >
                {{ $t.collection.indexButtonSubscribed }}
            </v-pill>
        </div>

        <div v-if="displayedCollections && displayedCollections.length">
            <div
                v-for="collection in displayedCollections"
                :key="collection.id"
                class="v-mt-box-xl"
            >
                <router-link
                    :to="{
                        name: RouteName.COLLECTION_ID,
                        params: { id: collection.id },
                    }"
                >
                    <v-collection-item
                        :is-subscribed="collection.isSubscribed"
                        :is-learn-mode="collection.isLearnMode"
                        :learn-status="getLearnedStatus(collection)"
                        :subtitle="collection.title"
                        :private-title="collection.private_title"
                    />
                </router-link>
            </div>
        </div>

        <p v-if="!displayedCollections || !displayedCollections.length" class="v-p v-mt-box">
            {{ $t.collection.noCollectionsParagraph }}
        </p>

        <v-modal ref="modal" trigger="collection-add-modal">
            <template #title>{{ $t.collection.addCollection }}</template>

            <h3 class="v-h3 v-mt-box-md">{{ $t.collection.createCollection }}</h3>

            <v-input-button
                icon="icon/add-collection.svg"
                :button-text="$t.collection.create"
                :placeholder="$t.collection.collectionName"
                @on-submit="createAndNavigateToNewCollection"
            />

            <v-loader :logs="['useCollectionByTitle']" />

            <h3 class="v-h3 v-mt-box-md">{{ $t.collection.subscribe }}</h3>

            <v-collection-search-form @on-submit="closeAddModel" />
        </v-modal>
    </v-page>
</template>
