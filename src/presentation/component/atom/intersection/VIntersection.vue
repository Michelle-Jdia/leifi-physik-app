<script setup lang="ts">
// import type { Ref } from 'vue';
// import { onMounted, ref } from 'vue';

// export interface Props {
//     onIntersection?: (entry: IntersectionObserverEntry) => void;
//     onNoIntersection?: (entry: IntersectionObserverEntry) => void;
//     once?: boolean;
//     threshold?: number;
//     rootMargin?: string;
// }

// const props = withDefaults(defineProps<Props>(), {
//     once: true,
//     threshold: 0,
//     rootMargin: '120px',
// });

// const isInView = ref(false);
// const observer: Ref<IntersectionObserver> = ref({});
// const element: Ref<Element> = ref({});

// const callback = (entries: IntersectionObserverEntry[], observer: Ref<IntersectionObserver>) => {
//     entries.forEach((entry: IntersectionObserverEntry) => {
//         if (!entry.isIntersecting) {
//             props.onNoIntersection && props.onNoIntersection(entry);

//             return;
//         }

//         props.onIntersection && props.onIntersection(entry);

//         isInView.value = true;

//         props.once && observer.unobserve(element.value);
//     });
// };

// onMounted(() => {
//     observer.value = new IntersectionObserver(callback, {
//         rootMargin: props.rootMargin,
//         threshold: props.threshold,
//     });

//     observer.value.observe(element.value);

//     return () => {
//         observer.value.unobserve(element.value);
//     };
// });
</script>

<template>
    <div ref="element" class="intersection">
        <!-- <slot v-if="isInView" ref="element" :bind="observer" /> -->

        <!-- <span>{{ isInView }}</span> -->
    </div>
</template>
