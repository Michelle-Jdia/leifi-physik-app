<script setup lang="ts">
import type { Issue } from '@/data/type/app/issue';
import { onIonViewWillEnter, IonIcon } from '@ionic/vue';
import { bookmarkOutline } from 'ionicons/icons';
import { createReactiveData } from '@/connection/helper/fetcher';
import { useIssue } from '@/store/issueStore';
import { setFavoriteIssue, useFavoriteIssues } from '@/store/favoriteStore';
import VPage from '@/layout/page/VPage.vue';
import VFavoriteHeader from '@/layout/header/VFavoriteHeader.vue';
import VArticleInfoSlide from '@/molecule/slide/VArticleInfoSlide/VArticleInfoSlide.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';

const { data: favorites, getData: getFavoriteIssues } = useFavoriteIssues();

const { data: favoriteItems, getData: buildFavorites } = createReactiveData<never, Issue[] | void>(
    async () => {
        await getFavoriteIssues();

        if (!favorites.value) {
            return [];
        }

        const promises = favorites.value.map((issueId) => {
            return useIssue({
                params: {
                    id: issueId,
                },
            }).getData();
        });

        const responses = await Promise.all(promises);

        return responses.reduce((issueSlide: Issue[], response) => {
            if (response) {
                issueSlide.push(response);
            }

            return issueSlide;
        }, []);
    },
)();

function getBorderClasses(index: number): string {
    if (!index) {
        return 'v-border-b v-border-t';
    }

    return 'v-border-b';
}

async function updateFavorite(id: string, closeSlide: () => void): Promise<void> {
    await setFavoriteIssue(id);
    getFavoriteIssues();
    closeSlide();
}

// @TODO: how to show favorite tasks??
onIonViewWillEnter(buildFavorites);
</script>

<template>
    <v-page modifier="v-px-0 md:v-px-0">
        <template #header>
            <v-favorite-header>Favoriten</v-favorite-header>
        </template>

        <v-loader :logs="['useIssue', 'useTopic', 'useBranch']" />

        <template v-if="favoriteItems && favoriteItems.length">
            <div v-for="(favoriteItem, index) in favoriteItems" :key="favoriteItem.id">
                <router-link
                    v-if="favoriteItem"
                    :to="{ name: 'issue-id', params: { id: favoriteItem.id } }"
                >
                    <v-article-info-slide
                        :id="favoriteItem.id"
                        :title="favoriteItem.title"
                        :sub-title="favoriteItem.issue_category"
                        :branch="{ title: 'test', color: 'ci_yellow_80' }"
                        :modifier="`${getBorderClasses(index)} v-border-gray-50`"
                        :is-favorite="favorites?.includes(favoriteItem.id)"
                        @on-favorite="updateFavorite"
                    />
                </router-link>
            </div>
        </template>

        <template v-else>
            <h3 class="v-text-h v-p-box">
                Wusstest Du es schon? Hier kannst Du Inhalte auf einer Favoriten-Liste ablegen.
                Klicke dazu einfach auf das <ion-icon :icon="bookmarkOutline" /> symbol dort wo du
                es in der app siehst.
            </h3>
        </template>
    </v-page>
</template>
