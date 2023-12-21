// Type Aliase
type Amount = {
  currency: string;
  value: number;
};

function printAmount(amount: Amount) {
  console.log(amount);

  const { currency, value } = amount;
  console.log(`${currency} ${value}`);
}

const donation = {
  currency: "USD",
  value: 30.0,
  description: "Donation to food bank",
};

printAmount(donation);

function flipCoin(): "heads" | "tails" {
  if (Math.random() > 0.5) return "heads";
  return "tails";
}

const success1 = [
  "success",
  { name: "Aniebiet Afia", email: "aniebietafia@gmail.com" },
] as const;
const fail1 = ["error", new Error("Something went wrong!")] as const;

function maybeGetUserInfo():
  | readonly ["error", Error]
  | readonly ["success", { name: string; email: string }] {
  if (flipCoin() === "heads") {
    return success;
  } else {
    return fail;
  }
}

// Model the return type as a type aliase
type UserInfoOutcomeError = readonly ["error", Error];
type UserInfoOutcomeSuccess = readonly [
  "success",
  { name: string; email: string }
];

type UserInfoOutcome = UserInfoOutcomeError | UserInfoOutcomeSuccess;

// Interface
interface Amount2 {
  currency: string;
  value: number;
}

function printAmount2(amount: Amount2) {
  amount;
}

// Inheritance in interface
function consumeFood(arg: string) {}

class AnimalThatEats {
  eat(food: string) {
    consumeFood(food);
  }
}

class Cat extends AnimalThatEats {
  meow() {
    return "meow";
  }
}
const c = new Cat();
c.eat("The cat is eating");
c.meow();
