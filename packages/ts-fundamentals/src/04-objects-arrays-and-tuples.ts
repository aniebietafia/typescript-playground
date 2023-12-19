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
