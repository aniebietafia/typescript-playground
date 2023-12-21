// keyof
type DatePropertyNames = keyof Date;

type DateStringPropertyNames = DatePropertyNames & string;
type DateSymbolPropertyNames = DatePropertyNames & symbol;

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
