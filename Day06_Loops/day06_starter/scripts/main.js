// # Day 6
// ## Loops

// Most of the activities we do in life are full of repetitions. Imagine if I ask you to print out from 0 to 100 using console.log().
// To implement this simple task it may take you 2 to 5 minutes, such kind of tedious and repetitive task can be carried out using loop.
// If you prefer watching the videos, you can checkout the [video tutorials](https://www.youtube.com/channel/UCM4xOopkYiPwJqyKsSqL9mw)

// In programming languages to carry out repetitive task we use different kinds of loops. The following examples are the commonly used loops in
// JavaScript and other programming languages.

// For loop structure

// for(initialization, condition, increment/decrement){
// code goes here
//  }

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

console.log("================================");
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

console.log("================================");
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

// 0 * 0 = 0
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25
console.log("================================================");
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]; // can be shorten, sum += numbers[i]
}

console.log("Sum= " + sum);
console.log("================================================");
numbers = [1, 2, 3, 4, 5];
let newArr = [];
sum = 0;
for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] ** 2);
}
console.log(newArr); // [1, 4, 9, 16, 25]
console.log("================================================");
console.log("================================");
let countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
console.log("================================================");
// ### while loop

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// 0 1 2 3 4 5
console.log("================================================");
// ### do while loop

i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);

// 0 1 2 3 4 5
console.log("================================================");
// ### for of loop

// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

// for (const element of arr) {
// code goes here
// }

numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

// 1 2 3 4 5
console.log("================================================");

for (const num of numbers) {
  console.log(num * num);
}

// 1 4 9 16 25
console.log("================================================");

sum = 0;
for (const num of numbers) {
  sum = sum + num;
  // can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum); // 15
console.log("================================================");

let webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}
console.log("================================================");
// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]); // get only the first letter of each element,  H C J R N M
}

countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
newArr = [];
for (const country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
console.log("================================================");
// ### break

// Break is used to interrupt a loop.

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// 0 1 2
console.log("================================================");
// The above code stops if 3 found in the iteration process.

// ### continue

// We use the keyword *continue* to skip a certain iterations.

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 0 1 2 4 5
