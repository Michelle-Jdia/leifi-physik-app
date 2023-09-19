<script setup lang="ts">
import '@/presentation/style/static/bootstrap.scss';
import type { ComputedRef } from 'vue';
import type { Task } from '@/data/type/app/task';
import { computed, onMounted } from 'vue';
import { useIssue } from '@/store/issueStore';
import { useTasksByIssue, sortTasksByType } from '@/store/taskStore';
import { setIssueHistory } from '@/store/historyStore';
import VPage from '@/layout/page/VPage.vue';
import VArticleHeader from '@/layout/header/VArticleHeader.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VLinkItem from '@/atom/item/VLinkItem/VLinkItem.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import { getMathjax } from '@/presentation/helper/mathjax';

interface Props {
    id: string;
}

const props = defineProps<Props>();

const { data: issue, getData: getIssue } = useIssue({
    params: {
        id: props.id,
    },
});

const { data: tasks, getData: getTasksByIssue } = useTasksByIssue({
    params: {
        issueId: props.id,
    },
});

const tasksByType: ComputedRef<Record<string, Task[]> | void> = computed(() => {
    if (!tasks.value) {
        return;
    }

    return sortTasksByType(tasks.value);
});

onMounted(getMathjax);

setIssueHistory(props.id);
getTasksByIssue();
getIssue();
</script>

<template>
    <v-page>
        <v-loader :logs="['useIssue', 'useTasksByIssue']" />

        <template v-if="issue" #header>
            <v-article-header :id="props.id" type="issue" modifier="v-py-box-md">
                {{ issue.title }}
            </v-article-header>
        </template>

        <div v-if="issue">
            <h1 class="v-text-h2">{{ issue.issue_category }}</h1>

            <h2 class="v-mt-box-sm v-text-h4">{{ issue.issue_teaser_title }}</h2>

            <p class="v-mt-box-xl" v-html="issue.issue_teaser_content" />

            <hr class="v-mt-[3.3rem]" />

            <div class="v-mt-[1.8rem]">
                <div
                    v-for="(paragraph, index) in issue.issue_paragraphs"
                    :key="`${index}-issue-paragraph`"
                    v-html="paragraph"
                />
            </div>

            <div class="v-mt-box-md">
                <div
                    v-for="(paragraph_ext, index) in issue.issue_paragraphs_ext"
                    :key="`${index}-issue-paragraph_ext`"
                    v-html="paragraph_ext"
                />
            </div>
        </div>

        <div v-if="tasksByType" class="v-mt-section-md">
            <h2 class="v-text-h2">Aufgaben</h2>

            <div v-for="(sortedTasks, type) in tasksByType" :key="type">
                <h4 class="v-mt-box-xl v-text-h4">{{ type }}</h4>

                <div v-for="task in sortedTasks" :key="task.id">
                    <router-link :to="{ name: 'task-id', params: { id: task.id } }">
                        <v-link-item class="v-mt-[.5rem]">{{ task.title }}</v-link-item>
                    </router-link>
                </div>
            </div>
        </div>

        <v-button modifier="v-w-[12rem]">Vorheriger Artikel</v-button>

        <v-button modifier=" v-w-[12rem]" class="v-text">Nächster Artikel</v-button>
    </v-page>
</template>
