import { expect, test, describe } from 'vitest'
import { calculateResultFromFile } from './2.ts'
import { Deno } from '@deno/shim-deno'

describe('calculateResultFromFile', () => {
  const testFiles = {
    example: './day1/example_test.txt',
  }

  test('should calculate correct result for example data', () => {
    const content = `3 4
    4 3
    2 5
    1 3
    3 9
    3 3`
    Deno.writeTextFileSync(testFiles.example, content)
    expect(calculateResultFromFile(testFiles.example)).toBe(31)
    Deno.removeSync(testFiles.example);

  })
})
