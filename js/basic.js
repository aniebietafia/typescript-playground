"use strict";
class Customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    announce() {
        return `Hello, my name is  ${this.name}. I am ${this.age} years old.`;
    }
}
// create a new instance
let firstCustomer = new Customer("Alice", 34);
let newMessage = firstCustomer.announce();
// change the text on the page
let webHeading = document.querySelector("h1");
webHeading.textContent = newMessage;
