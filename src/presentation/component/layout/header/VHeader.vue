<script setup lang="ts">
// import type { ComputedRef } from 'vue';
import { IonBackButton, IonButtons, IonHeader, IonToolbar } from '@ionic/vue';
// import { computed } from 'vue';
import { isTabRoute } from '@/connection/helper/tab';

// import { usePageState } from '@/state/pageState';
// import { cn } from '@/presentation/helper/style';
// import VHeightTransition from '@/atom/transition/VHeightTransition/VHeightTransition.vue';

// const pageState = usePageState();
// const scrollAmountNeeded = 200;

// const isAboveScrollThreshhold: ComputedRef<boolean> = computed(() => {
//     return pageState.state.scrollTop > scrollAmountNeeded;
// });
// @todo fix the small header version
</script>

<template>
    <ion-header>
        <ion-toolbar color="primary">
            <div class="v-my-box v-flex v-items-center v-px-box-xl">
                <div class="v-mr-box v-w-full">
                    <!-- <v-height-transition
                        :is-visible="!isAboveScrollThreshhold"
                        modifier="v-flex v-items-center"
                    > -->
                    <div class="v-flex v-items-center">
                        <ion-buttons>
                            <ion-back-button
                                v-if="!isTabRoute"
                                icon="icon/arrow-left.svg"
                                class="v-mr-box"
                                text=""
                            />
                        </ion-buttons>

                        <h4 v-if="$slots['pre-title']" class="v-text-copy-xs v-text-ty-helper">
                            <slot name="pre-title" />
                        </h4>
                    </div>
                    <!-- </v-height-transition> -->

                    <!-- <h1
                        v-if="$slots.default"
                        :class="
                            cn('v-text-h3', {
                                'v-flex v-items-center': !isTabRoute && isAboveScrollThreshhold,
                            })
                        "
                    >
                        <ion-back-button
                            v-if="!isTabRoute && isAboveScrollThreshhold"
                            icon="icon/arrow-left.svg"
                            class="v-mr-box"
                            text=""
                        />

                        <slot />
                    </h1> -->

                    <h1 v-if="$slots.default" class="v-text-h3">
                        <slot />
                    </h1>

                    <h4
                        v-if="$slots['sub-title']"
                        class="v-mt-box-xs v-text-copy-xs v-text-ty-helper"
                    >
                        <slot name="sub-title" />
                    </h4>
                </div>

                <ion-buttons class="v-ml-auto">
                    <slot name="actions" />
                </ion-buttons>
            </div>

            <!-- <v-height-transition v-if="$slots.after" :is-visible="!isAboveScrollThreshhold">
                <div class="v-mb-box v-pl-box-xl">
                    <slot name="after" />
                </div>
            </v-height-transition> -->

            <template v-if="$slots.after">
                <div class="v-mb-box v-pl-box-xl">
                    <slot name="after" />
                </div>
            </template>
        </ion-toolbar>
    </ion-header>
</template>
