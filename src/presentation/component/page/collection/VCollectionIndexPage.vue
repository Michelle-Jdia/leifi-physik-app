<script setup lang="ts">
import { getCollections } from '@/store/collectionStore';
import VCollectionHeader from '@/layout/header/VCollectionHeader.vue';
import VPage from '@/layout/page/VPage.vue';
import VCollectionItem from '@/molecule/item/VCollectionItem/VCollectionItem.vue';
import VLoader from '@/atom/loader/VLoader/VLoader.vue';

const { data: collections, getData: getCollectionData } = getCollections();
getCollectionData();
</script>

<template>
    <v-page>
        <template #header>
            <v-collection-header>Sammlungen</v-collection-header>
        </template>

        <v-loader :logs="['getCollections']" />

        <div v-if="collections">
            <div v-for="collection in collections" :key="collection.id" class="v-mt-box">
                <router-link
                    :to="{
                        name: 'collection-id',
                        params: { id: collection.id },
                    }"
                >
                    <v-collection-item :title="collection.private_title" />
                </router-link>
            </div>
        </div>
    </v-page>
</template>
