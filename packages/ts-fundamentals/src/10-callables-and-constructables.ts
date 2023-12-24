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

function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000);
}

const valuees: number[] = [];
// invokeInFourSeconds(() => valuees.push(4));
invokeInFiveSeconds(() => valuees.push(4));

// Constructables
interface DateConstructor {
  new (value: number): Date;
}
let MyDateConstructor: DateConstructor = Date;
const date = new MyDateConstructor(1697923072611);

// Function Overloads
type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageEvent) => void;

function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}

// `this` types
function myClickHandler(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}
// myClickHandler(new Event("click"));
