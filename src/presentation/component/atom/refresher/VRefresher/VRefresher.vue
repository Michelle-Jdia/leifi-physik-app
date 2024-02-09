<script setup lang="ts">
import { IonRefresher, IonRefresherContent } from '@ionic/vue';
</script>

<template>
    <ion-refresher slot="fixed" v-bind="$attrs">
        <ion-refresher-content />
    </ion-refresher>
</template>
