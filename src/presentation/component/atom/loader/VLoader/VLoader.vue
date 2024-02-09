<script setup lang="ts">
import { IonSpinner } from '@ionic/vue';
import { computed } from 'vue';
import { useLogState } from '@/connection/state/logState';
import { cn } from '@/presentation/helper/style';

const logStore = useLogState();

interface Props {
    logs: string[];
    isRelative?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    logs: () => [],
});

const loaderClasses =
    'v-pointer-events-none v-text-primary v-z-loader v-flex v-items-center v-justify-center';

const additionalClasses = props.isRelative
    ? 'v-relative'
    : 'v-fixed v-w-full v-h-full v-top-0 v-left-0';

const isLoading = computed(() => {
    return props.logs.find((log) => {
        return logStore.state.logs.includes(log);
    });
});
</script>

<template>
    <div v-if="isLoading" :class="cn(loaderClasses, additionalClasses)">
        <ion-spinner />
    </div>
</template>
