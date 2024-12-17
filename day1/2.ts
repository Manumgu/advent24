const [numbersMap, ocurrencesMap] = readProblemData ('./input');
console.log(calcResult(numbersMap, ocurrencesMap));

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


function calcResult (numbersMap: Map<number, number>, ocurrencesMap: Map<number, number>): number {
  let result = 0;
  numbersMap.forEach((value, key) => {
    result += key * (ocurrencesMap.get(key) || 0) * value;
  })
  return result;
}
