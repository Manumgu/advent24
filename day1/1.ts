import { Deno } from '@deno/shim-deno';

export function calculateResultFromFile(filePath: string): number {
  const problemData = readProblemData(filePath);
  return calcResult(problemData);
}

function readProblemData(filePath: string): [number[], number[]] {
  const problemData: [number[], number[]] = [[], []];

  const inputData = Deno.readTextFileSync(filePath);
  const lines = inputData.trim().split('\n');

  for (const line of lines) {
    const [first, second] = line.trim().split(/\s+/).map(Number);

    if (first === undefined || second === undefined) {
      throw new Error('Invalid input data');
    }
  
    problemData[0].push(first);
    problemData[1].push(second);
  }
  return problemData;
}

function calcResult(problemData: [number[], number[]]): number {
  const sortedProblemData = problemData.map((arrayOfNumbers) => {
    return arrayOfNumbers.sort((a,b) => a-b);
  });

  let result = 0;
  sortedProblemData[0].forEach((number: number, index: number) => {
    result += Math.abs(number - sortedProblemData[1][index]);
  });

  return result;
}

if (import.meta.main) {
  console.log(calculateResultFromFile('./input'));
}

