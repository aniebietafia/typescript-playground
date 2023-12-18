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