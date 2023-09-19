<script setup lang="ts">
import type { ComputedRef } from 'vue';
import type { SliderItem } from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider.vue';
import { computed } from 'vue';
import { useBranch } from '@/store/branchStore';
import {
    TopicDegree,
    getTopicsByBranch,
    createTopicSlider,
    isTopicFirstDegree,
    isTopicSecondDegree,
    isTopicThirdDegree,
} from '@/store/topicStore';
import VPage from '@/layout/page/VPage.vue';
import VBranchHeader from '@/layout/header/VBranchHeader/VBranchHeader.vue';
import VTopicBoxSlider from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';

interface Props {
    id: string;
}

const props = defineProps<Props>();

type TopicSliderItem = Record<string, SliderItem[]>;

const themeTitle = 'Themenbereiche';

const { data: branch, getData: getBranch } = useBranch({
    params: {
        id: props.id,
    },
});

const { data: topics, getData: getTopics } = getTopicsByBranch({
    params: {
        branchId: props.id,
    },
});

const sliders: ComputedRef<TopicSliderItem | void> = computed(() => {
    if (!topics.value) {
        return;
    }

    const levelOneTopics = topics.value.filter(isTopicFirstDegree);
    const levelTwoTopics = topics.value.filter(isTopicSecondDegree);
    const levelThreeTopics = topics.value.filter(isTopicThirdDegree);

    return {
        levelOne: levelOneTopics.map(createTopicSlider),
        levelTwo: levelTwoTopics.map(createTopicSlider),
        levelThree: levelThreeTopics.map(createTopicSlider),
    };
});

getBranch();
getTopics();
</script>

<template>
    <v-page>
        <v-loader :logs="['useBranch', 'getTopicsByBranch']" />

        <template v-if="branch" #header>
            <v-branch-header>
                {{ branch.name }}

                <template #sub-title>Teilgebiete</template>
            </v-branch-header>
        </template>

        <div v-if="sliders?.levelOne && sliders.levelOne.length && branch" class="v-mb-section">
            <h2 class="v-h2">{{ TopicDegree.one }}</h2>

            <v-topic-box-slider
                :key="branch.id"
                :modifier="'v-mt-box-md v-bg-' + branch.color"
                :branch-img="{
                    src: branch.icon?.url || '',
                    alt: branch.icon?.alt || '',
                }"
                :slider-items="sliders.levelOne"
            >
                {{ themeTitle }}
            </v-topic-box-slider>
        </div>

        <div v-if="sliders?.levelTwo && sliders.levelTwo.length && branch" class="v-mb-section">
            <h2 class="v-h2">{{ TopicDegree.two }}</h2>

            <v-topic-box-slider
                :key="branch.id"
                :modifier="'v-mt-box-md v-bg-' + branch.color"
                :branch-img="{
                    src: branch.icon?.url || '',
                    alt: branch.icon?.alt || '',
                }"
                :slider-items="sliders.levelTwo"
            >
                {{ themeTitle }}
            </v-topic-box-slider>
        </div>

        <div v-if="sliders?.levelThree && sliders.levelThree.length && branch">
            <h2 class="v-h2">{{ TopicDegree.three }}</h2>

            <v-topic-box-slider
                :key="branch.id"
                :modifier="'v-mt-box-md v-bg-' + branch.color"
                :branch-img="{
                    src: branch.icon?.url || '',
                    alt: branch.icon?.alt || '',
                }"
                :slider-items="sliders.levelThree"
            >
                {{ themeTitle }}
            </v-topic-box-slider>
        </div>
    </v-page>
</template>
