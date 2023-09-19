<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { useRoute } from 'vue-router';
import { settings, settingsOutline } from 'ionicons/icons';
import { computed } from 'vue';
import { cn } from '@/presentation/helper/style';
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel } from '@ionic/vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Tab {
    title: string;
    icon: string;
    activeIcon?: string;
    route: string;
    name: string;
}

const route = useRoute();

// @todo move to navigation helper
const currentRoutePath: ComputedRef<string | undefined> = computed(() => {
    return route.path.split('/')[1];
});

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
    if (currentRoutePath.value === 'settings' && tab.name === 'settings') {
        return tab.activeIcon;
    }

    return tab.icon;
}

const tabs: Tab[] = [
    {
        title: 'Start',
        icon: 'icon/home.svg',
        route: '/home',
        name: 'home',
    },
    {
        title: 'Alle Inhalte',
        icon: 'icon/all-content.svg',
        route: '/branches',
        name: 'branches',
    },
    {
        title: 'Sammlungen',
        icon: 'icon/collection.svg',
        route: '/collection',
        name: 'collection',
    },
    {
        title: 'Favoriten',
        icon: 'icon/bookmark.svg',
        route: '/favorite',
        name: 'favorite',
    },
    {
        title: 'Einstellungen',
        icon: settingsOutline,
        activeIcon: settings,
        route: '/settings',
        name: 'settings',
    },
];
</script>

<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet />

            <ion-tab-bar slot="bottom" class="v-border-3 v-border-t v-border-t-gray-50">
                <ion-tab-button
                    v-for="tab in tabs"
                    :key="tab.name"
                    :tab="tab.name"
                    :href="tab.route"
                    :class="
                        cn(
                            'v-text-ty-primary v-border-t-2 v-border-t-transparent v-transition-colors',
                            currentTabStyle(tab.name),
                        )
                    "
                >
                    <div class="v-transition-colors">
                        <v-icon
                            size="sm"
                            :icon="getCurrentIcon(tab)"
                            :modifier="
                                cn(
                                    'v-fill-transparent v-text-h3 v-transition-colors',
                                    currentIconStyle(tab.name),
                                )
                            "
                        />

                        <ion-label class="v-block">{{ tab.title }}</ion-label>
                    </div>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>
