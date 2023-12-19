// Objects
const personInfo = {
  firstName: "Aniebiet",
  lastName: "Afia",
  role: "Backend Developer",
  stack: ["Nodejs", "Javascript", "Typescript", "Postgres", "Mongodb"],
  startYear: 2022,
};

let person: {
  firstName: string;
  lastName: string;
  role: string;
  stack: string[];
  startYear: number;
};

//? A function that prints info about person to stdout
function printPerson(person: {
  firstName: string;
  lastName: string;
  role: string;
  stack: string[];
  startYear: number;
  age?: number;
}) {
  let output = `${person.firstName} ${person.lastName} is a ${person.role}.`;
  if (typeof person.age === "number")
    output += ` He is ${person.age} years old.`;
  console.log(output);
}

printPerson(personInfo);

// Excess Property Checking
const person2 = {
  firstName: "James",
  lastName: "Johnson",
  role: "Data Scientist",
  stack: ["Python"],
  startYear: 2022,
  race: "African",
};
printPerson(person2);

// Index Signatures
// const phones = {
//   home: { country: "+234", area: "806", number: "758-1927" },
//   work: { country: "+234", area: "802", number: "787-2415" },
//   fax: { country: "+234", area: "809", number: "819-4719" },
// };

const phones: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {
  home: { country: "+234", area: "806", number: "758-1927" },
  work: { country: "+234", area: "802", number: "787-2415" },
  fax: { country: "+234", area: "809", number: "819-4719" },
};
phones.home1;

// Array Types
const frontend: string[] = ["vue", "js", "react", "angular"];
const backend: Array<string> = ["go", "nodejs", "ts", "python", "ruby"];

const nobelAwards = [
  {
    category: "Peace",
    year: 2017,
    winner: "Barack Obama",
  },
  {
    category: "Literature",
    year: 2010,
    winner: "Wole Soyinka",
  },
  {
    category: "Science",
    year: 2023,
    winner: "TBD",
  },
];
nobelAwards.push({ category: "1", year: 2, winner: "3" });

// Tuples

let car: [number, string, string] = [2002, "Toyota", "Corolla"];
const [year, make, model] = car; // Destructuring
// car = ['Chevrolet', 2023, 'Highlander'] // Wrong convention
// car = [2023, 'Toyota', 'Corolla', 'extra'] // Too many elements

// `readonly` tuples
const numPair: [number, number] = [4, 5];
// const numTriplet: [number, number, number] = [7]

numPair.length;
numPair.push(6);
console.log(numPair);
