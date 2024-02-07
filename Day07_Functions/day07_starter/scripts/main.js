// Day 7

// ## Functions

// So far we have seen many builtin JavaScript functions. In this section, we will focus on custom functions. What is a function? Before we start making functions,
// lets understand what function is and why we need function

// A function is a reusable block of code or programming statements designed to perform a certain task.
// A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter.
// If a function take a parameter it will be called with argument. A function can also take a default parameter.
// To store a data to a function, a function has to return certain data types. To get the value we call or invoke a function.
// Function makes code:

// - clean and easy to read
// - reusable
// - easy to test

// A function can be declared or created in couple of ways:

// - _Declaration function_
// - _Expression function_
// - _Anonymous function_
// - _Arrow function_

// ### Function Declaration

//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName(); // calling function by its name and with parentheses

function square1() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}

square1(); // 4

function addTwoNumbers1() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}

addTwoNumbers1(); // a function has to be called by its name to be executed

// ### Function returning value

function printFullName1() {
  let firstName = "Asabeneh";
  let lastName = "Yetayeh";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(printFullName1());

function addTwoNumbers2() {
  let numOne = 2;
  let numTwo = 3;
  let total = numOne + numTwo;
  return total;
}

console.log(addTwoNumbers2());

//### Function with a parameter

function functionName(parm1) {
  //code goes her
}

function square2(number) {
  return number * number;
}

console.log(square2(10));

//### Function with two parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  console.log(sum);
}

sumTwoNumbers(10, 20); // calling functions

function printFullName2(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(printFullName2("Asabeneh", "Yetayeh"));

//### Function with many parameters
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
let numbers = [1, 2, 3, 4, 5];
//calling a function
console.log(sumArrayValues(numbers));

const areaOfCircle = (radius) => {
  let area = Math.PI * radius * radius;
  return area;
};
console.log(areaOfCircle(10));

// ### Function with unlimited number of parameters

// Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a function which can take unlimited number of arguments.
// The way we do it has a significant difference between a function declaration(regular function) and arrow function. Let us see examples both in
// function declaration and arrow function.

// #### Unlimited number of parameters in regular function

//  A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can
//  be accessed from arguments object inside the functions. Let us see an example

// function sumAllNums() {
//   console.log(arguments);
// }

// sumAllNums(1, 2, 3, 4);

function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173

//   ### Anonymous Function

//   Anonymous function or without name
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};

// ### Expression Function

// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable.
// To return a value from the function we should call the variable. Look at the example below.

// Function expression
const square = function (n) {
  return n * n;
};

console.log("(Expession Function) " + square(6)); // -> 4

// ### Self Invoking Functions

// Self invoking functions are anonymous functions which do not need to be called to return a value.

(function (n) {
  console.log(n * n);
})(2); // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);

// ### Arrow Function

// Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

// Arrow function uses arrow instead of the keyword *function* to declare a function. Let us see both function declaration and arrow function.

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
// function calculate(n) {
//   return n * n;
// }

const calculate = (n) => {
  return n * n;
};

const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

console.log(changeToUpperCase(countries));

const printFullName3 = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(printFullName3("Huu", "Thanh"));

// ### Function with default parameters

// Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used.
// Both function declaration and arrow function can have a default value or values.

// syntax
// Declaring a function
function functionName1(param = value) {
  //codes
}

function welcome(name = "I'm a default value") {
  let message = `Welcome to ${name}`;
  return message;
}

console.log(welcome());
console.log(welcome("Thanh"));

function generateFullName(firstName = "Default", lastName = "Value") {
  let fullName = firstName + " " + lastName;
  return fullName;
}

console.log(generateFullName());
console.log(generateFullName("Huu", "Thanh"));

function calculateAge(birthYear, currentYear = 2024) {
  let age = currentYear - birthYear;
  return age;
}

console.log("Age: ", calculateAge(2003));

// Let us see how we write the above functions with arrow functions

const welcome2 = (name = "I'm a default value by arrow functions") => {
  let message = `Welcome to ${name}`;
  return message;
};

console.log(welcome2());
console.log(welcome2("Trung"));

const calculateAge2 = (birthYear, currentYear = 2024) =>
  currentYear - birthYear;
console.log("Age calculate by arrow function: ", calculateAge2(2003));
