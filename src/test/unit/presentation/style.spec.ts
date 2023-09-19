import { describe, expect, test } from 'vitest';
import { cn } from '@/presentation/helper/style';

describe('testing the cn function', () => {
    test('cn should not remove unrelated classes', () => {
        expect(cn('v-relative v-opacity-0', 'v-hidden')).toBe('v-relative v-opacity-0 v-hidden');
        expect(cn('v-p-1', 'v-m-3')).toBe('v-p-1 v-m-3');
    });

    test('cn should remove related classes', () => {
        expect(cn('v-flex', 'v-block')).toBe('v-block');
        expect(cn('v-flex v-grid', 'v-top-0 v-p-0')).toBe('v-grid v-top-0 v-p-0');
    });

    test('cn should be able to detect our custom font-size classes remove the related classes', () => {
        expect(cn('v-text-h3 v-text-h5', 'v-text-h1')).toBe('v-text-h1');
        expect(cn('v-text-h4', 'v-text-h1')).toBe('v-text-h1');
        expect(cn('v-text-h4', 'v-text-sm')).toBe('v-text-sm');
        expect(cn('v-text-h2', 'v-text-h2')).toBe('v-text-h2');
        expect(cn('v-text-h1', 'v-text-h5-tablet')).toBe('v-text-h5-tablet');
        expect(cn('v-text-h1-tablet', 'v-text-copy')).toBe('v-text-copy');
    });

    test('cn should be able to detect our custom spacing classes and remove the related classes', () => {
        expect(cn('v-p-box', 'v-p-1')).toBe('v-p-1');
        expect(cn('v-p-1', 'v-p-box')).toBe('v-p-box');
        expect(cn('v-p-1', 'v-p-section-md')).toBe('v-p-section-md');
    });

    test('cn should be able to detect our custom border radius classes and remove the related classes', () => {
        expect(cn('v-rounded', 'v-rounded-md', 'v-rounded')).toBe('v-rounded');
        expect(cn('v-rounded-md', 'v-rounded-sm')).toBe('v-rounded-sm');
    });

    test('cn should be able to detect our custom colors classes and remove the related classes', () => {
        expect(cn('v-bg-pink', 'v-bg-blue-80')).toBe('v-bg-blue-80');
        expect(cn('v-bg-white', 'v-bg-yellow')).toBe('v-bg-yellow');
        expect(cn('v-text-white', 'v-text-black v-text-gray-20')).toBe('v-text-gray-20');
    });
});
