<script setup lang="ts">
import type { Branch } from '@/data/type/app/branch';
import type { Issue } from '@/data/type/app/issue';
import { onIonViewWillEnter } from '@ionic/vue';
import { createReactiveData } from '@/connection/helper/fetcher';
import {
    useIssuesByTopic,
    isIssueFirstCategory,
    isIssueSecondCategory,
    isIssueThirdCategory,
    isIssueFourthCategory,
    IssueCategory,
} from '@/store/issueStore';
import { setFavoriteIssue, useFavoriteIssues } from '@/store/favoriteStore';
// import { getTasksByTopic } from '@/store/taskStore';
import { useBranch } from '@/store/branchStore';
import { useTopic } from '@/store/topicStore';
import VPage from '@/layout/page/VPage.vue';
import VBranchHeader from '@/layout/header/VBranchHeader/VBranchHeader.vue';
import VArticleInfoSlide from '@/molecule/slide/VArticleInfoSlide/VArticleInfoSlide.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';

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

function sortIssuesByWeight(issue1: Issue, issue2: Issue) {
    return issue1.issue_weight - issue2.issue_weight;
}

const { data: topic, getData: getTopic } = useTopic({
    params: {
        id: props.id,
    },
});

const { data: issues, getData: getIssue } = useIssuesByTopic({
    params: {
        topicId: props.id,
    },
});

const { data: favorites, getData: getFavorites } = useFavoriteIssues();

// // const { data: tasks, getData: getTasksByTopicData } = getTasksByTopic({
// //     params: {
// //         topicId: props.id,
// //     },
// // });

// getTasksByTopic();

const { data: pageData, getData: getPageData } = createReactiveData<
    never,
    Partial<PageData> | void
>(async () => {
    await getTopic();

    if (!topic.value) {
        return;
    }

    const { data: branch, getData: getBranch } = useBranch({
        params: {
            id: topic.value.referenced_branch,
        },
    });

    await Promise.all([getIssue(), getBranch()]);

    if (!branch.value && !issues.value) {
        return;
    }

    if (!issues.value) {
        return {
            branch: branch.value,
        };
    }

    const one = issues.value.filter(isIssueFirstCategory).sort(sortIssuesByWeight);
    const two = issues.value.filter(isIssueSecondCategory);
    const three = issues.value.filter(isIssueThirdCategory);
    const four = issues.value.filter(isIssueFourthCategory);

    const categories = [
        {
            title: `${IssueCategory.one} & Aufgaben`,
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
})();

async function updateFavorite(id: string, closeSlide: () => void): Promise<void> {
    await setFavoriteIssue(id);
    getFavorites();
    closeSlide();
}

onIonViewWillEnter(getPageData);
onIonViewWillEnter(getFavorites);
</script>

<template>
    <v-page modifier="v-px-0 md:v-px-0">
        <v-loader :logs="['useTopic', 'useTasksByTopic', 'useIssuesByTopic', 'useBranch']" />

        <template #header>
            <v-branch-header>
                <template v-if="topic">
                    {{ topic.name }}
                </template>
            </v-branch-header>
        </template>

        <template v-if="pageData && pageData.categories">
            <div v-for="(slider, index) in pageData.categories" :key="slider.title">
                <h2
                    v-if="slider.items.length"
                    :class="`v-h3 v-border-b v-border-b-gray-50 v-px-box v-font-bold ${
                        index !== 0 ? 'v-py-box-xl' : 'v-pb-box-xl'
                    }`"
                >
                    {{ slider.title }}
                </h2>

                <div
                    v-for="issue in slider.items"
                    :key="issue.id"
                    class="v-border-b v-border-b-gray-50"
                >
                    <router-link
                        v-if="pageData.branch"
                        :to="{ name: 'issue-id', params: { id: issue.id } }"
                    >
                        <v-article-info-slide
                            :id="issue.id"
                            modifier="border-y"
                            :title="issue.title"
                            :sub-title="issue.issue_category"
                            :is-favorite="favorites?.includes(issue.id)"
                            :branch="{
                                title: pageData.branch.name,
                                color: `v-bg-${pageData.branch.color}`,
                            }"
                            @on-favorite="updateFavorite"
                        />
                    </router-link>
                </div>
            </div>
        </template>
    </v-page>
</template>
