<script setup lang="ts">
import type { Collection } from '@/data/type/app/collection';
import type { Paragraph } from '@/data/type/app/field/Paragraph';
import type { Task } from '@/data/type/app/task';
import type { IonModal, RefresherCustomEvent } from '@ionic/vue';
import type { ComputedRef, Ref } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { computed, ref, watch } from 'vue';
import { $t } from '@/application/translation';
import {
    ContentType,
    isParagraphBoxExtended,
    isParagraphHeadline,
    isParagraphToc,
} from '@/data/type/helper/contentType';
import { useIssueTopicBranch } from '@/connection/helper/issue';
import { closeModal, openModal } from '@/connection/helper/modal';
import { getContextualRouteNameByType } from '@/connection/helper/navigation';
import { createRefresherHandler } from '@/connection/helper/refresher';
import { RouteName } from '@/connection/router/routeName';
import { useArticleState } from '@/state/articleState';
import { useIssueState } from '@/state/issueState';
import { findArticleInCollection } from '@/store/collectionStore';
import { addIssueToHistory } from '@/store/historyStore';
import { categorySingularMap, useIssueLive } from '@/store/issueStore';
import { sortTasksByType, useTasksByIssue, useTasksByIssueLive } from '@/store/taskStore';
import { handleLinksClick } from '@/presentation/helper/handleLink';
import { resizeBrowser } from '@/presentation/helper/swiffy';
import VArticleHeader from '@/layout/header/VArticleHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VInputButton from '@/molecule/form/VInputButton/VInputButton.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VCheckbox from '@/atom/checkbox/VCheckbox/VCheckbox.vue';
import VIssueParagraphWrapper from '@/atom/contentWrapper/VIssueParagraphWrapper.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import VLinkItem from '@/atom/item/VLinkItem/VLinkItem.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VModal from '@/atom/modal/VModal/VModal.vue';
import VBoxExtendedParagraph from '@/atom/paragraph/VBoxExtendedParagraph.vue';
import VRefresher from '@/atom/refresher/VRefresher/VRefresher.vue';
import VAnimationScript from '@/atom/script/VAnimationScript/VAnimationScript.vue';
import VBundle from '@/atom/script/VBundle/VBundle.vue';
import VH5p from '@/atom/script/VH5p/VH5p.vue';

interface Props {
    id: string;
}
type IonModalInstance = InstanceType<typeof IonModal>;

const props = defineProps<Props>();
const articleState = useArticleState();
const addToCollectionsModal: Ref<IonModalInstance | undefined> = ref();
const createCollectionModal: Ref<IonModalInstance | undefined> = ref();
const tempCollectionsToUpdate: Collection[] = [];
const isSwiffyReady = ref(false);
const rawHtmlLinksContainer = ref();
const { data: pageData, getData: getIssueTopicBranch } = useIssueTopicBranch(props.id);

const { data: tasks, getData: getTasksByIssue } = useTasksByIssue({
    params: {
        issueId: props.id,
    },
});

const { getData: getTasksByIssueLive } = useTasksByIssueLive({
    params: {
        issueId: props.id,
    },
});

const { getData: getIssueLive } = useIssueLive({
    params: {
        id: props.id,
    },
});

const issueState = useIssueState();

const tasksByType: ComputedRef<Record<string, Task[]> | void> = computed(() => {
    if (!tasks.value || !tasks.value.length) {
        return;
    }

    return sortTasksByType(tasks.value);
});

const categoryHeadline: ComputedRef<string> = computed(() => {
    const name = pageData.value?.issue.issue_category.name;

    if (!name) {
        return '';
    }

    return categorySingularMap.get(name) || name;
});

const refAnchors: Ref<HTMLHeadingElement[]> = ref([]);

const addRefAnchor = (index: number) => (anchor: any) => {
    // we need to use index here, otherwise the loops could spam multiple refs in the array
    refAnchors.value[index] = anchor;
};

