<script setup lang="ts">
import { onMounted } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import type { Issue } from '@/data/type/app/issue';
import { createReactiveData } from '@/connection/helper/fetcher';
import { useTask } from '@/store/taskStore';
import { useIssue } from '@/store/issueStore';
import { getMathjax } from '@/presentation/helper/mathjax';
import VArticleHeader from '@/layout/header/VArticleHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VLinkItem from '@/atom/item/VLinkItem/VLinkItem.vue';
import VAccordion from '@/atom/accordion/VAccordion.vue';

interface Props {
    id: string;
}
const props = defineProps<Props>();

const { data: task, getData: getTask } = useTask({
    params: {
        id: props.id,
    },
});

const { data: issueData, getData: getIssueData } = createReactiveData<never, Issue | void>(
    async () => {
        await getTask();

        if (!task.value) {
            return;
        }

        const { data: issue, getData: getIssue } = useIssue({
            params: {
                id: task.value.referenced_issue[0], // @TODO: array of related issues?
            },
        });

        await getIssue();

        if (!issue.value) {
            return;
        }

        return issue.value;
    },
)();

getTask();
onIonViewWillEnter(getIssueData);
onMounted(getMathjax);
</script>

<template>
    <v-page>
        <v-loader :logs="['useTask']" />

        <template v-if="task" #header>
            <v-article-header :id="task.id" type="task">{{ task.title }}</v-article-header>
        </template>

        <div v-if="task">
            <h3 class="v-h3 v-my-box v-text-primary">{{ task.level }}</h3>

            <div
                v-for="(question, index) in task.question"
                :key="`${index}-task-question`"
                class="question"
                v-html="question"
            />

            <v-accordion modifier="v-my-box">
                <template #accordion-label>
                    <h3 class="!v-text-h3 v-text-primary v-underline">Answers | Lösung</h3>
                </template>

                <div
                    v-for="(answer, index) in task.answer"
                    :key="`${index}-task-answer`"
                    v-html="answer"
                />
            </v-accordion>

            <h3 class="v-h3 v-mt-box v-text-primary">Paragraph [H5P]</h3>

            <div class="v-mt-box" v-html="task.paragraphs" />

            <template v-if="issueData">
                <h3 class="v-h3 v-mt-box v-text-primary">Grundwissen</h3>

                <router-link :to="{ name: 'issue-id', params: { id: issueData.id } }">
                    <v-link-item class="v-mt-box">{{ issueData.title }}</v-link-item>
                </router-link>
            </template>
        </div>
    </v-page>
</template>
