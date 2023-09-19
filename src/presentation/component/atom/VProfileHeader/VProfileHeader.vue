<script setup lang="ts">
import { IonImg } from '@ionic/vue';

interface Props {
    text?: string;
}

defineProps<Props>();
</script>

<template>
    <slot />

    <ion-img src="/image/component/profile-header.png" />
</template>
