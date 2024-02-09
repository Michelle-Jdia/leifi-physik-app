<script setup lang="ts">
import type { Favorite } from '@/data/type/app/favorite';
import type { AllowedTypes } from '@/presentation/type/favorite';
import type { ComputedRef, Ref } from 'vue';
import type { RouteLocationNamedRaw } from 'vue-router';
import { computed, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ContentType } from '@/data/type/helper/contentType';
import { useDownloadTopicBranch } from '@/connection/helper/download';
import { useIssueTopicBranch } from '@/connection/helper/issue';
import { getContextualRouteNameByType } from '@/connection/helper/navigation';
import { useTaskTopicBranch } from '@/connection/helper/task';
import { toggleFavorite, useFavorite } from '@/store/favoriteStore';
import { createIssueSubtitle } from '@/store/issueStore';
import { useSubtitles } from '@/store/subtitleStore';

interface Branch {
    title: string;
    color: string;
}

interface Props {
    id: string;
    type: AllowedTypes;
}

const props = defineProps<Props>();
const route = useRoute();
const title: Ref<string> = ref('');
const subtitle: Ref<string> = ref('');
const branch: Branch = reactive({} as Branch);
const link: RouteLocationNamedRaw = reactive({});

const { data: favorite, getData } = useFavorite({
    id: props.id,
});

const { data: issueTopicBranch, getData: getIssueTopicBranch } = useIssueTopicBranch(props.id);
const { data: taskTopicBranch, getData: getTaskTopicBranch } = useTaskTopicBranch(props.id);
const { data: subtitles, getData: getSubtitles } = useSubtitles();

const { data: downloadTopicBranch, getData: getDownloadTopicBranch } = useDownloadTopicBranch(
    props.id,
);

const isFavorite: ComputedRef<boolean> = computed(() => {
    if (!favorite.value) {
        return false;
    }

    return favorite.value.id === props.id;
});

async function handleFavorite(favorite: Favorite, closeSlide: () => void) {
    await toggleFavorite(favorite);

    closeSlide();
    getData();
}

async function getDataBasedOnType(type: AllowedTypes) {
    if (type === ContentType.ISSUE) {
        await getIssueTopicBranch();

        if (!issueTopicBranch.value) {
            return;
        }

        title.value = issueTopicBranch.value.issue.title;

        subtitle.value = createIssueSubtitle(
            issueTopicBranch.value.issue.issue_category.name,
            issueTopicBranch.value.issue.has_tasks,
        );

        branch.title = issueTopicBranch.value.branch.name;
        branch.color = issueTopicBranch.value.branch.color;
        link.name = getContextualRouteNameByType(type);

        link.params = {
            id: issueTopicBranch.value.issue.id,
        };

        return;
    }

    if (type === ContentType.TASK) {
        await getTaskTopicBranch();

        if (!taskTopicBranch.value) {
            return;
        }

        title.value = taskTopicBranch.value.task.title;
        subtitle.value = 'Aufgaben';
        branch.title = taskTopicBranch.value.branch.name;
        branch.color = taskTopicBranch.value.branch.color;
        link.name = getContextualRouteNameByType(type);

        link.params = {
            id: taskTopicBranch.value.task.id,
        };

        return;
    }

    if (type === ContentType.DOWNLOAD) {
        await getDownloadTopicBranch();

        if (!downloadTopicBranch.value) {
            return;
        }

        title.value = downloadTopicBranch.value.download.title;
        subtitle.value = 'Download';
        branch.title = downloadTopicBranch.value.branch.name;
        branch.color = downloadTopicBranch.value.branch.color;
        link.name = getContextualRouteNameByType(type);

        link.params = {
            id: downloadTopicBranch.value.download.id,
        };

        return;
    }

    if (type === ContentType.SUBTITLE) {
        await getSubtitles();

        if (!subtitles.value) {
            return;
        }

        const foundSubtitle = subtitles.value.find((subtitle) => props.id === subtitle.id);

        if (!foundSubtitle) {
            return;
        }

        title.value = foundSubtitle.name;

        return;
    }
}

getData();
getDataBasedOnType(props.type);

watch(route, () => {
    getData();
    getDataBasedOnType(props.type);
});
</script>

<template>
    <slot
        :title="title"
        :subtitle="subtitle"
        :branch="branch"
        :link="link"
        :issue-topic-branch="issueTopicBranch"
        :task-topic-branch="taskTopicBranch"
        :handle-favorite="handleFavorite"
        :is-favorite="isFavorite"
    />
</template>
