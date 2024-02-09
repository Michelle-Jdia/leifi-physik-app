import type { Topic } from '@/data/type/app/topic';
import type { SliderItem } from '@/molecule/slider/VTopicBoxSlider/VTopicBoxSlider.vue';
import { RouteName } from '@/connection/router/routeName';

export function createTopicSlider(topic: Topic): SliderItem {
    return {
        img: {
            src: topic.image?.url || '',
            alt: topic.image?.alt || '',
        },
        title: topic.name,
        link: {
            name: RouteName.TOPIC_ID,
            params: {
                id: topic.id,
            },
        },
    };
}
