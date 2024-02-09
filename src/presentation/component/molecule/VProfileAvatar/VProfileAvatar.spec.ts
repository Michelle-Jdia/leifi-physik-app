import { afterAll, beforeAll, describe } from 'vitest';
import { breakpoints } from '@/presentation/helper/breakpoint';
import { testSnapshot } from '@/presentation/helper/test';
import VProfileAvatar from '@/molecule/VProfileAvatar/VProfileAvatar.vue';

let originalInnerWidth: number;

beforeAll(() => {
    originalInnerWidth = global.innerWidth;
});

afterAll(() => {
    global.innerWidth = originalInnerWidth;
    global.dispatchEvent(new Event('resize'));
});

describe('VProfileAvatar', () => {
    const options = {
        global: {
            stubs: {
                ionIcon: true,
            },
        },
    };

    testSnapshot(VProfileAvatar, options);

    describe('with different window sizes', () => {
        testSnapshot(VProfileAvatar, {
            ...options,
            beforeTest: () => {
                global.innerWidth = breakpoints.mobile - 1;
                global.dispatchEvent(new Event('resize'));
            },
        });

        testSnapshot(VProfileAvatar, {
            ...options,
            beforeTest: () => {
                global.innerWidth = breakpoints.tablet;
                global.dispatchEvent(new Event('resize'));
            },
        });
    });

    testSnapshot(VProfileAvatar, options);
});
