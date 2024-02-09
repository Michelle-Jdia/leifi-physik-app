<script setup lang="ts">
import { $t } from '@/application/lang/de';
import { navigateToCollectionById, searchCollectionByTitle } from '@/store/collectionStore';
import VInputButton from '@/molecule/form/VInputButton/VInputButton.vue';

const emit = defineEmits<{
    (e: 'onSubmit'): void;
}>();

async function routeToCollectionAndEmit(title: string): Promise<void> {
    const collection = await searchCollectionByTitle(title);

    if (collection) {
        emit('onSubmit');

        return navigateToCollectionById(collection.id);
    }
}
</script>

<template>
    <v-input-button
        icon="icon/collection-subscribe.svg"
        :button-text="$t.collection.searchButtonText"
        :placeholder="$t.collection.searchInputPlaceholder"
        @on-submit="({ value }) => routeToCollectionAndEmit(value)"
    />
</template>
