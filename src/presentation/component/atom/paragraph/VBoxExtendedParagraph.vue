<script setup lang="ts">
import type { ParagraphBoxExtended } from '@/data/type/app/field/paragraphBoxExtended';
import type { ComputedRef } from 'vue';
import { computed } from 'vue';

interface Props {
    content: ParagraphBoxExtended;
}
const props = defineProps<Props>();

const colorMap = new Map<string, string>([
    ['primary', 'danger'],
    ['grey', 'grey-dark'],
    ['secondary', 'secondary'],
]);

const branchColor: ComputedRef<string> = computed(() => {
    return colorMap.get(props.content.color) ?? '';
});
</script>

<template>
    <div :class="`topic_box box-${branchColor} my-3`">
        <h5 :class="`topic_box_header bg-${branchColor} text-white px-3 py-1 m-0`">
            {{ content.headline }}
        </h5>

        <div class="topic_box_body overflow-auto p-3">
            <div
                v-for="(paragraph, index) in content.content"
                :key="`${index}-box-extended-paragraph`"
            >
                <div v-html="paragraph.rendered_string" />

                <component
                    :is="attachment.tag"
                    v-for="(attachment, indexAttachment) in paragraph.attachments"
                    :key="`${indexAttachment}-issue-attachment`"
                    :type="attachment.type"
                >
                    {{ attachment.content }}
                </component>
            </div>
        </div>
    </div>
</template>
