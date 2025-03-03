// ES5 : Uses var - function Scope 

var name = "Pooja";
if (true) {
  var name = "Naveen"; // Overwrites global `name`
}
console.log(name); // Output: Naveen 

// ES6 : Uses let and const - Block Scope

let name2 = "Pooja";
if (true) {
  let name2 = "Raj"; // New block-scoped variable
}
console.log(name2); // Output: Poojan

/*===================================================================*/
//ES5 - traditional function 

function greet(name) {
    return "Hello " + name;
  }

//ES6 - Arrow Function 
const greet = (name) => `Hello ${name}`;

/*===================================================================*/

//ES5 : Concatenation

var a = "Pooja";
console.log("Hello, " + a + "!");

// ES6 : template Literals

const name = "Pooja";
console.log(`Hello, ${name}!`);

/*====================================================================*/

//ES5 : Extracting Values

var user = { name: "Pooja", age: 21 };
var name = user.name;
var age = user.age;

//ES6 : Destructuring 

const user = { name: "Pooja", age: 21 };
const { name, age } = user;

/*======================================================================*/

//ES5 : Merging Arrays 

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var newArr = arr1.concat(arr2);
console.log(newArr); // [1, 2, 3, 4, 5, 6]

//ES6 : Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(newArr); // [1, 2, 3, 4, 5, 6]

/*=====================================================================*/

//ES5 : No Module System 

var module = require('./module.js');

//ES6 : import/export 
// module.js

export const greet = (name) => `Hello, ${name}!`;

// main.js
import { greet } from "./module.js";
console.log(greet("Pooja"));

/*=====================================================================*/

//ES5 : Callback Functions

function fetchData(callback) {
    setTimeout(() => {
      callback("Data Loaded");
    }, 2000);
  }
  
  fetchData(function (data) {
    console.log(data);
  });

//ES6+ : Async/ Await 

const fetchData = async () => {
    let data = await new Promise((resolve) =>
      setTimeout(() => resolve("Data Loaded"), 2000)
    );
    console.log(data);
  };
  
  fetchData();
  
/*=====================================================================*/

//ES5 : forEach

var numbers = [1, 2, 3];
numbers.forEach(function (num) {
  console.log(num);
})

//ES6 : for...of 

const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}

/*=====================================================================*/

//ES5 : Constructor Functions

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function () {
    return "Hello, " + this.name;
  };
  
  var user = new Person("Pooja", 21);
  console.log(user.greet());
  
// Class Syntax 

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, ${this.name}`;
    }
  }
  
  const user = new Person("Poojan", 21);
  console.log(user.greet());

/*=====================================================================*/
