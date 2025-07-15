function Car(make, model) {
  this.make = make;
  this.model = model;
}

let MyCar = new Car("toyoto", "safari");
console.log(MyCar);

function Tea(type) {
  this.type = type;

  this.describe = function () {
    return `this is your tea ${this.type}`;
  };
}

let lemonTea = new Tea("oolong tea");
console.log(lemonTea.describe());

function Animal(Species) {
  this.Species = Species;
}

Animal.prototype.sound = function () {
  return `${this.Species} make sound`;
};
let cat = new Animal("cat");
console.log(cat.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink is not allowed during office");
  }
  this.name = name;
}

let tea = new Drink("vine");
let coffee =  Drink("Cofee");
