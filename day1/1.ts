const problemData: [number[], number[]] = readProblemData ('./input');

const sortedProblemData = problemData.map((arrayOfNumbers) => {
    return arrayOfNumbers.sort((a,b) => a-b)
});

let result: number = 0;
sortedProblemData[0].forEach((number: number, index: number) => {
    result += Math.abs(number - sortedProblemData[1][index]);
})

console.log(result);

function readProblemData (filePath: string): [number[], number[]] {
  const problemData: [number[], number[]] = [[], []];

  const inputData = Deno.readTextFileSync(filePath);
  const lines = inputData.trim().split('\n');

  for (const line of lines) {
    const [first, second] = line.trim().split(/\s+/).map(Number);

    problemData[0].push(first);
    problemData[1].push(second);
  }
  return problemData;
}


