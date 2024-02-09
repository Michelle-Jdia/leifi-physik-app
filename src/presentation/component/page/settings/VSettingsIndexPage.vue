<script setup lang="ts">
import { IonItem, IonLabel, IonList } from '@ionic/vue';
import { chevronForwardOutline } from 'ionicons/icons';
import { RouteName } from '@/connection/router/routeName';
import VHeader from '@/layout/header/VHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

const listItems = [
    {
        name: RouteName.LOCAL_STORAGE,
        label: 'Lokalen Daten',
    },
    {
        name: RouteName.DATA_PROTECTION,
        label: 'Datenschutz',
    },
    {
        name: RouteName.IMPRINT,
        label: 'Impressum',
    },
];
</script>

<template>
    <v-page modifier="v-">
        <template #header>
            <v-header>Konto & Einstellungen</v-header>
        </template>

        <ion-list class="v-p-0">
            <router-link
                v-for="(item, index) in listItems"
                :key="item.name"
                :to="{ name: item.name }"
            >
                <ion-item lines="none" :class="{ 'v-pt-box-xl': index !== 0 }">
                    <ion-label>
                        <span class="v-h3">{{ item.label }}</span>
                    </ion-label>

                    <v-icon
                        with-space-left
                        class="v-text-black"
                        size="sm"
                        :icon="chevronForwardOutline"
                    />
                </ion-item>
            </router-link>
        </ion-list>
    </v-page>
</template>

<style scoped lang="scss">
ion-item {
    --inner-padding-end: 0;
}
</style>
