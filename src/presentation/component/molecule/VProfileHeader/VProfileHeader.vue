<script setup lang="ts">
import type { ClassValue } from 'clsx';
import { chevronForwardOutline } from 'ionicons/icons';
import { $t } from '@/application/lang/de';
import { cn } from '@/presentation/helper/style';
import VAvatar from '@/atom/avatar/VAvatar/VAvatar.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

interface Props {
    modifier?: ClassValue;
}

defineProps<Props>();
</script>

<template>
    <div :class="cn('profile-header v-flex v-items-center', modifier)">
        <v-avatar data-testid="avatar-component" />

        <div class="v-ml-box-md v-mr-1">
            <h3 class="v-h3"><slot /></h3>

            <p class="v-h4 v-mt-1 v-font-fflight v-text-ty-helper">{{ $t.profile.showProfile }}</p>
        </div>

        <v-icon :icon="chevronForwardOutline" modifier="v-ml-auto" />
    </div>
</template>
