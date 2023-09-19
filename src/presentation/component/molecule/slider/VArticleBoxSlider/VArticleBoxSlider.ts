import { link } from '@/presentation/static/link';
import { topic } from '@/presentation/static/topic';
import { branch } from '@/presentation/static/branch';

export const articleBoxSliderProps = {
    lastBox: {
        title: 'Zu deinen Favoriten',
        link,
    },
    sliderItem: {
        title: topic.title,
        subtitle: topic.subtitle,
        link,
        badge: {
            title: branch.title,
        },
    },
};
