<script setup lang="ts">
import { IonButton } from '@ionic/vue';
import VHeader from '@/layout/header/VHeader.vue';
import VPage from '@/layout/page/VPage.vue';
</script>

<template>
    <v-page>
        <template #header>
            <v-header>App Start</v-header>
        </template>

        <ion-button :router-link="{ name: 'home-index' }">Home</ion-button>
    </v-page>
</template>
