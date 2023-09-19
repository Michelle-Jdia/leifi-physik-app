<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { useExampleStore } from '@/connection/state/exampleState';
import VHeader from '@/layout/header/VHeader.vue';

const exampleStore = useExampleStore();

exampleStore.updateFirstName('AAAA');
exampleStore.updateLastName('BBBB');
</script>

<template>
    <ion-page>
        <v-header> Example </v-header>

        <ion-content class="ion-padding">
            <div data-test-firstname class="text-xs">
                firstname: {{ exampleStore.state.firstName }}
            </div>

            <div data-test-lastname>lastname: {{ exampleStore.state.lastName }}</div>

            <div data-test-fullname>fullname: {{ exampleStore.fullName }}</div>
        </ion-content>
    </ion-page>
</template>
