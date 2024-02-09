import { render } from '@testing-library/vue';
import { describe, expect } from 'vitest';
import { breakpoints } from '@/presentation/helper/breakpoint';
import { testSnapshot } from '@/presentation/helper/test';
import VAvatar from '@/atom/avatar/VAvatar/VAvatar.vue';

describe('VAvatar', () => {
    const originalInnerWidth = global.innerWidth;

    const setInnerWidth = (value: number) => {
        global.innerWidth = value;
    };

    afterEach(() => {
        setInnerWidth(originalInnerWidth);
    });

    const options = {
        props: {
            img: {
                src: 'icon/arrow-left.svg',
                alt: 'avatar',
            },
        },
    };

    it('renders an avatar with default image source on mobile screens', () => {
        setInnerWidth(breakpoints.mobile - 1);
        const { getByAltText } = render(VAvatar);
        const imgElement = getByAltText('avatar');
        expect(imgElement.getAttribute('src')).toBe('icon/arrow-left.svg');
    });

    it('renders an avatar with provided image source', () => {
        const { getByAltText } = render(VAvatar, {
            ...options,
        });

        const imgElement = getByAltText('avatar');

        expect(imgElement.getAttribute('src')).toBe('icon/arrow-left.svg');
        expect(imgElement.getAttribute('alt')).toBe('avatar');
    });

    it('renders an avatar with default image source on wider screens', () => {
        const { getByAltText } = render(VAvatar);
        const imgElement = getByAltText('avatar');
        expect(imgElement.getAttribute('src')).toBe('icon/arrow-right.svg');
    });

    testSnapshot(VAvatar, options);
});
