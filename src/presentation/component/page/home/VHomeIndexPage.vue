<script setup lang="ts">
import type { RefresherCustomEvent } from '@ionic/vue';
import { SplashScreen } from '@capacitor/splash-screen';
import { onIonViewWillEnter } from '@ionic/vue';
import { onMounted, ref, watch } from 'vue';
import { $t } from '@/application/translation';
import { createRefresherHandler } from '@/connection/helper/refresher';
import { RouteName } from '@/connection/router/routeName';
import { useBranchState } from '@/state/branchState';
import { useHomeState } from '@/state/homeState';
import { getLearnedStatus } from '@/store/collectionStore';
import VHomeHeader from '@/layout/header/VHomeHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VCollectionSearchForm from '@/container/form/VCollectionSearchForm/VCollectionSearchForm.vue';
import VGlobalSearchInput from '@/container/form/VGlobalSearchInput/VGlobalSearchInput.vue';
import VArticleBoxSlider from '@/container/slider/VArticleBoxSlider/VArticleBoxSlider.vue';
import VInputButton from '@/molecule/form/VInputButton/VInputButton.vue';
import VCollectionItem from '@/molecule/item/VCollectionItem/VCollectionItem.vue';
import VBranchBox from '@/atom/box/VBranchBox/VBranchBox.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VPlaceholderButton from '@/atom/button/VPlaceholderButton/VPlaceholderButton.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VRefresher from '@/atom/refresher/VRefresher/VRefresher.vue';

const homeState = useHomeState();
const branchState = useBranchState();

async function handleRefresh(event: RefresherCustomEvent): Promise<void> {
    await createRefresherHandler({
        event: event,
        callback: async () => {
            await branchState.getLiveTopicsAndBranches();
            await homeState.getBranches();
            await homeState.getFavorites();
            await homeState.getHistory();
            await homeState.getCollections();
        },
    });
}

onIonViewWillEnter(() => {
    homeState.getBranches();
    homeState.getFavorites();
    homeState.getHistory();
    homeState.getCollections();
});

const isMounted = ref(false);
onMounted(() => (isMounted.value = true));

watch(homeState, () => {
    const isDataLoaded = homeState.branches && homeState.branches.length;

    if (isDataLoaded && isMounted.value && document.readyState === 'complete') {
        SplashScreen.hide();
    }
});
</script>

<template>
    <v-page>
        <v-loader :logs="['useBranches', 'useTopic', 'useBranchesLive', 'getTopicsByBranchLive']" />

        <template #header>
            <v-home-header :is-history="!!homeState.history">
                {{ $t.home.title }}
            </v-home-header>
        </template>

        <template #refresher>
            <v-refresher @ion-refresh="handleRefresh" />
        </template>

        <v-global-search-input modifier="v-mb-box-xl" />

        <v-article-box-slider
            v-if="homeState.favorites?.length"
            :last-box="{ title: 'Zu deinen Favoriten', link: { name: RouteName.FAVORITE_INDEX } }"
            :slider-items="homeState.favorites"
            modifier="v-mb-box-xl md:v-mb-section-md"
        >
            Deine Favoriten
        </v-article-box-slider>

        <v-article-box-slider
            v-if="homeState.history?.length"
            :last-box="{ title: 'Zu deinem Verlauf', link: { name: RouteName.HISTORY_INDEX } }"
            :slider-items="homeState.history"
            modifier="v-mb-box-xl md:v-mb-section-md"
        >
            {{ $t.history.title }}
        </v-article-box-slider>

        <h2 class="v-h2">Teilgebiete der Physik</h2>

        <div
            class="v-mt-box-md v-grid v-grid-cols-2 v-gap-box-md md:v-mt-box-lg md:v-grid-cols-4 md:v-gap-box-lg"
        >
            <template v-for="branch in homeState.branches" :key="branch.name">
                <router-link :to="{ name: RouteName.BRANCH_ID, params: { id: branch.id } }">
                    <v-branch-box
                        modifier="v-h-full"
                        :img="{
                            src: branch.icon?.url || '',
                            alt: branch.icon?.alt || '',
                        }"
                    >
                        {{ branch.name }}
                    </v-branch-box>
                </router-link>
            </template>
        </div>

        <h2 class="v-h2 v-mt-section md:v-mt-section-md">Sammlung deiner Lehrkraft</h2>

        <p class="v-p v-mt-box-xs md:v-mt-box-lg">
            Deine Lehrerin teilt ihre Sammlung über einen Short-Code oder einen QR-Code mit dir? Gib
            den Short-Code in das Suchfeld ein oder fotografiere den QR-Code mit der Kamera um die
            Sammlung auf deinem Gerät aufzurufen.
        </p>

        <v-collection-search-form is-grid />

        <h2 class="v-h2 v-mt-section md:v-mt-section-md">Eigene Sammlung erstellen</h2>

        <p class="v-p v-mt-box-xs md:v-mt-box-lg">
            Behalte den Überblick über deine Artikel und Aufgaben. Organisiere deine Inhalte in
            eignen Sammlungen.
        </p>

        <v-input-button
            is-grid
            icon="icon/add-collection.svg"
            :button-text="$t.collection.create"
            :placeholder="$t.collection.collectionName"
            @on-submit="homeState.createAndNavigateToNewCollection"
        />

        <h2 class="v-h2 v v-mt-section md:v-mt-section-md">
            {{ $t.collection.yourMyCollections }}
        </h2>

        <p v-if="!homeState.collections?.length" class="v-p v-mt-box-xs md:v-mt-box-lg">
            {{ $t.collection.noMyCollections }}
        </p>

        <template v-if="homeState.collections?.length">
            <p class="v-p v-mt-box-xs md:v-mt-box-lg">{{ $t.collection.listMyCollections }}</p>

            <div
                v-for="collection in homeState.collections"
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

            <v-button
                modifier="v-mt-box-md v-w-full"
                :router-link="{ name: RouteName.COLLECTION_INDEX }"
            >
                <v-icon src="icon/collection-subscribe.svg" with-space-right />

                {{ $t.collection.allCollections }}
            </v-button>
        </template>

        <template v-if="!homeState.collections?.length">
            <router-link
                :to="{ name: RouteName.BRANCH_INDEX }"
                class="v-mt-box-md v-block md:v-mt-box-lg"
            >
                <v-placeholder-button />
            </router-link>
        </template>
    </v-page>
</template>
