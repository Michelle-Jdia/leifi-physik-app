<script setup lang="ts">
import type { Tab } from '@/connection/helper/tab';
import { IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabs } from '@ionic/vue';
import { currentRoutePath } from '@/connection/helper/navigation';
import { tabs } from '@/connection/helper/tab';
import { cn } from '@/presentation/helper/style';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

function currentTabStyle(routeName: string): string {
    if (currentRoutePath.value !== routeName) {
        return '';
    }

    return 'v-text-primary v-border-t-primary';
}

function currentIconStyle(routeName: string): string {
    if (currentRoutePath.value !== routeName) {
        return '';
    }

    return 'v-fill-primary';
}

function getCurrentIcon(tab: Tab) {
    if (currentRoutePath.value === 'settings' && tab.path === 'settings') {
        return tab.activeIcon;
    }

    return tab.icon;
}
</script>

<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet />

            <ion-tab-bar
                slot="bottom"
                class="v-border-3 v-grid v-grid-cols-4 v-gap-box v-border-t v-border-t-gray-50"
            >
                <router-link
                    v-for="tab in tabs"
                    :key="tab.routeName"
                    :to="{
                        name: tab.routeName,
                    }"
                    replace
                    :class="
                        cn(
                            'v-text-h5  v-flex v-flex-col v-justify-center v-items-center v-text-ty-headline v-h-full v-border-t-2 v-border-t-transparent v-transition-colors',
                            currentTabStyle(tab.path),
                        )
                    "
                >
                    <v-icon
                        :icon="getCurrentIcon(tab)"
                        :modifier="
                            cn(
                                'v-fill-transparent v-text-h3 v-transition-colors',
                                currentIconStyle(tab.path),
                            )
                        "
                    />

                    <ion-label class="v-mt-box-xs">{{ tab.title }}</ion-label>
                </router-link>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>
