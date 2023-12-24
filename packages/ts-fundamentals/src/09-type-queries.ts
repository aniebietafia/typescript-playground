// keyof
type DatePropertyNames = keyof Date;

type DateStringPropertyNames = DatePropertyNames & string;
type DateSymbolPropertyNames = DatePropertyNames & symbol;

const contact = {
  name: "Aniebiet",
  email: "aniebiet@example.com",
};
type Keys = keyof typeof contact;
// keyof = Object.keys() for types

// typeof
async function main() {
  const apiResponse = await Promise.all([
    fetch("https://example.com"),
    Promise.resolve("Titanium White"),
  ]);
  type ApiResponseType = typeof apiResponse;
}

// Indexed Access Types
interface Car {
  make: string;
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  };
}
let carColor: Car["color"];
let carRedColorComponent: Car["color"]["red"];
const carYearComponent: Car["year"] = 2010;
let carProperty: Car["year" | "color"];

const colors = {
  red: "red",
  green: "green",
  blue: "blue",
};
type Color = typeof colors;
type ColorKeys = keyof Color;
type ColorValues = Color[ColorKeys];

let value: any = 5;
let fixedString: string = (<number>value).toFixed(2); // type assertion

fixedString = (value as number).toFixed(3); // type assertion

const MyRule = CSSRule;
MyRule.STYLE_RULE;
const foo = new MyRule();

type MyRuleType = typeof MyRule;
