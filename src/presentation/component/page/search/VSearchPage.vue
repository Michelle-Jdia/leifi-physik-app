<script setup lang="ts">
import type { ReadSearchOutput } from '@/data/repository/searchRepository';
import type { ComputedRef, Ref } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { computed, ref } from 'vue';
import { $t } from '@/application/translation';
import { ContentType, contentTypeMapToHumanReadableName } from '@/data/type/helper/contentType';
import { parseBranchColor } from '@/connection/helper/dataMap';
import { getContextualRouteNameByType } from '@/connection/helper/navigation';
import { RouteName } from '@/connection/router/routeName';
import {
    isSearchDownloadApi,
    isSearchIssueApi,
    isSearchTaskApi,
    isSearchTopicApi,
    useSearch,
} from '@/store/searchStore';
import VBranchHeader from '@/layout/header/VBranchHeader/VBranchHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VArticleInfoSlide from '@/molecule/slide/VArticleInfoSlide/VArticleInfoSlide.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';

interface Props {
    q?: string;
}

const props = defineProps<Props>();
const searchQuery: Ref<string> = ref('');
const searchResults: Ref<ReadSearchOutput | Partial<ReadSearchOutput> | void> = ref();
const selectedPillType: Ref<string | null> = ref(null);
const searchOffset: Ref<number> = ref(0);
const searchLimit: Ref<number> = ref(30);
const showLoadMoreButton: Ref<boolean> = ref(true);

async function getSearchResults(): Promise<void> {
    const { data, getData } = useSearch({
        params: {
            fulltext: searchQuery.value,
            offset: searchOffset.value.toString(),
            limit: searchLimit.value.toString(),
        },
    });

    await getData();
    searchResults.value = data.value;

    showLoadMoreButton.value = searchResults.value?.data?.length === searchLimit.value;
}

const pageTitle: ComputedRef<string> = computed(() => {
    return searchQuery.value
        ? `${$t.search.titleWithSearch} ${searchQuery.value}`
        : $t.search.title;
});

function startNewSearch(query: string): void {
    searchQuery.value = query;
    searchOffset.value = 0;

    getSearchResults();
}

async function loadNextResultsPage(): Promise<void> {
    searchOffset.value += searchLimit.value;

    const tempPreviousResults = searchResults.value;
    const tempPreviousResultsData = tempPreviousResults?.data;

    if (!tempPreviousResults || !tempPreviousResultsData) {
        return;
    }

    await getSearchResults();

    if (!searchResults.value?.data?.length) {
        searchResults.value = tempPreviousResults;

        return;
    }

    searchResults.value = {
        ...searchResults.value,
        data: [...tempPreviousResultsData, ...searchResults.value.data],
    };
}

onIonViewWillEnter(() => {
    if (props.q) {
        searchQuery.value = props.q;
        getSearchResults();
    }
});

const sliderItems: ComputedRef<string[]> = computed(() => {
    if (!searchResults.value || !searchResults.value.data) {
        return [];
    }

    const types = searchResults.value.data
        .map((item) => contentTypeMapToHumanReadableName.get(item.type))
        .filter(Boolean);

    return [...new Set(types)];
});

function handlePillClick(text: string): void {
    selectedPillType.value = text;
}

const isSelectedSearchFilterIssue: ComputedRef<boolean> = computed(() => {
    return (
        !selectedPillType.value ||
        selectedPillType.value === contentTypeMapToHumanReadableName.get(ContentType.ISSUE)
    );
});

const isSelectedSearchFilterTask: ComputedRef<boolean> = computed(() => {
    return (
        !selectedPillType.value ||
        selectedPillType.value === contentTypeMapToHumanReadableName.get(ContentType.TASK)
    );
});

const isSelectedSearchFilterTopic: ComputedRef<boolean> = computed(() => {
    return (
        !selectedPillType.value ||
        selectedPillType.value === contentTypeMapToHumanReadableName.get(ContentType.TOPIC)
    );
});

const isSelectedSearchFilterDownload: ComputedRef<boolean> = computed(() => {
    return (
        !selectedPillType.value ||
        selectedPillType.value === contentTypeMapToHumanReadableName.get(ContentType.DOWNLOAD)
    );
});
</script>