function openCollectionModal(): void {
    articleState.getCollections();
    tempCollectionsToUpdate.length = 0;
    openModal(addToCollectionsModal.value);
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

function handleModalConfirmation(): void {
    if (!pageData.value || !pageData.value.issue) {
        return;
    }

    articleState.saveArticlesToCollections(pageData.value.issue, tempCollectionsToUpdate);
}

function handleCreateCollectionSubmit({ value }: { value: string }): void {
    if (!pageData.value || !pageData.value.issue || !value) {
        return;
    }

    articleState.createAndAddArticleToNewCollection(pageData.value.issue, value);
    closeModal(createCollectionModal.value);
    closeModal(addToCollectionsModal.value);
}

function scrollToElement(element: HTMLHeadingElement) {
    element.scrollIntoView({
        behavior: 'smooth',
    });
}

const refHeadlines: Ref<HTMLHeadingElement[]> = ref([]);

const filteredRefHeadlines: ComputedRef<HTMLHeadingElement[] | undefined> = computed(() => {
    return refHeadlines.value.filter((headline) => headline);
});

const addRefHeadlines = (index: number, paragraph: Paragraph) => (element: any) => {
    if (
        !element ||
        !element.children.length ||
        !element.children[0] ||
        !isParagraphHeadline(paragraph)
    ) {
        return;
    }

    /* add the branch color class directly to the element */
    element.children[0].classList.add(headlineParagraphStyle.value);
    refHeadlines.value[index] = element.children[0];
};

const headlineParagraphStyle: ComputedRef<string> = computed(() => {
    return pageData.value?.branch.color || '';
});

function setSwiffiyToReady() {
    isSwiffyReady.value = true;
}

addIssueToHistory(props.id);
getTasksByIssue();

async function handleRefresh(event: RefresherCustomEvent): Promise<void> {
    await createRefresherHandler({
        event: event,
        callback: async () => {
            await getIssueLive();
            await getTasksByIssueLive();
            await getIssueTopicBranch();
            await getTasksByIssue();
        },
    });
}

watch(rawHtmlLinksContainer, () => {
    if (!rawHtmlLinksContainer.value) {
        return;
    }

    handleLinksClick(rawHtmlLinksContainer.value);
});

onIonViewWillEnter(async () => {
    issueState.getPrevNextIssueIds(props.id);

    await getIssueTopicBranch();

    resizeBrowser();
});
</script>

<template>
    <v-page modifier="v-pt-0 md:v-pt-0">
        <template v-if="pageData">
            <v-bundle />

            <v-h5p />

            <v-animation-script :onload="setSwiffiyToReady" />
        </template>

        <v-loader :logs="['useIssue']" />

        <template #refresher>
            <v-refresher @ion-refresh="handleRefresh" />
        </template>

        <template #header>
            <v-article-header
                :id="id"
                :anchors="refAnchors"
                :type="ContentType.ISSUE"
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

                <template v-if="pageData && pageData.issue">
                    {{ pageData.issue.title }}
                </template>
            </v-article-header>
        </template>

        <template v-if="pageData?.issue">
            <h1 :ref="addRefAnchor(0)" class="v-pt-box-xl v-text-h2">
                {{ categoryHeadline }}
            </h1>

            <h2 v-if="pageData.issue.issue_teaser_title" class="v-mt-box-lg v-text-h4">
                {{ pageData.issue.issue_teaser_title }}
            </h2>

            <div
                v-if="pageData && pageData.issue.issue_teaser_content.trim().length"
                class="site v-mt-box-xl"
            >
                <p
                    ref="rawHtmlLinksContainer"
                    class="v-p"
                    v-html="pageData.issue.issue_teaser_content"
                />
            </div>

            <div
                v-if="isSwiffyReady"
                class="site v-mt-box-xl v-border-t v-border-t-gray-80 v-pt-box-xl"
            >
                <div
                    v-for="(paragraph, index) in pageData?.issue.issue_paragraphs"
                    :key="`${index}-issue-paragraph`"
                >
                    <div v-if="!isParagraphBoxExtended(paragraph)">
                        <v-issue-paragraph-wrapper v-if="!isParagraphToc(paragraph)">
                            <div ref="rawHtmlLinksContainer" v-html="paragraph.rendered_string" />

                            <component
                                :is="attachment.tag"
                                v-for="(attachment, indexAttachment) in paragraph.attachments"
                                :key="`${indexAttachment}-issue-attachment`"
                                :type="attachment.type"
                            >
                                {{ attachment.content }}
                            </component>
                        </v-issue-paragraph-wrapper>

                        <div v-if="isParagraphToc(paragraph)">
                            <p
                                v-for="(headline, i) in filteredRefHeadlines"
                                :key="`${i}-issue-paragraph-headline`"
                                @click="scrollToElement(headline)"
                            >
                                <i class="fa-solid fa-chevron-right v-mr-2" />
                                {{ headline.innerText }}
                            </p>
                        </div>
                    </div>

                    <v-issue-paragraph-wrapper v-if="isParagraphBoxExtended(paragraph)">
                        <v-box-extended-paragraph :content="paragraph" />
                    </v-issue-paragraph-wrapper>
                </div>
            </div>

            <div
                v-if="isSwiffyReady && pageData?.issue.issue_paragraphs_ext.length"
                class="site v-mt-box-md"
            >
                <div
                    v-for="(paragraph_ext, index) in pageData?.issue.issue_paragraphs_ext"
                    :key="`${index}-issue-paragraph_ext`"
                >
                    <v-issue-paragraph-wrapper v-if="!isParagraphBoxExtended(paragraph_ext)">
                        <div
                            :ref="addRefHeadlines(index, paragraph_ext)"
                            class="v-overflow-scroll"
                            v-html="paragraph_ext.rendered_string"
                        />
                    </v-issue-paragraph-wrapper>

                    <v-issue-paragraph-wrapper v-if="isParagraphBoxExtended(paragraph_ext)">
                        <v-box-extended-paragraph :content="paragraph_ext" />
                    </v-issue-paragraph-wrapper>
                </div>
            </div>
        </template>

        <v-loader is-relative :logs="['useTasksByIssue']" />

        <div v-if="tasksByType" class="v-mt-section-md">
            <h2 :ref="addRefAnchor(1)" class="v-h2 v-pt-box-xl">
                {{ $t.issue.taskSectionHeadline }}
            </h2>

            <div v-for="(sortedTasks, type) in tasksByType" :key="type">
                <h3 class="v-h4 v-mt-box-xl">{{ type }}</h3>

                <div v-for="task in sortedTasks" :key="task.id" class="v-mt-box-sm">
                    <router-link
                        :to="{
                            name: getContextualRouteNameByType(task.type),
                            params: { id: task.id },
                        }"
                    >
                        <v-link-item :level="task.level.color">{{ task.title }}</v-link-item>
                    </router-link>
                </div>
            </div>
        </div>

        <div v-if="pageData?.issue" class="v-mt-section v-flex">
            <v-loader class="v-w-full" is-relative :logs="['usePrevIssue', 'useNextIssue']" />

            <v-button
                v-if="issueState.prevIssueId"
                modifier="v-capitalize v-w-full"
                :router-link="{
                    name: getContextualRouteNameByType(ContentType.ISSUE),
                    params: { id: issueState.prevIssueId },
                }"
            >
                {{ $t.issue.buttonPrevIssue }}
            </v-button>

            <v-button
                v-if="issueState.nextIssueId"
                modifier="v-capitalize v-w-full"
                :router-link="{
                    name: getContextualRouteNameByType(ContentType.ISSUE),
                    params: { id: issueState.nextIssueId },
                }"
            >
                {{ $t.issue.buttonNextIssue }}
            </v-button>
        </div>

        <v-modal ref="addToCollectionsModal" with-save @on-confirm="handleModalConfirmation">
            <template #title>{{ $t.collection.addCollection }}</template>

            <v-button modifier="v-w-full" @click="openModal(createCollectionModal)">
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
                        :disabled="findArticleInCollection(collection, props.id, ContentType.ISSUE)"
                        :checked="findArticleInCollection(collection, props.id, ContentType.ISSUE)"
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
