<script setup lang="ts">
import type { Collection } from '@/data/type/app/collection';
import type { Issue } from '@/data/type/app/issue';
import type { RefresherCustomEvent } from '@ionic/vue';
import type { Ref } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { ref, watch } from 'vue';
import { $t } from '@/application/translation';
import { ContentType } from '@/data/type/helper/contentType';
import { createReactiveData } from '@/connection/helper/fetcher';
import { getContextualRouteNameByType } from '@/connection/helper/navigation';
import { createRefresherHandler } from '@/connection/helper/refresher';
import { useTaskTopicBranch } from '@/connection/helper/task';
import { RouteName } from '@/connection/router/routeName';
import { useArticleState } from '@/state/articleState';
import { findArticleInCollection } from '@/store/collectionStore';
import { addTaskToHistory } from '@/store/historyStore';
import { useIssue } from '@/store/issueStore';
import { useTaskLive } from '@/store/taskStore';
import { handleLinksClick } from '@/presentation/helper/handleLink';
import { resizeBrowser } from '@/presentation/helper/swiffy';
import VArticleHeader from '@/layout/header/VArticleHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VInputButton from '@/molecule/form/VInputButton/VInputButton.vue';
import VAccordion from '@/atom/accordion/VAccordion.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VCheckbox from '@/atom/checkbox/VCheckbox/VCheckbox.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import VLinkItem from '@/atom/item/VLinkItem/VLinkItem.vue';
import VTextIconItem from '@/atom/item/VTextIconItem/VTextIconItem.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VModal from '@/atom/modal/VModal/VModal.vue';
import VRefresher from '@/atom/refresher/VRefresher/VRefresher.vue';
import VAnimationScript from '@/atom/script/VAnimationScript/VAnimationScript.vue';
import VBundle from '@/atom/script/VBundle/VBundle.vue';
import VH5p from '@/atom/script/VH5p/VH5p.vue';

interface Props {
    id: string;
}

const props = defineProps<Props>();
const articleState = useArticleState();
const addToCollectionsModal = ref();
const createCollectionModal = ref();
const tempCollectionsToUpdate: Collection[] = [];
const isSwiffyReady = ref(false);
const refAnchors: Ref<HTMLHeadingElement[]> = ref([]);
const isPageDataReady = ref(false);
const rawHtmlLinksContainer = ref();
const { data: pageData, getData: getTaskTopicBranch } = useTaskTopicBranch(props.id);

const { getData: getTaskLive } = useTaskLive({
    params: {
        id: props.id,
    },
});

const { data: issueData, getData: getIssueData } = createReactiveData<Issue | void>(async () => {
    await getTaskTopicBranch();

    isPageDataReady.value = true;

    if (
        !pageData.value ||
        !pageData.value.task.referenced_issue.length ||
        !pageData.value.task.referenced_issue[0]
    ) {
        return;
    }

    const { data: issue, getData: getIssue } = useIssue({
        params: {
            id: pageData.value.task.referenced_issue[0], // @TODO: array of related issues?
        },
    });

    await getIssue();

    if (!issue.value) {
        return;
    }

    return issue.value;
})();

function openCollectionModal(): void {
    articleState.getCollections();
    tempCollectionsToUpdate.length = 0;
    addToCollectionsModal.value?.$el.present();
}

function toggleArticleInTempList(event: CustomEvent, item: Collection): void {
    if (event.detail.checked === true) {
        tempCollectionsToUpdate.push(item);
    }

    if (event.detail.checked === false) {
        const filtered = tempCollectionsToUpdate.filter(
            (collection) => !(collection.id === item.id && collection.type === item.type),
        );

        tempCollectionsToUpdate.length = 0;
        tempCollectionsToUpdate.push(...filtered);
    }
}

function openCreateCollectionModal(): void {
    // addToCollectionsModal.value?.$el.dismiss();
    createCollectionModal.value?.$el.present();
}

function handleModalConfirmation(): void {
    if (!pageData.value || !pageData.value.task) {
        return;
    }

    articleState.saveArticlesToCollections(pageData.value.task, tempCollectionsToUpdate);
}

function handleCreateCollectionSubmit({ value }: { value: string }): void {
    if (!value || !pageData.value || !pageData.value.task) {
        return;
    }

    articleState.createAndAddArticleToNewCollection(pageData.value.task, value);
}

const addRefAnchor = (index: number) => (anchor: any) => {
    // we need to use index here, otherwise the loops could spam multiple refs in the array
    refAnchors.value[index] = anchor;
};

function setSwiffiyToReady() {
    isSwiffyReady.value = true;
}

async function handleRefresh(event: RefresherCustomEvent): Promise<void> {
    await createRefresherHandler({
        event: event,
        callback: async () => {
            await getTaskLive();
            await getIssueData();
        },
    });
}

addTaskToHistory(props.id);

onIonViewWillEnter(async () => {
    await getIssueData();

    resizeBrowser();
});

watch(isPageDataReady, () => {
    if (!isPageDataReady.value) {
        return;
    }

    handleLinksClick(rawHtmlLinksContainer.value);
});
</script>

