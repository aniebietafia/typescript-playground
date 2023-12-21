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
