<script setup lang="ts">
import type { Branch } from '@/data/type/app/branch';
import type { Issue } from '@/data/type/app/issue';
import type { RefresherCustomEvent } from '@ionic/vue';
import type { Ref } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { ref } from 'vue';
import { createReactiveData } from '@/connection/helper/fetcher';
import { createRefresherHandler } from '@/connection/helper/refresher';
import { RouteName } from '@/connection/router/routeName';
import { useBranch } from '@/store/branchStore';
import { useDownloadsByTopic, useDownloadsByTopicLive } from '@/store/downloadStore';
import {
    isIssueFirstCategory,
    isIssueFourthCategory,
    isIssueSecondCategory,
    isIssueThirdCategory,
    IssueCategory,
    useIssuesByTopic,
    useIssuesByTopicLive,
} from '@/store/issueStore';
import { useTasksByTopic } from '@/store/taskStore';
import { useTopic, useTopicLive } from '@/store/topicStore';
import VBranchHeader from '@/layout/header/VBranchHeader/VBranchHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VFavoriteWrapper from '@/container/wrapper/VFavoriteWrapper/VFavoriteWrapper.vue';
import VArticleInfoSlide from '@/molecule/slide/VArticleInfoSlide/VArticleInfoSlide.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VRefresher from '@/atom/refresher/VRefresher/VRefresher.vue';

interface Props {
    id: string;
}

interface PageData {
    branch: Branch | void;
    categories: {
        title: string;
        items: Issue[];
    }[];
}

const props = defineProps<Props>();
const refAnchors: Ref<HTMLHeadingElement[]> = ref([]);

function sortIssuesByWeight(issue1: Issue, issue2: Issue): number {
    return issue1.issue_weight - issue2.issue_weight;
}

const addRefAnchors = (index: number) => (ref: any) => {
    // we need to use index here, otherwise the loops could spam multiple refs in the array
    refAnchors.value[index] = ref;
};

const { data: topic, getData: getTopic } = useTopic({
    params: {
        id: props.id,
    },
});

const { getData: getTopicLive } = useTopicLive({
    params: {
        id: props.id,
    },
});

const { data: issues, getData: getIssue } = useIssuesByTopic({
    params: {
        topicId: props.id,
    },
});

const { getData: getIssueLive } = useIssuesByTopicLive({
    params: {
        topicId: props.id,
    },
});

const { data: downloads, getData: getDownloads } = useDownloadsByTopic({
    params: {
        topicId: props.id,
    },
});

const { getData: getDownloadsLive } = useDownloadsByTopicLive({
    params: {
        topicId: props.id,
    },
});

const { data: pageData, getData: getPageData } = createReactiveData<Partial<PageData> | void>(
    async () => {
        await getTopic();

        if (!topic.value) {
            return;
        }

        const { data: branch, getData: getBranch } = useBranch({
            params: {
                id: topic.value.referenced_branch,
            },
        });

        const { data: tasks, getData: getTasksByTopic } = useTasksByTopic({
            params: {
                topicId: props.id,
            },
        });

        await Promise.all([getIssue(), getBranch(), getTasksByTopic()]);

        if (!branch.value && !issues.value && !tasks.value) {
            return;
        }

        if (!issues.value) {
            return {
                branch: branch.value,
            };
        }

        const one = issues.value.filter(isIssueFirstCategory).sort(sortIssuesByWeight);

        const oneTitle = one.find((issue) => issue.has_tasks)
            ? `${IssueCategory.one} & Aufgaben`
            : IssueCategory.one;

        const two = issues.value.filter(isIssueSecondCategory);
        const three = issues.value.filter(isIssueThirdCategory);
        const four = issues.value.filter(isIssueFourthCategory);

        const categories = [
            {
                title: oneTitle,
                items: one,
            },
            {
                title: IssueCategory.two,
                items: two,
            },
            {
                title: IssueCategory.three,
                items: three,
            },
            {
                title: IssueCategory.four,
                items: four,
            },
        ];

        if (!branch.value) {
            return {
                categories,
            };
        }

        return {
            branch: branch.value,
            categories,
        };
    },
)();

async function handleRefresh(event: RefresherCustomEvent): Promise<void> {
    await createRefresherHandler({
        event: event,
        callback: async () => {
            await getTopicLive();
            await getIssueLive();
            await getDownloadsLive();
            await getPageData();
            await getDownloads();
        },
    });
}

onIonViewWillEnter(async () => {
    await getPageData();
    await getDownloads();
});
</script>

<template>
    <v-page modifier="v-p-0 md:v-p-0">
        <v-loader
            :logs="[
                'useTopic',
                'useTasksByTopic',
                'useIssuesByTopic',
                'useBranch',
                'useIssue',
                'useDownload',
                'useDownloadsByTopic',
            ]"
        />

        <template #refresher>
            <v-refresher @ion-refresh="handleRefresh" />
        </template>

        <template #header>
            <v-branch-header :anchors="refAnchors" :is-search-enabled="false">
                <template v-if="pageData?.branch" #pre-title>
                    <router-link
                        :to="{ name: RouteName.BRANCH_ID, params: { id: pageData.branch.id } }"
                    >
                        {{ pageData.branch?.name }}
                    </router-link>
                </template>

                <template v-if="topic">
                    {{ topic.name }}
                </template>
            </v-branch-header>
        </template>

        <template v-if="pageData && pageData.categories">
            <div v-for="(slider, index) in pageData.categories" :key="slider.title">
                <h2
                    v-if="slider.items.length"
                    :ref="addRefAnchors(index)"
                    class="v-h3 v-border-b v-border-b-gray-50 v-px-box v-py-box-xl v-font-bold"
                >
                    {{ slider.title }}
                </h2>

                <div
                    v-for="issue in slider.items"
                    :key="issue.id"
                    class="v-border-b v-border-b-gray-50"
                >
                    <v-favorite-wrapper :id="issue.id" :type="issue.type">
                        <template #default="{ branch, subtitle, handleFavorite, isFavorite, link }">
                            <router-link :to="link">
                                <v-article-info-slide
                                    v-if="branch"
                                    :id="issue.id"
                                    :type="issue.type"
                                    :title="issue.title"
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
        </template>

        <template v-if="downloads">
            <h2
                v-if="downloads.length"
                :ref="addRefAnchors(5)"
                class="v-h3 v-border-b v-border-b-gray-50 v-px-box v-py-box-xl v-font-bold"
            >
                {{ IssueCategory.five }}
            </h2>

            <div
                v-for="download in downloads"
                :key="download.id"
                class="v-border-b v-border-b-gray-50"
            >
                <router-link :to="{ name: RouteName.DOWNLOAD_ID, params: { id: download.id } }">
                    <v-favorite-wrapper :id="download.id" :type="download.type">
                        <template #default="{ branch }">
                            <v-article-info-slide
                                v-if="branch"
                                :id="download.id"
                                :type="download.type"
                                :title="download.title"
                                :subtitle="IssueCategory.five"
                                :branch="branch"
                            />
                        </template>
                    </v-favorite-wrapper>
                </router-link>
            </div>
        </template>
    </v-page>
</template>
