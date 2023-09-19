<script setup lang="ts">
import type { SliderItem } from '@/molecule/slider/VArticleBoxSlider/VArticleBoxSlider.vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { search } from 'ionicons/icons';
import { useBranches, useBranch } from '@/store/branchStore';
import { useTopic } from '@/store/topicStore';
import { useIssue } from '@/store/issueStore';
import { getHistory } from '@/store/historyStore';
import { createReactiveData } from '@/connection/helper/fetcher';
import VBranchHeader from '@/layout/header/VBranchHeader/VBranchHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VArticleBoxSlider from '@/molecule/slider/VArticleBoxSlider/VArticleBoxSlider.vue';
import VPlaceholderButton from '@/atom/button/VPlaceholderButton/VPlaceholderButton.vue';
import VBranchBox from '@/atom/box/VBranchBox/VBranchBox.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VInput from '@/atom/input/VInput/VInput.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

const { data: branches, getData: getBranches } = useBranches();

// @todo works only for issue now, need to extend this later
const { data: history, getData: getHistoryData } = createReactiveData<never, SliderItem[] | void>(
    async () => {
        const history = (await getHistory()) || [];

        if (!history.length) {
            return;
        }

        const sliderItems: SliderItem[] = [];

        for (const item of history) {
            if (item.type === 'issue') {
                const { data: issue, getData: getIssue } = useIssue({
                    params: {
                        id: item.id,
                    },
                });

                // eslint-disable-next-line no-await-in-loop
                await getIssue();

                if (!issue.value) {
                    return;
                }

                const { data: topic, getData: getTopic } = useTopic({
                    params: {
                        id: issue.value.referenced_topic,
                    },
                });

                // eslint-disable-next-line no-await-in-loop
                await getTopic();

                if (!topic.value) {
                    return;
                }

                const { data: branch, getData: getBranch } = useBranch({
                    params: {
                        id: topic.value.referenced_branch,
                    },
                });

                // eslint-disable-next-line no-await-in-loop
                await getBranch();

                if (!branch.value) {
                    return;
                }

                sliderItems.push({
                    title: issue.value.title,
                    subtitle: issue.value.issue_category,
                    link: {
                        name: 'issue-id',
                        params: {
                            id: issue.value.id,
                        },
                    },
                    badge: {
                        title: branch.value.name,
                        color: `v-bg-${branch.value.color}`,
                    },
                });
            }
        }

        return sliderItems;
    },
)();

onIonViewWillEnter(getBranches);
onIonViewWillEnter(getHistoryData);
</script>

<template>
    <v-page>
        <v-loader :logs="['useBranches', 'useBranch', 'useTopic']" />

        <template #header>
            <v-branch-header>Willkommen bei LEIFIphysik</v-branch-header>
        </template>

        <v-article-box-slider
            v-if="history"
            :last-box="{ title: 'Zu deinen Favoriten', link: { name: 'favorite' } }"
            :slider-items="history"
        />

        <v-input
            modifier=" md:v-hidden"
            placeholder="Alle Inhalte durchsuchen oder Code eingeben..."
            :icon="search"
        />

        <h2 class="v-h2 v-mt-box-xl">Teilgebiete der Physik</h2>

        <div
            class="v-mt-box-md v-grid v-grid-cols-2 v-gap-box-md md:v-mt-box-lg md:v-grid-cols-4 md:v-gap-box-lg"
        >
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

        <h2 class="v-h2 v-mt-section md:v-mt-section-md">Sammlung deiner Lehrkraft</h2>

        <p class="v-p v-mt-box-xs md:v-mt-box-lg">
            Sammlungen helfen dir z.B. bei der Vorbereitung lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua.
        </p>

        <div
            class="v-mt-box-md v-grid v-grid-cols-1 v-gap-x-box-md md:v-mt-box-lg md:v-grid-cols-2"
        >
            <v-input placeholder="Shortcode" variant="flat" />

            <v-button modifier="v-mt-box-md md:v-mt-0" :router-link="{ name: 'collection-index' }">
                <v-icon size="sm" src="/icon/collectionabo.svg" with-space-right />

                Aufrufen
            </v-button>
        </div>

        <h2 class="v-h2 v-mt-section md:v-mt-section-md">Eigene Sammlung erstellen</h2>

        <p class="v-p v-mt-box-xs md:v-mt-box-lg">
            Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.
        </p>

        <div
            class="v-mt-box-md v-grid v-grid-cols-1 v-gap-x-box-md md:v-mt-box-lg md:v-grid-cols-2"
        >
            <v-input placeholder="Name der Sammlung" variant="flat" />

            <v-button modifier="v-mt-box-md md:v-mt-0" :router-link="{ name: 'collection-index' }">
                <v-icon size="sm" src="/icon/add-collection.svg" with-space-right />

                Erstellen
            </v-button>
        </div>

        <h2 class="v-h2 v v-mt-section md:v-mt-section-md">Du hast noch keine Artikel gemerkt</h2>

        <p class="v-p v-mt-box-xs md:v-mt-box-lg">
            Sammlungen helfen dir z.B. bei der Vorbereitung lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua.
        </p>

        <router-link :to="{ name: 'branch-index' }" class="v-mt-box-md v-block md:v-mt-box-lg">
            <v-placeholder-button />
        </router-link>
    </v-page>
</template>
