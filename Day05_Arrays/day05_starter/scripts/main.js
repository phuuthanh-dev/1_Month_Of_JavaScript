// # Day 5

// ## Arrays

// In contrast to variables, an array can store _multiple values_. Each value in an array has an _index_, and each index has _a reference in a memory address_.
// Each value can be accessed by using their _indexes_. The index of an array starts from _zero_, and the  index of the last element is less by one from the length of the array.

// An array is a collection of different data types which are ordered and changeable(modifiable). An array allows storing duplicate elements and different data types.
// An array can be empty, or it may have different data type values.

let arr = [];
console.log(arr);

let numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
let vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
let animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
let webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
let countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);

// Array can have items of different data types
arr = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types
console.log(arr);

// ### Creating an array using split

// As we have seen in the earlier section, we can split a string at different positions, and we can change to an array. Let us see the examples below.
let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);

// ### Accessing array items using index

let fruits = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0]; // we are accessing the first item using its index

console.log(firstFruit); // banana

secondFruit = fruits[1];
console.log(secondFruit); // orange

let lastFruit = fruits[3];
console.log(lastFruit); // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit); // lemon

numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // set of numbers

console.log(numbers.length); // => to know the size of the array, which is 6
console.log(numbers); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]); //  -> 0
console.log(numbers[5]); //  -> 100

lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]); // -> 100

webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"]; // List of web technologies
console.log(webTechs); // all the array items
console.log(webTechs.length); // => to know the size of the array, which is 7
console.log(webTechs[0]); //  -> HTML
console.log(webTechs[6]); //  -> MongoDB

lastIndex = webTechs.length - 1;
console.log(webTechs[lastIndex]); // -> MongoDB

numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // changing 1 at index 0 to 10
numbers[1] = 20; // changing  2 at index 1 to 20

console.log(numbers); // [10, 20, 3, 4, 5]

countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

countries[0] = "Afghanistan"; // Replacing Albania by Afghanistan
lastIndex = countries.length - 1;
countries[lastIndex] = "Korea"; // Replacing Kenya by Korea

console.log(countries);
// ["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]
