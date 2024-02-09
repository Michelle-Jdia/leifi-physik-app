import { render } from '@testing-library/vue';
import { describe, test } from 'vitest';
import { testSnapshot } from '@/presentation/helper/test';
import VProfileHeader from '@/molecule/VProfileHeader/VProfileHeader.vue';

describe('VProfileHeader', () => {
    const options = {
        slot: {
            default: 'Profil anzeigen',
        },
        global: {
            stubs: {
                ionIcon: true,
            },
        },
    };

    test('renders correctly with default text, avatar, and slot', () => {
        const { getByText, getByTestId } = render(VProfileHeader, options);

        getByText('Profil anzeigen');

        const avatar = getByTestId('avatar-component');
        expect(avatar).toBeTruthy();

        getByText('Profil anzeigen');
    });

    test('renders correctly with custom slot text', () => {
        const { getByText } = render(VProfileHeader, {
            ...options,
            slots: {
                default: 'customSlotText',
            },
        });

        getByText('customSlotText');
    });

    testSnapshot(VProfileHeader, options);
});
