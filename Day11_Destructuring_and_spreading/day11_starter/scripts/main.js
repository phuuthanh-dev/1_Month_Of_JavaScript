// # Day 11
// ## Destructuring and Spread
// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.
// # Destructing Arrays
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree);

let names = ["Asabeneh", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
let [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);

// If we like to skip on of the values in the array we use additional comma.
// The command helps to omit the value at that specific index
[numOne, , numThree] = numbers; //2 is omitted

console.log(numOne, numThree);

[, secondPerson, , fourthPerson] = names; // first and third person is omitted

console.log(secondPerson, fourthPerson);

//We can use default value in case the value of array for that index is undefined:
names = [undefined, "Brook", "David"][
  ((firstPerson = "Asabeneh"),
  secondPerson,
  thirdPerson,
  (fourthPerson = "John"))
] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
//We can not assign variable to all the elements in the array.
//We can destructure few of the first and we can get the remaining as array using spread operator(...).

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);

let countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}
console.log("================================================================");
for (const [first, second, third] of fullStack) {
  console.log(first, second, third);
}
console.log("================================================================");
// # Destructuring Object
// When we destructure the name of the variable we use to destructure should be exactly
// the same as the key or property of the object. See the example below.
let rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);

// # Renaming during structuring
let { width: w, height: h, area: a, perimeter: p } = rectangle;

console.log(w, h, a, p);

//If the key is not found in the object the variable will be assigned to undefined.
// Sometimes the key might not be in the object, in that case we can give a default
// value during declaration. See the example.

let rectangle1 = {
  width1: 20,
  height1: 10,
  area1: 200,
};
let { width1, height1, area1, perimeter1 = 60 } = rectangle1;

console.log(width1, height1, area1, perimeter1); //20 10 200 60
//Let us modify the object:width to 30 and perimeter to 80

rectangle2 = {
  width2: 30,
  height2: 10,
  area2: 200,
  perimeter2: 80,
};
let { width2, height2, area2, perimeter2 = 60 } = rectangle2;
console.log(width2, height2, area2, perimeter2); //30 10 200 80

//# Object parameter without destructuring
const rect = {
  width: 20,
  height: 10,
};
let calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect)); // 60
//with destructuring

const person = {
  firstName: "Huu",
  lastName: "Thanh",
  age: 250,
  country: "VietNam",
  job: "Student and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Japanese", "English"],
};

// Let us create a function which give information about the person object without destructuring

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He learned ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

console.log(getPersonInfo(person));

// #Object parameter with destructuring

calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter(rect)); // 60

// # Destructuring object during iteration

const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

// #Spread or Rest Operator
// When we destructure an array we use the spread operator(...) to get the rest elements as
// array. In addition to that we use spread operator to spread array elements to another array.
countries = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [gem, fra, , ...nordicCountries] = countries;

console.log(gem);
console.log(fra);
console.log(nordicCountries);

// # Spread operator to copy array

const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

frontEnd = ["HTML", "CSS", "JS", "React"];
backEnd = ["Node", "Express", "MongoDB"];
const whole = [...frontEnd, ...backEnd];

console.log(whole);

// #Spread operator to copy object
// We can copy an object using a spread operator

user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

let copiedUser = { ...user };
console.log(copiedUser);

user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

copiedUser = { ...user, title: "instructor" };
console.log(copiedUser);

// #Spread operator with arrow function
// Whenever we like to write an arrow function which takes unlimited number of arguments we use
// a spread operator. If we use a spread operator as a parameter, the argument passed when we
// invoke a function will change to an array.

const sumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4, 5)); // 15
