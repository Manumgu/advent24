import { Deno } from '@deno/shim-deno';

export function calculateResultFromFile(filePath: string): number {
  const [numbersMap, occurrencesMap] = readProblemData(filePath);
  return calcResult(numbersMap, occurrencesMap);
}

function readProblemData(filePath: string): [Map<number, number>, Map<number, number>] {
  const content = Deno.readTextFileSync(filePath);
  const lines = content.trim().split('\n');

  const numbersMap = new Map<number, number>();
  const occurrencesMap = new Map<number, number>();

  for (const line of lines) {
    const [number, occurrence] = line.trim().split(/\s+/).map(Number);

    numbersMap.set(number, (numbersMap.get(number) || 0) + 1);
    occurrencesMap.set(occurrence, (occurrencesMap.get(occurrence) || 0) + 1);
  }

  return [numbersMap, occurrencesMap];
}

function calcResult(numbersMap: Map<number, number>, occurrencesMap: Map<number, number>): number {
  let result = 0;
  numbersMap.forEach((value, key) => {
    result += key * (occurrencesMap.get(key) || 0) * value;
  })
  return result;
}

// Only run if this is the main module
if (import.meta.main) {
  console.log(calculateResultFromFile('./input'));
}