<template>
    <v-page modifier="v-p-0 md:v-p-0">
        <template #header>
            <v-branch-header
                :search-slider-items="sliderItems"
                :search-query="q"
                @on-submit="startNewSearch"
                @on-pill-click="handlePillClick"
            >
                {{ pageTitle }}
            </v-branch-header>
        </template>

        <v-loader :logs="['useSearch']" />

        <h3 v-if="searchResults && !searchResults.data?.length" class="v-h3">
            {{ $t.search.noResults }}
        </h3>

        <h3 v-if="!searchQuery" class="v-h3">
            {{ $t.search.noQueryText }}
        </h3>

        <template v-if="searchResults && searchResults.data?.length">
            <template v-for="result in searchResults.data" :key="result.id">
                <v-article-info-slide
                    v-if="isSearchIssueApi(result) && isSelectedSearchFilterIssue"
                    :id="result.id"
                    :router-link="{
                        name: getContextualRouteNameByType(result.type),
                        params: { id: result.id },
                    }"
                    :type="result.type"
                    :title="result.title"
                    :subtitle="result.field_issue_category.meta.name"
                    :branch="{
                        title: `${result.field_referenced_topic.meta.field_topic_referenced_branch.name}`,
                        color: parseBranchColor(
                            result.field_referenced_topic.meta.field_topic_referenced_branch
                                .field_branch_color.field_class_name,
                        ),
                    }"
                    modifier="v-border-b v-border-b-gray-50"
                />

                <v-article-info-slide
                    v-else-if="isSearchTaskApi(result) && isSelectedSearchFilterTask"
                    :id="result.id"
                    :router-link="{
                        name: getContextualRouteNameByType(result.type),
                        params: { id: result.id },
                    }"
                    :title="result.title"
                    :subtitle="$t.task.headline"
                    :type="result.type"
                    :branch="{
                        title: `${result.field_referenced_topic.meta.field_topic_referenced_branch.name}`,
                        color: parseBranchColor(
                            result.field_referenced_topic.meta.field_topic_referenced_branch
                                .field_branch_color.field_class_name,
                        ),
                    }"
                    modifier="v-border-b v-border-b-gray-50"
                />

                <v-article-info-slide
                    v-else-if="isSearchTopicApi(result) && isSelectedSearchFilterTopic"
                    :id="result.id"
                    :router-link="{
                        name: RouteName.TOPIC_ID,
                        params: { id: result.id },
                    }"
                    :title="result.name"
                    :subtitle="$t.topic.typeSubtitle"
                    :type="result.type"
                    is-topic
                    :branch="{
                        title: result.field_topic_referenced_branch?.meta?.name || '',
                        color: parseBranchColor(
                            result.field_topic_referenced_branch?.meta?.field_branch_color
                                .field_class_name,
                        ),
                    }"
                    modifier="v-border-b v-border-b-gray-50"
                >
                    <template #after>
                        <div v-html="result.description?.processed" />
                    </template>
                </v-article-info-slide>

                <!--                <v-article-info-slide-->
                <!--                    v-else-if="isSearchLinkApi(result)"-->
                <!--                    :id="result.id"-->
                <!--                    :title="result.title"-->
                <!--                    :subtitle="$t.link.typeSubtitle"-->
                <!--                    :type="result.type"-->
                <!--                    :branch="{-->
                <!--                        title: '',-->
                <!--                        color: '',-->
                <!--                    }"-->
                <!--                    modifier="v-border-b v-border-b-gray-50"-->
                <!--                />-->

                <!-- This last one doesn't seem to work with v-else-if or v-else. not sure if coming from Vue or TS, but it thinks `result` is type `never` -->
                <v-article-info-slide
                    v-if="isSearchDownloadApi(result) && isSelectedSearchFilterDownload"
                    :id="result.id"
                    :router-link="{
                        name: getContextualRouteNameByType(result.type),
                        params: { id: result.id },
                    }"
                    :title="result.title"
                    :subtitle="$t.download.headline"
                    :type="result.type"
                    :branch="{
                        title: `${result.field_referenced_topic.meta.field_topic_referenced_branch.name}`,
                        color: parseBranchColor(
                            result.field_referenced_topic.meta.field_topic_referenced_branch
                                .field_branch_color.field_class_name,
                        ),
                    }"
                    modifier="v-border-b v-border-b-gray-50"
                />
            </template>

            <v-button
                v-if="showLoadMoreButton"
                modifier="v-w-full v-p-box-xl v-m-0"
                @click="loadNextResultsPage"
                >{{ $t.search.moreResults }}</v-button
            >
        </template>
    </v-page>
</template>
