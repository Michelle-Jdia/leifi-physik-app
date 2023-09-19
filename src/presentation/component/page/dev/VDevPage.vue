<script setup lang="ts">
import { IonButton } from '@ionic/vue';
import VHeader from '@/layout/header/VHeader.vue';
import VPage from '@/layout/page/VPage.vue';
</script>

<template>
    <v-page>
        <template #header>
            <v-header> Dev </v-header>
        </template>

        <ion-button :router-link="{ name: 'example' }">Example page</ion-button>

        <ion-button :router-link="{ name: 'datadump' }">Data Dump page</ion-button>
    </v-page>
</template>
