// A boolean data type represents one of the two values:_true_ or _false_. Boolean value is either true or false.
// The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value which is either true or false.

let isLightOn = true;
let isRaining = false;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false

console.log(isLightOn);
console.log(isRaining);
console.log(truValue);
console.log(falseValue);

// ### Truthy values

// - All numbers(positive and negative) are truthy except zero
// - All strings are truthy except an empty string ('')
// - The boolean true

// ### Falsy values

// - 0
// - 0n
// - null
// - undefined
// - NaN
// - the boolean false
// - '', "", ``, empty string

// It is good to remember those truthy values and falsy values. In later section, we will use them with conditions to make decisions.

// ## Undefined

// If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function
// is not returning the value, it will be undefined.

let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet

let empty = null;
console.log(empty); // -> null , means no value

let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.33,1, 64

const PI = 3.14;
let radius = 100; // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); //  314 m

const gravity = 9.81; // in m/s2
let mass = 72; // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity;
console.log(weight); // 706.32 N(Newton)

const boilingPoint = 100; // temperature in oC, boiling point of water
const bodyTemp = 37; // body temperature in oC

// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
);

// ### Comparison Operators

// In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value.

console.log(3 > 2); // true, because 3 is greater than 2
console.log(3 >= 2); // true, because 3 is greater than 2
console.log(3 < 2); // false,  because 3 is greater than 2
console.log(2 < 3); // true, because 2 is less than 3
console.log(2 <= 3); // true, because 2 is less than 3
console.log(3 == 2); // false, because 3 is not equal to 2
console.log(3 != 2); // true, because 3 is not equal to 2
console.log(3 == "3"); // true, compare only value
console.log(3 === "3"); // false, compare both value and data type
console.log(3 !== "3"); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false); // true, equivalent
console.log(0 === false); // false, not exactly the same
console.log(0 == ""); // true, equivalent
console.log(0 == " "); // true, equivalent
console.log(0 === ""); // false, not exactly the same
console.log(1 == true); // true, equivalent
console.log(1 === true); // false, not exactly the same
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

// ### Logical Operators

// The following symbols are the common logical operators:
// &&(ampersand) , ||(pipe) and !(negation).
// The && operator gets true only if the two operands are true.
// The || operator gets true either of the operand is true.
// The ! operator negates true to false and false to true.

// && ampersand operator example

const check1 = 4 > 3 && 10 > 5; // true && true -> true
const check2 = 4 > 3 && 10 < 5; // true && false -> false
const check3 = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5; // true  || true -> true
const check5 = 4 > 3 || 10 < 5; // true  || false -> true
const check6 = 4 < 3 || 10 < 5; // false || false -> false

//! Negation examples

let check7 = 4 > 3; // true
let check8 = !(4 > 3); //  false
let isLightOnn = true;
let isLightOff = !isLightOnn; // false
let isMarried = !false; // true

// ### Decrement Operator

// In JavaScript we use the decrement operator to decrease a value stored in a variable. The decrement could be pre or post decrement. Let us see each of them:
// 1. Pre-decrement

let count1 = 0;
console.log(--count1); // -1
console.log(count1); // -1

// 2. Post-decrement

let count2 = 0;
console.log(count2--); // 0
console.log(count2); // -1

// ### Ternary Operators

// Ternary operator allows to write a condition.
// Another way to write conditionals is using ternary operators. Look at the following examples:

let isRainingg = true;
isRainingg
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
isRainingg = false;

isRainingg
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

// ### Window alert() method

// prompt("required text", "optional text");
// alert("Welcome to 1MonthOfJavaScript");

// let numberr = prompt("Enter number", "number goes here");
// console.log(number);

// const agree = confirm("Are you sure you like to delete? ");
// console.log(agree); // result will be true or false based on what you click on the dialog box
