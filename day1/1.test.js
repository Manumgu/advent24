import { expect, test, describe } from 'vitest';
import { calculateResultFromFile } from './1.ts';
import { Deno } from '@deno/shim-deno';

describe('Day 1 Solution', () => {
  test('should calculate correct difference sum of 11', () => {
    const testInput = `
    3 4
    4 3
    2 5
    1 3
    3 9
    3 3`;
    
    Deno.writeTextFileSync('./test-input', testInput);
    const result = calculateResultFromFile('./test-input');
    expect(result).toBe(11);
    Deno.removeSync('./test-input');
  });

  test('should handle empty input', () => {
    Deno.writeTextFileSync('./test-input', '');
    expect(() => calculateResultFromFile('./test-input')).toThrow('Invalid input data')
    Deno.removeSync('./test-input');
  });
});
