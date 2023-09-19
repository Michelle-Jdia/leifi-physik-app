<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { cn } from '@/presentation/helper/style';
import { IonSearchbar } from '@ionic/vue';
import { search } from 'ionicons/icons';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <ion-searchbar :class="cn('search-bar v-bg-gray-20', modifier)" :search-icon="search" />
</template>
