<script setup lang="ts">
import { IonReorderGroup } from '@ionic/vue';
import VArticleItem from '@/molecule/item/VArticleEditItem/VArticleEditItem.vue';

const handleReorder = (event: CustomEvent) => {
    event.detail.complete();
};
</script>

<template>
    <ion-reorder-group :disabled="false" @ion-item-reorder="handleReorder($event)">
        <v-article-item
            id="1"
            modifier="mb-box"
            title="Schall, Schallquellen und Schallempfänger"
            subtitle="Grundwissen"
            with-copy
        />

        <v-article-item
            id="2"
            modifier="mb-box"
            title="Messung der Schallgeschwindigkeit in Luft"
            subtitle="Grundwissen"
            with-copy
        />

        <v-article-item
            id="3"
            modifier="mb-box"
            title="Schwebung"
            subtitle="Grundwissen"
            with-copy
        />
    </ion-reorder-group>
</template>
