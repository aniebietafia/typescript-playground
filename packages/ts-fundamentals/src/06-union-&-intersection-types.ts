//* Union types in Typescript

const humidity = 79; // literal types

// create types for two sets of numbers

// A set of numbers from 1 to 5
type OneThroughFive = 1 | 2 | 3 | 4 | 5;
let lowNumber: OneThroughFive = 3;
// lowNumber = 8

//? A set of even numbers from 1 to 9
type Evens = 2 | 4 | 6 | 8;
let evenNumber: Evens = 2;
// evenNumber = 5

//? A set of numbers from 1 to 5 OR a set of even numbers from 1 to 9
let evenOrLowNumber = 5 as Evens | OneThroughFive;
// let evenOrLowNumber: Evens | OneThroughFive = 5

//? Control flow sometimes results in union types
function flipCoin(): "heads" | "tails" {
  if (Math.random() > 0.5) return "heads";
  return "tails";
}
const outcome = flipCoin();

//? A more complicated example
const success = [
  "success",
  { name: "Aniebiet Afia", email: "aniebietafia@gmail.com" },
] as const;
const fail = ["error", new Error("Something went wrong!")] as const;

function maybeGetUserInfo() {
  if (outcome === "heads") {
    return success;
  } else {
    return fail;
  }
}
const outcome2 = maybeGetUserInfo();

//* Working with union types
//? Think critically: "AND" vs "OR", as it pertains to the contents of the set,
//? vs the assumptions we can make about the value
function printEven(even: Evens): void {}
function printLowNumber(lowNum: OneThroughFive): void {}
function printEvenNumbersUnder5(num: 2 | 4): void {}
function printNumber(num: number): void {}

let x = 5 as Evens | OneThroughFive;

evenOrLowNumber = 2;
evenOrLowNumber = 3;
evenOrLowNumber = 4;

// printEven(x)
// printLowNumber(x)
// printEvenNumbersUnder5(x)
printNumber(x);

//* Narrowing with type guards
const [first, second] = outcome2;
if (second instanceof Error) {
  second;
} else {
  second;
}

// Discriminated union
if (first === "error") {
  second;
} else {
  second;
}

// Intersection types
let evenAndLowNumbers: Evens & OneThroughFive;
// evenAndLowNumbers = 6
// evenAndLowNumbers = 3
evenAndLowNumbers = 4;
