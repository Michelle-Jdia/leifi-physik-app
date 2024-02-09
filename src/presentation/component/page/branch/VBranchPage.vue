<script setup lang="ts">
import type { SliderItem } from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider.vue';
import type { RefresherCustomEvent } from '@ionic/vue';
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import { createRefresherHandler } from '@/connection/helper/refresher';
import { useBranch } from '@/store/branchStore';
import { navigateToSearch } from '@/store/searchStore';
import {
    getTopicsByBranchLive,
    isTopicFirstDegree,
    isTopicSecondDegree,
    isTopicThirdDegree,
    TopicDegree,
    useTopicsByBranch,
} from '@/store/topicStore';
import { createTopicSlider } from '@/presentation/helper/topic';
import VBranchHeader from '@/layout/header/VBranchHeader/VBranchHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VTopicBoxSlider from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VRefresher from '@/atom/refresher/VRefresher/VRefresher.vue';

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

const { data: topics, getData: getTopics } = useTopicsByBranch({
    params: {
        branchId: props.id,
    },
});

const { getData: getLiveTopics } = getTopicsByBranchLive({
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

function getTopicHeadline(key: string): TopicDegree | void {
    if (key === 'levelOne') {
        return TopicDegree.one;
    }

    if (key === 'levelTwo') {
        return TopicDegree.two;
    }

    if (key === 'levelThree') {
        return TopicDegree.three;
    }
}

async function handleRefresh(event: RefresherCustomEvent): Promise<void> {
    await createRefresherHandler({
        event: event,
        callback: async () => {
            await getLiveTopics();
            await getBranch();
            await getTopics();
        },
    });
}

getBranch();
getTopics();
</script>

<template>
    <v-page>
        <v-loader :logs="['useBranch', 'getTopicsByBranch']" />

        <template #header>
            <v-branch-header @on-submit="navigateToSearch">
                <template v-if="branch">
                    {{ branch.name }}
                </template>

                <template #sub-title>Teilgebiete</template>
            </v-branch-header>
        </template>

        <template #refresher>
            <v-refresher @ion-refresh="handleRefresh" />
        </template>

        <template v-if="sliders && branch">
            <template v-for="key in Object.keys(sliders)" :key="key">
                <div v-if="sliders[key] && sliders[key]?.length" class="v-mb-section">
                    <h2 class="v-h2">{{ getTopicHeadline(key) }}</h2>

                    <v-topic-box-slider
                        v-if="sliders[key]"
                        :key="branch.id"
                        modifier="v-mt-box-md"
                        :color="branch.color"
                        :branch-img="{
                            src: branch.icon?.url || '',
                            alt: branch.icon?.alt || '',
                        }"
                        :slider-items="sliders[key] || []"
                    >
                        {{ themeTitle }}
                    </v-topic-box-slider>
                </div>
            </template>
        </template>
    </v-page>
</template>
