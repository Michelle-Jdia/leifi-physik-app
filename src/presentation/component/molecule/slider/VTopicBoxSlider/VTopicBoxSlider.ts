import { branch } from '@/presentation/static/branch';
import { link } from '@/presentation/static/link';
import { topic } from '@/presentation/static/topic';

export const topicBoxSliderProps = {
    branchImg: branch.img,
    link: link,
    color: branch.color,
    sliderItem: {
        title: topic.title,
        img: topic.img,
        link: link,
    },
};
