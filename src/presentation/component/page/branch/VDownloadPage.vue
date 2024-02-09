<script setup lang="ts">
import type { Collection } from '@/data/type/app/collection';
import type { RefresherCustomEvent } from '@ionic/vue';
import type { Ref } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { computed, ref, watch } from 'vue';
import { $t } from '@/application/translation';
import { ContentType } from '@/data/type/helper/contentType';
import { useDownloadTopicBranch } from '@/connection/helper/download';
import { createRefresherHandler } from '@/connection/helper/refresher';
import { RouteName } from '@/connection/router/routeName';
import { useArticleState } from '@/state/articleState';
import { findArticleInCollection } from '@/store/collectionStore';
import { useDownloadLive } from '@/store/downloadStore';
import { addDownloadToHistory } from '@/store/historyStore';
import { handleLinksClick } from '@/presentation/helper/handleLink';
import { resizeBrowser } from '@/presentation/helper/swiffy';
import VArticleHeader from '@/layout/header/VArticleHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VInputButton from '@/molecule/form/VInputButton/VInputButton.vue';
import VAccordion from '@/atom/accordion/VAccordion.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VCheckbox from '@/atom/checkbox/VCheckbox/VCheckbox.vue';
import VDownloadContentWrapper from '@/atom/contentWrapper/VDownloadContentWrapper.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';
import VModal from '@/atom/modal/VModal/VModal.vue';
import VRefresher from '@/atom/refresher/VRefresher/VRefresher.vue';
import VAnimationScript from '@/atom/script/VAnimationScript/VAnimationScript.vue';
import VBundle from '@/atom/script/VBundle/VBundle.vue';
import VH5p from '@/atom/script/VH5p/VH5p.vue';

interface Props {
    id: string;
}
interface DownloadFile {
    id: string;
    url: string;
    size: string;
}

const props = defineProps<Props>();
const isSwiffyReady: Ref<boolean> = ref(false);
const articleState = useArticleState();
const addToCollectionsModal = ref();
const createCollectionModal = ref();
const rawHtmlLinksContainer = ref();
const tempCollectionsToUpdate: Collection[] = [];
const { data: pageData, getData: getDownloadTopicBranch } = useDownloadTopicBranch(props.id);

const { getData: getDownloadLive } = useDownloadLive({
    params: {
        id: props.id,
    },
});

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

function handleModalConfirmation(): void {
    if (!pageData.value || !pageData.value.download) {
        return;
    }

    articleState.saveArticlesToCollections(pageData.value.download, tempCollectionsToUpdate);
}

function handleCreateCollectionSubmit({ value }: { value: string }): void {
    if (!pageData.value || !pageData.value.download || !value) {
        return;
    }

    articleState.createAndAddArticleToNewCollection(pageData.value.download, value);
}

function openCreateCollectionModal(): void {
    // addToCollectionsModal.value?.$el.dismiss();
    createCollectionModal.value?.$el.present();
}

function setSwiffiyToReady() {
    isSwiffyReady.value = true;
}

function getFileSizeInBites(size: number): string {
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const kb = 1024;
    let i = 0;

    do {
        size = size / kb;
        i++;
    } while (size >= kb);

    return `${size.toFixed(2)} ${sizes[i]}`;
}

const downloadedFiles = computed<DownloadFile[]>(() => {
    if (!pageData.value || !pageData.value.download) {
        return [];
    }

    return pageData.value.download.download_file.map((file) => ({
        id: file.id,
        size: `Größe: ${getFileSizeInBites(file.size)}`,
        url: file.url,
    }));
});

async function handleRefresh(event: RefresherCustomEvent): Promise<void> {
    await createRefresherHandler({
        event: event,
        callback: async () => {
            await getDownloadLive();
            await getDownloadTopicBranch();
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
    addDownloadToHistory(props.id);

    await getDownloadTopicBranch();

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

        <v-loader :logs="['useDownload']" />

        <template #refresher>
            <v-refresher @ion-refresh="handleRefresh" />
        </template>

        <template #header>
            <v-article-header
                :id="id"
                :type="ContentType.DOWNLOAD"
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

                <template v-if="pageData && pageData.download">
                    {{ pageData.download.title }}
                </template>
            </v-article-header>
        </template>

        <template v-if="pageData">
            <h1 class="v-pt-box-xl v-text-h2">{{ $t.download.headline }}</h1>

            <p class="v-p v-mt-box-lg">
                <span class="v-font-bold">Typ:</span>

                {{ pageData.download.download_type }}
            </p>

            <div
                v-if="isSwiffyReady"
                class="site v-mt-box-xl v-border-t v-border-t-gray-80 v-pt-box-xl"
            >
                <div v-html="pageData.download.download_description" />

                <div
                    v-if="pageData.download.animation_code?.rendered_string"
                    v-html="pageData.download.animation_code.rendered_string"
                />

                <template v-if="pageData.download.animation_code?.attachments">
                    <component
                        :is="attachment.tag"
                        v-for="(attachment, indexAttachment) in pageData.download.animation_code
                            .attachments"
                        :key="`${indexAttachment}-task-question-attachment`"
                        :type="attachment.type"
                    >
                        {{ attachment.content }}
                    </component>
                </template>
            </div>

            <div class="site">
                <template v-if="downloadedFiles.length">
                    <template v-for="file in downloadedFiles" :key="file.id">
                        <p class="v-p v-mt-box-lg">{{ file.size }}</p>

                        <a v-if="file.url" :href="file.url" target="_blank">
                            <v-button class="v-w-full" size="small" :is-rounded="false">{{
                                $t.download.fielDownloadButtonLabel
                            }}</v-button>
                        </a>
                    </template>
                </template>
            </div>

            <v-accordion v-if="pageData.download.download_didactic_info.trim().length">
                <template #label>{{ $t.download.accordionLabel }}:</template>

                <v-download-content-wrapper>
                    <div v-html="pageData.download.download_didactic_info" />
                </v-download-content-wrapper>
            </v-accordion>
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
                        :disabled="
                            findArticleInCollection(collection, props.id, ContentType.DOWNLOAD)
                        "
                        :checked="
                            findArticleInCollection(collection, props.id, ContentType.DOWNLOAD)
                        "
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
