<script setup lang="ts">
import { onIonViewWillEnter } from '@ionic/vue';
import { $t } from '@/application/translation';
import { getContextualRouteNameByType } from '@/connection/helper/navigation';
import { useHistory } from '@/connection/store/historyStore';
import { getBorder } from '@/presentation/helper/style';
import VHistoryHeader from '@/layout/header/VHistoryHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VFavoriteWrapper from '@/container/wrapper/VFavoriteWrapper/VFavoriteWrapper.vue';
import VArticleInfoSlide from '@/molecule/slide/VArticleInfoSlide/VArticleInfoSlide.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';

const { data: history, getData: getHistory } = useHistory();

onIonViewWillEnter(getHistory);
</script>

<template>
    <v-page modifier="v-px-0 md:v-px-0">
        <template #header>
            <v-history-header>{{ $t.history.title }}</v-history-header>
        </template>

        <v-loader :logs="['useIssue', 'useTopic', 'useBranch']" />

        <template v-if="history && history.length">
            <div v-for="(historyItem, index) in history" :key="historyItem.id">
                <router-link
                    :to="{
                        name: getContextualRouteNameByType(historyItem.type),
                        params: { id: historyItem.id },
                    }"
                    :class="`v-block ${getBorder(index)} v-border-gray-50`"
                >
                    <v-favorite-wrapper :id="historyItem.id" :type="historyItem.type">
                        <template
                            #default="{ title, subtitle, branch, handleFavorite, isFavorite }"
                        >
                            <v-article-info-slide
                                v-if="title && branch"
                                :id="historyItem.id"
                                :type="historyItem.type"
                                :title="title"
                                :subtitle="subtitle"
                                :branch="branch"
                                :is-favorite="isFavorite"
                                @on-favorite="handleFavorite"
                            />
                        </template>
                    </v-favorite-wrapper>
                </router-link>
            </div>
        </template>

        <h3 v-else class="v-text-h v-p-box">History page is empty</h3>
    </v-page>
</template>
