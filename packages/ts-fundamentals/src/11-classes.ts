// Classes

class Car {
  static nextSerialNumber = 100;
  static generateNextSerialNumber() {
    return this.nextSerialNumber++;
  }

  make: string;
  model: string;
  year: number;
  serialNumber = Car.generateNextSerialNumber();

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getLabel() {
    return `${this.make} ${this.model} ${this.year} - #${this.serialNumber}`;
  }
}

let sedan = new Car("Honda", "Accord", 2017);
