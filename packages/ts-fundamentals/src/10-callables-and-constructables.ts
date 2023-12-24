// Callables

interface TwoNumberCalculation {
  (x: number, y: number): number;
}

type TwoNumberCalc = (x: number, y: number) => number;

const add: TwoNumberCalculation = (a, b) => a + b;
const subtract: TwoNumberCalc = (x, y) => x - y;

// void
function printFormattedJSON(obj: string[]) {
  console.log(JSON.stringify(obj, null, " "));
}
const xx = printFormattedJSON(["hello", "world"]);
