<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import { $t } from '@/application/lang/de';
import VHeader from '@/layout/header/VHeader.vue';
import VButton from '@/atom/button/VButton/VButton.vue';
import VIcon from '@/atom/icon/VIcon/VIcon.vue';

/**
 * 3 possible states. Subscribe and MyCollection are mutually exclusive. Both can't be true at the same time, but they can be false at the same time (preview)
 * 1. Preview - subscribed false, myCollection false
 * 2. Subscribed - subscribed true, myCollection false
 * 3. My Collection - subscribed false, myCollection true
 */

interface Props {
    isMyCollection?: boolean;
    isSubscribed?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (e: 'onOpenHistory'): void;
    (e: 'onOpenEditModal'): void;
    (e: 'onToggleSubscribe'): void;
    (e: 'onCopyCollection'): void;
}>();

const subTitle: ComputedRef<string> = computed(() => {
    if (props.isMyCollection) {
        return $t.collection.subtitleMyCollection;
    }

    if (props.isSubscribed) {
        return $t.collection.subtitleSubscribed;
    }

    return $t.collection.subtitleUnSubscribed;
});

const subscribeIcon: ComputedRef<string> = computed(() => {
    if (props.isSubscribed) {
        return 'icon/collection-unsubscribe.svg';
    }

    return 'icon/collection-subscribe.svg';
});
</script>

<template>
    <v-header>
        <slot />

        <template v-if="$slots['sub-title']" #sub-title>
            {{ subTitle }} <slot name="sub-title" />
        </template>

        <template #actions>
            <v-button
                v-if="!isMyCollection"
                id="subscribeToggle"
                modifier="!v-ml-box"
                size="none"
                @click="emit('onToggleSubscribe')"
            >
                <!-- Subscribe toggle only if not MyCollection. Icon changes based on isSubscribed true/false -->
                <v-icon :src="subscribeIcon" />
            </v-button>

            <v-button
                v-if="isMyCollection"
                id="collections-edit-modal"
                size="none"
                @click="emit('onOpenEditModal')"
            >
                <v-icon src="icon/pen.svg" />
            </v-button>

            <v-button
                id="copy-collection"
                size="none"
                modifier="!v-ml-box"
                @click="emit('onCopyCollection')"
            >
                <v-icon src="icon/copy2.svg" />
            </v-button>
        </template>
    </v-header>
</template>
