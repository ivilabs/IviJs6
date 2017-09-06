/*
 Vars
*/

var x = 5;
var y = 6;
var z = x + y;
var m = x * y;
var n = null;
var u;


/*
 Functions
*/

function returnString() {
  return 'Js6 project!';
}

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

/*
 Data types
*/

var number = 0;
var string = "string";
var object = {};
var boolean = true;

/*
 Arrays
*/

var array = ["Saab", "Volvo", "BMW"];

/*
 Ture or False
*/

var t = true;
var f = false;

/*
 Oop
*/

class Ship {
  constructor(name, lenght, mass, cargo, capacity, speed) {
    this.name = name;
    this.lenght = lenght;
    this.mass = mass;
    this.cargo = cargo;
    this.capacity = capacity;
    this.speed = speed;
  }
}
class Freighter extends Ship {
  constructor(name, lenght, mass, cargo, capacity, speed) {
    super(name, lenght, mass, cargo, capacity, speed)
  }
  loading(mass) {
    if (this.cargo + mass <= this.capacity) {
      this.cargo += mass;
      return true;
    }
    this.setSpeed();
    return false
  }
  unloading(mass) {
    if (this.cargo - mass < 0) {
      return false;
    }
    this.cargo -= mass;
    this.setSpeed();
    return true
  }
  setSpeed() {
    this.speed = this.speed * ((this.cargo / this.capacity) / 2)
  }
}

var ship = new Freighter("Ibis", 300, 200, 0, 100, 20)
console.log(ship.name)
console.log(ship.mass)
console.log(ship.loading(20))
console.log(ship.mass)

/*
 Js6
*/

// https://github.com/lukehoban/es6features

// Let and Const
let i = 0;
const k = "Hi Js6."
// Arrow function
const newArray = array.map((a) => {
  return `This is a ${a} car.`
});
console.log(newArray);
// Default parameter
function radius(r, pi = 3.14) {}
// Destructing object
const dObject = {
  fruit: "Apple",
  animal: "Cat",
  tool: "Hammer",
  force: "Gravity"
}
const {
  animal,
  force
} = dObject;
console.log(animal, force);
// Loop iterators
for (const a in array) {
  console.log("In: ", a);
}
for (const a of array) {
  console.log("Of: ", a);
}
for (const a of Object.keys(dObject)) {
  const value = dObject[a];
  console.log("Object key: ", a, "Object value: ", value);
}
// Spread operator
const sArray = ["Apple", "Cat", "Hammer", "Gravity"];
const nArray = [...array, ...sArray];
console.log(nArray);
// Promise
const cPromise = fetch("http://time.jsontest.com/");
cPromise.then(data => data.json()).then(data => {
  console.log(data)
}).catch((err) => {
  console.error(err);
});
// Symbols and Proxy and WeakSet (Unnecessary)
// Generator
function* gen() {
  yield "Tom";
  yield "John";
  yield "Mary";
  yield "Donald";
}
const g = gen();
for (const v of g) {
  console.log("Generator: ", v);
}

// Map
const animals = new Map();

animals.set("Tiger", 21);
animals.set("Cat", 3);
animals.set("Dog", 4);
animals.set("Spider", 3);

for (const a of animals) {
  console.log("Map: ", a);
}
// Set
const people = new Set();
people.add("Tom");
people.add("John");
people.add("Mary");
people.add("Donald");

for (const p of people) {
  console.log("People: ", p);
}