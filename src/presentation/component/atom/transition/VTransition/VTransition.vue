<script setup lang="ts">
type TransitionName = 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down';

interface Props {
    type?: TransitionName;
}

withDefaults(defineProps<Props>(), {
    type: 'slide-up',
});
</script>

<template>
    <Transition
        :enter-from-class="`v-enter-from-${type}`"
        :enter-active-class="`v-enter-active-${type}`"
        :enter-to-class="`v-enter-to-${type}`"
        :leave-from-class="`v-leave-from-${type}`"
        :leave-active-class="`v-leave-active-${type}`"
        :leave-to-class="`v-leave-to-${type}`"
    >
        <slot />
    </Transition>
</template>

<style scoped lang="scss">
$translate-x-default: 0.3rem;
$translate-y-default: 0.3rem;

.v-enter-active-slide-left,
.v-leave-active-slide-left,
.v-enter-active-slide-right,
.v-leave-active-slide-right,
.v-enter-active-slide-up,
.v-leave-active-slide-up,
.v-enter-active-slide-down,
.v-leave-active-slide-down {
    transition: all 0.3s ease;
    opacity: 0;
}

.v-enter-from-slide-left {
    transform: translateX($translate-x-default);
}

.v-enter-from-slide-right {
    transform: translateX(-$translate-x-default);
}

.v-enter-from-slide-up {
    transform: translateY($translate-y-default);
}

.v-enter-from-slide-down {
    transform: translateY(-$translate-y-default);
}

.v-enter-to-slide-right,
.v-enter-to-slide-left,
.v-enter-to-slide-up,
.v-enter-to-slide-down {
    transform: translate(0);
    opacity: 1;
}

.v-leave-to-slide-left {
    transform: translateX($translate-x-default);
}

.v-leave-to-slide-right {
    transform: translateX(-$translate-x-default);
}

.v-leave-to-slide-up {
    transform: translateY($translate-y-default);
}

.v-leave-to-slide-down {
    transform: translateY(-$translate-y-default);
}
</style>
