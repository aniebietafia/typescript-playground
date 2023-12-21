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

const arr = [1, 2, 3] as const;
