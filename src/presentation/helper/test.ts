import type { ComponentMountingOptions } from '@vue/test-utils';
import type { Component } from 'vue';
import { config, mount } from '@vue/test-utils';
import { expect, test } from 'vitest';

beforeAll(() => {
    config.global.renderStubDefaultSlot = true;
});

afterAll(() => {
    config.global.renderStubDefaultSlot = false;
});

export const testSnapshot = (
    component: Component,
    options?: ComponentMountingOptions<object>,
): void => {
    test('snapshot', () => {
        const wrapper = mount(component, {
            shallow: true,
            ...options,
        });

        expect(wrapper.element).toMatchSnapshot();
    });
};