<template>
    <v-page modifier="v-pt-0 md:v-pt-0">
        <template v-if="isPageDataReady">
            <v-bundle />

            <v-h5p />

            <v-animation-script :onload="setSwiffiyToReady" />
        </template>

        <v-loader :logs="['useTask']" />

        <template #refresher>
            <v-refresher @ion-refresh="handleRefresh" />
        </template>

        <template #header>
            <v-article-header
                :id="id"
                :anchors="refAnchors"
                :type="ContentType.TASK"
                @on-open-add-to-collection="openCollectionModal"
            >
                <template v-if="pageData && pageData.topic && pageData.branch" #pre-title>
                    <router-link
                        :to="{ name: RouteName.BRANCH_ID, params: { id: pageData.branch.id } }"
                    >
                        {{ pageData.branch.name }}
                    </router-link>
                    /
                    <router-link
                        :to="{ name: RouteName.TOPIC_ID, params: { id: pageData.topic.id } }"
                    >
                        {{ pageData.topic.name }}
                    </router-link>
                </template>

                {{ pageData?.task?.title }}
            </v-article-header>
        </template>

        <template v-if="pageData?.task">
            <h1 :ref="addRefAnchor(0)" class="v-pt-box-xl v-text-h2">{{ $t.task.headline }}</h1>

            <v-text-icon-item modifier="v-mt-box-lg" :level="pageData.task.level.color">
                <span class="v-text-copy v-font-bold">Schwierigkeitsgrad: </span>

                <span class="v-text-copy">
                    {{ pageData.task.level.name }}
                </span>
            </v-text-icon-item>

            <div class="v-p v-mt-2">
                <span class="v-text-copy v-font-bold"> Typ: </span>

                <span class="v-text-copy"> {{ pageData.task.task_type }} </span>
            </div>

            <div
                v-if="isSwiffyReady && pageData.task.question.length"
                class="site v-mt-box-xl v-border-t v-border-t-gray-80 v-pt-box-xl"
            >
                <div
                    v-for="(question, index) in pageData.task.question"
                    :key="`${index}-task-question`"
                >
                    <div ref="rawHtmlLinksContainer" v-html="question.rendered_string" />

                    <component
                        :is="attachment.tag"
                        v-for="(attachment, indexAttachment) in question.attachments"
                        :key="`${indexAttachment}-task-question-attachment`"
                        :type="attachment.type"
                    >
                        {{ attachment.content }}
                    </component>
                </div>
            </div>

            <div
                v-if="pageData.task.paragraphs"
                ref="rawHtmlLinksContainer"
                class="site v-mt-box"
                v-html="pageData.task.paragraphs"
            />

            <template v-if="pageData.task.answer.length">
                <h3 class="v-h3 v-mt-section v-text-primary">
                    {{ $t.task.solutionSection.headline }}
                </h3>

                <v-accordion>
                    <template #label>{{ $t.task.solutionSection.accordionLabel }}</template>

                    <div
                        v-for="(answer, index) in pageData.task.answer"
                        :key="`${index}-task-answer`"
                        ref="rawHtmlLinksContainer"
                        class="site"
                        v-html="answer"
                    />
                </v-accordion>
            </template>

            <template v-if="issueData">
                <h3 :ref="addRefAnchor(1)" class="v-h3 v-pt-box-xl v-text-primary">
                    {{ $t.task.relatedIssueTitle }}
                </h3>

                <router-link
                    class="v-mt-box v-block"
                    :to="{
                        name: getContextualRouteNameByType(issueData.type),
                        params: { id: issueData.id },
                    }"
                >
                    <v-link-item>{{ issueData.title }}</v-link-item>
                </router-link>
            </template>
        </template>

        <v-modal ref="addToCollectionsModal" with-save @on-confirm="handleModalConfirmation">
            <template #title>{{ $t.collection.addCollection }}</template>

            <v-button modifier="v-w-full" @click="openCreateCollectionModal">
                <v-icon src="icon/add-collection.svg" with-space-right />

                {{ $t.collection.createCollection }}
            </v-button>

            <template v-if="articleState.collections && articleState.collections.length">
                <div
                    v-for="collection in articleState.collections"
                    :key="collection.id"
                    class="v-mt-box-md v-flex v-items-center v-rounded v-border v-border-gray-20 v-bg-white v-p-box"
                >
                    <v-checkbox
                        :disabled="findArticleInCollection(collection, props.id, ContentType.TASK)"
                        :checked="findArticleInCollection(collection, props.id, ContentType.TASK)"
                        modifier="v-mr-auto v-w-full v-h3 v-font-bold"
                        @ion-change="(event) => toggleArticleInTempList(event, collection)"
                    >
                        {{ collection.private_title }}
                    </v-checkbox>
                </div>
            </template>
        </v-modal>

        <v-modal ref="createCollectionModal">
            <template #title>{{ $t.collection.addCollection }}</template>

            <v-input-button
                icon="icon/add-collection.svg"
                :button-text="$t.collection.create"
                :placeholder="$t.collection.collectionName"
                @on-submit="handleCreateCollectionSubmit"
            />
        </v-modal>
    </v-page>
</template>
