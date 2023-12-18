// Variable declarations & inference
let age = 32; //! inference

//age = true // type checking

const payday = 25; // literal type

age = payday;

let temperature = 19;
let humidity = 79 as const;

/* Implicit any and type annotations */
export const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;

let startTime = new Date();
let endTime: Date;

setTimeout(() => {
  //endTime = 0;
  endTime = new Date();
}, RANDOM_WAIT_TIME);

// Type Casting
let birthday = new Date("Nov 1, 1990");
let date1 = birthday;
let date2 = birthday as any;
let date3 = "oh no" as any as Date;

const grades: Set<number> = new Set();
grades.add(4);
grades.add(23);
grades.add(19);
grades.forEach((num) => {
  let output = num % 2 !== 0 ? "Odd" : "Even";
  console.log(num, ": ", output);
});

console.log(grades);
