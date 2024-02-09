<script setup lang="ts">
import type { ClassValue } from 'clsx';
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import { breakpoints as mediaBreakpoints } from '@/presentation/helper/breakpoint';
import { cn } from '@/presentation/helper/style';
import VAvatar from '@/atom/avatar/VAvatar/VAvatar.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();

const emit = defineEmits<{
    (e: 'onClick'): void;
}>();

const iconSrc: ComputedRef<string> = computed(() => {
    if (window.innerWidth > mediaBreakpoints.mobile) {
        return 'icon/camera-tablet.svg';
    }

    return 'icon/camera.svg';
});

function onIconClick() {
    emit('onClick');
}
</script>

<template>
    <div
        :class="
            cn(
                'profile-avatar v-relative v-flex v-items-center v-justify-center v-rounded-md v-bg-gray-20',
                modifier,
            )
        "
    >
        <v-avatar modifier="v-h-[15rem] v-w-[15rem]" />

        <v-icon
            class="v-absolute v-bottom-box-lg v-right-box-md"
            :src="iconSrc"
            @click="onIconClick"
        />
    </div>
</template>
