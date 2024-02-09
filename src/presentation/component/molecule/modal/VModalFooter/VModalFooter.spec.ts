import { describe } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import { branch } from '@/presentation/static/branch';
import VModalFooter from '@/molecule/modal/VModalFooter/VModalFooter.vue';

describe('VModalFooter', () => {
    const options = {
        slots: {
            default: branch.title,
        },
    };

    testSnapshot(VModalFooter, options);
});
