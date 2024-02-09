<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { IonContent, IonPage } from '@ionic/vue';
import { onMounted, ref } from 'vue';
import { usePageState } from '@/state/pageState';
import { cn } from '@/presentation/helper/style';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();

const ionPageRef = ref<typeof IonPage | null>(null);
const ionContentRef = ref<typeof IonContent | null>(null);
const pageState = usePageState();

function handleScroll(ev: CustomEvent) {
    pageState.setScrollTop(ev.detail.scrollTop);
}

onMounted(() => {
    if (ionPageRef.value) {
        pageState.setPageElement(ionPageRef.value.$el);
    }

    if (ionContentRef.value) {
        pageState.setContentElement(ionContentRef.value.$el);
    }

    pageState.setScrollTop(0);
});
</script>

<template>
    <ion-page ref="ionPageRef">
        <slot name="header" />

        <ion-content ref="ionContentRef" :scroll-events="true" @ion-scroll="handleScroll($event)">
            <slot name="refresher" />

            <main :class="cn('v-p-box-xl md:v-p-section v-max-w-content v-mx-auto', modifier)">
                <slot />
            </main>
        </ion-content>
    </ion-page>
</template>
