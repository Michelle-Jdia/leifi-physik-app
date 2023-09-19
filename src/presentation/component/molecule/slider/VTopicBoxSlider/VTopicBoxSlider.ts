import { topic } from '@/presentation/static/topic';
import { branch } from '@/presentation/static/branch';
import { link } from '@/presentation/static/link';

export const topicBoxSliderProps = {
    branchImg: branch.img,
    link: link,
    sliderItem: {
        title: topic.title,
        img: topic.img,
        link: link,
    },
};
