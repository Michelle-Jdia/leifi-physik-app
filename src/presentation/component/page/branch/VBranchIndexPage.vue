<script setup lang="ts">
import type { SliderItem } from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider.vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { search } from 'ionicons/icons';
import { useBranches } from '@/store/branchStore';
import { getTopicsByBranch, createTopicSlider } from '@/store/topicStore';
import { createReactiveData } from '@/connection/helper/fetcher';
import VBranchHeader from '@/layout/header/VBranchHeader/VBranchHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VTopicBoxSlider from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider.vue';
import VBranchBox from '@/atom/box/VBranchBox/VBranchBox.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VInput from '@/atom/input/VInput/VInput.vue';

type TopicSliderItem = Record<string, SliderItem[]>;

const { data: branches, getData } = useBranches();

const { data: sliders, getData: buildSliders } = createReactiveData<never, TopicSliderItem | void>(
    async () => {
        await getData();

        if (!branches.value) {
            return;
        }

        const promises = branches.value.map((branch) => {
            return getTopicsByBranch({
                params: {
                    branchId: branch.id,
                },
            }).getData();
        });

        const responses = await Promise.all(promises);

        return responses.reduce((sliders: TopicSliderItem, response) => {
            if (response && response.length) {
                // @ts-ignore @todo figure out why its complining
                const branchId = response[0].referenced_branch;

                if (!sliders[branchId]) {
                    sliders[branchId] = response.map(createTopicSlider);
                }
            }

            return sliders;
        }, {});
    },
)();

onIonViewWillEnter(buildSliders);
</script>

<template>
    <v-page>
        <v-loader :logs="['useBranches', 'getTopicsByBranch']" />

        <template #header>
            <v-branch-header>Alle Inhalte</v-branch-header>
        </template>

        <v-input placeholder="Alle Inhalte durchsuchen oder Code eingeben..." :icon="search" />

        <h1 class="v-h2 v-mt-box-xl v-font-bold">Teilgebiete der Physik</h1>

        <div class="v-mt-box-xl v-grid v-grid-cols-2 v-gap-box-md md:v-grid-cols-4">
            <template v-for="branch in branches" :key="branch.name">
                <router-link :to="{ name: 'branch-id', params: { id: branch.id } }">
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
            v-for="branch in branches"
            :key="branch.id"
            :modifier="'v-mt-box-md v-bg-' + branch.color"
            :branch-img="{
                src: branch.icon?.url || '',
                alt: branch.icon?.alt || '',
            }"
            :link="{ name: 'branch-id', params: { id: branch.id } }"
            :slider-items="(sliders && sliders[branch.id]) || []"
        >
            {{ branch.name }}
        </v-topic-box-slider>
    </v-page>
</template>
