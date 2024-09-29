import { expect, test } from 'vitest';
import { transformNamesToFileNames } from './transformNamesToFileNames';

test('expect function to return transormed name if name contains space and initial', () => {
	expect(transformNamesToFileNames('Josh B.')).toBe('josh-b');
});

test('expect function to return transormed name if name is just first name', () => {
	expect(transformNamesToFileNames('Josh')).toBe('josh');
});
