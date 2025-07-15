let car = {
  toyota: "safari",
  model: "Camry",
  year: "2024",

  start: function () {
    return `${this.toyota} is release in = ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Atish", 21);
// console.log(john);

function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} make a sound`;
};

Array.prototype.count = function () {
  return ` You count this ${this} `;
};
let myArray = [1, 6, 3, 2];
console.log(myArray.count());
let myNewArray = [1, 6, 3, 2, 3, 53, 7];
// console.log(myNewArray.count());

class Vehical {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.make} you won ${this.model}`;
  }
}

class Car extends Vehical {
  driven() {
    return `${this.make} this is an inheritance example`;
  }
}

let myCar = new Car("Exoo", "jali");
// console.log(myCar.start());
// console.log(myCar.driven());

// encapsolution

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.getBalance());

// getter and setter

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary can't be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("invalid Salary");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice", 50000);
console.log(emp._salary);

emp.salary = 60000;
