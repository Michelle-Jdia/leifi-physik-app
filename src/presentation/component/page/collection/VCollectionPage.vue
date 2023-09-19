<script setup lang="ts">
import { getCollection } from '@/store/collectionStore';
import VCollectionHeader from '@/layout/header/VCollectionHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';

export interface Props {
    id: string;
}
const props = defineProps<Props>();

const { data: collection, getData: getCollectionData } = getCollection({
    params: {
        id: props.id,
    },
});
getCollectionData();
</script>

<template>
    <v-page>
        <v-loader :logs="['getCollection']" />

        <template v-if="collection" #header>
            <v-collection-header
                >{{ collection.private_title }} <br />
                {{ collection.title }}</v-collection-header
            >
        </template>

        <div v-if="collection">
            <h1>Items</h1>

            <div v-for="(item, index) in collection.items" :key="index">
                <div v-html="item" />
            </div>

            <pre>{{ collection }}</pre>
        </div>
    </v-page>
</template>
