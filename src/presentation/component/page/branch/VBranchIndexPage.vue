<script setup lang="ts">
import type { SliderItem } from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider.vue';
import type { RefresherCustomEvent } from '@ionic/vue';
import type { ComputedRef } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { computed } from 'vue';
import { createRefresherHandler } from '@/connection/helper/refresher';
import { RouteName } from '@/connection/router/routeName';
import { useBranchState } from '@/state/branchState';
import { navigateToSearch } from '@/store/searchStore';
import { createTopicSlider } from '@/presentation/helper/topic';
import VBranchHeader from '@/layout/header/VBranchHeader/VBranchHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VGlobalSearchInput from '@/container/form/VGlobalSearchInput/VGlobalSearchInput.vue';
import VTopicBoxSlider from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider.vue';
import VBranchBox from '@/atom/box/VBranchBox/VBranchBox.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VRefresher from '@/atom/refresher/VRefresher/VRefresher.vue';

type TopicSliderItem = Record<string, SliderItem[]>;

const branchState = useBranchState();

const sliders: ComputedRef<TopicSliderItem | void> = computed(() => {
    if (!branchState.topics) {
        return;
    }

    return branchState.topics.reduce((sliders: TopicSliderItem, topic) => {
        if (topic && topic[0]) {
            const branchId = topic[0].referenced_branch;

            if (!sliders[branchId]) {
                sliders[branchId] = topic.map(createTopicSlider);
            }
        }

        return sliders;
    }, {});
});

async function handleRefresh(event: RefresherCustomEvent): Promise<void> {
    await createRefresherHandler({
        event: event,
        callback: async () => {
            await branchState.getLiveTopicsAndBranches();
            await branchState.getTopics();
        },
    });
}

onIonViewWillEnter(branchState.getTopics);
</script>

<template>
    <v-page>
        <v-loader
            :logs="['useBranches', 'getTopicsByBranch', 'useBranchesLive', 'getTopicsByBranchLive']"
        />

        <template #header>
            <v-branch-header @on-submit="navigateToSearch">Alle Inhalte</v-branch-header>
        </template>

        <template #refresher>
            <v-refresher @ion-refresh="handleRefresh" />
        </template>

        <v-global-search-input modifier="v-mb-box-xl md:v-hidden" />

        <h1 class="v-h2 v-font-bold">Teilgebiete der Physik</h1>

        <div class="v-mt-box-xl v-grid v-grid-cols-2 v-gap-box-md md:v-grid-cols-4">
            <template v-for="branch in branchState.branches" :key="branch.name">
                <router-link :to="{ name: RouteName.BRANCH_ID, params: { id: branch.id } }">
                    <v-branch-box
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

        <v-topic-box-slider
            v-for="branch in branchState.branches"
            :key="branch.id"
            :color="branch.color"
            modifier="v-mt-box-md"
            :branch-img="{
                src: branch.icon?.url || '',
                alt: branch.icon?.alt || '',
            }"
            :link="{ name: RouteName.BRANCH_ID, params: { id: branch.id } }"
            :slider-items="(sliders && sliders[branch.id]) || []"
        >
            {{ branch.name }}
        </v-topic-box-slider>
    </v-page>
</template>
