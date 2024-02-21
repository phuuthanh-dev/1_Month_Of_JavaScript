// #### Variables

let firstName = "Asabeneh";
let lastName = "Yetayeh";
let city = "Helsinki";

const PI = Math.PI;
const gravity = 9.81;

// #### Arrays

// We chose to make array names plural

// - names
// - numbers
// - countries
// - languages
// - skills
// - fruits
// - vegetables

// arrays
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const languages = ["Amharic", "Arabic", "English", "French", "Spanish"];
const skills = ["HTML", "CSS", "JavaScript", "React", "Python"];
const fruits = ["banana", "orange", "mango", "lemon"];
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];

// #### Functions

// function which return full name of a person
const printFullName = (firstName, lastName) => firstName + " " + lastName;

// function which calculates a square of a number
const square = (n) => n * n;

// a function which generate random hexa colors
const hexaColor = () => {
  const str = "0123456789abcdef";
  let hexa = "#";
  let index;
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length);
    hexa += str[index];
  }
  return hexa;
};

// a function which shows date and time
const showDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const dateMonthYear = date + "." + month + "." + year;
  const time = hours + ":" + minutes;
  const fullTime = dateMonthYear + " " + time;
  return fullTime;
};

// #### Loops
const n = 10;
for (let i = 0; i < n; i++) {
  console.log();
}

// declaring an array variable
let country = ["VietNam", "ThaiLand", "USA", "India"];

// iterating an array using regular for loop
let len = names.length;
for (let i = 0; i < len; i++) {
  console.log(names[i].toUpperCase());
}

// iterating an array using for of
for (const name of names) {
  console.log(name.toUpperCase());
}

// iterating array using forEach
names.forEach((name) => name.toUpperCase());

const personn = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
for (const key in personn) {
  console.log(key);
}

// #### Objects

// declaring object literal
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
// iterating through object keys
for (const key in person) {
  console.log(key, person[key]);
}

// #### Conditional

// syntax
// if (condition) {
// this part of code run for truthy condition
// } else {
// this part of code run for false condition
// }

// if else
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
} else {
  console.log(`${num} is a negative number`);
}
//  3 is a positive number

// if else if else if else

let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}

// Switch More Examples
let dayUserInput = prompt("What day is today ?");
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("It is not a week day.");
}

// ternary

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

// #### Classes

// We declare class with CamelCase which starts with capital letter.

// syntax
class ClassName {
  // code goes here
}

// defining class
class Person {
  constructor(firstName, lastName) {
    console.log(this); // Check the output from here
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
