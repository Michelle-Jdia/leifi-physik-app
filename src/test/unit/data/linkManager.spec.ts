import { describe, expect, test } from 'vitest';
import { linkManager } from '@/data/helper/linkManager';

describe('testing the linkManager function', () => {
    test('linkManager should return the correct link', () => {
        expect(linkManager.getLink('__test')).toBe('https://test.com');
    });

    test('linkManager should return empty string if link is not found', () => {
        // @ts-ignore
        expect(linkManager.getLink('doesnt-exist')).toBe('');
    });
});
