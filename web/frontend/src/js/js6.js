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