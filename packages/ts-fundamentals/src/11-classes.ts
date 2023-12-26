// Classes

class Car {
  private static nextSerialNumber = 100;
  private static generateNextSerialNumber() {
    return this.nextSerialNumber++;
  }

  make: string;
  model: string;
  year: number;

  private _serialNumber = Car.generateNextSerialNumber();
  protected get serialNumber() {
    return this._serialNumber;
  }

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
// Car.generateNextSerialNumber()
