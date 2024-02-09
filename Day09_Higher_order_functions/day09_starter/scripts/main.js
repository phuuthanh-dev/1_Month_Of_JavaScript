// ## Higher Order Function

// Higher order functions are functions which take other function as a parameter or return a function as a value.
// The function passed as a parameter is called callback.

// # Callback
const callback = (n) => {
  return n ** 2;
};

function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));

// ### Returning function
// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

//Let us see were we use call back functions. For instance the _forEach_ method uses call back.
const numbers = [1, 2, 3, 4, 5];
const sumArray1 = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray1(numbers));

//The above example can be simplified as follows:

const sumArray2 = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArray2(numbers));

// ### Setting time

// In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

// - setInterval
// - setTimeout

// # Setting Interval using a setInterval function

// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time.
// The setInterval global method take a callback function and a duration as a parameter.
// The duration is in milliseconds and the callback will be always called in that interval of time.

// syntax
//function callback() {
// code goes here
//}
// setInterval(callback, duration);

function sayHello1() {
  console.log("Hello with setInterval");
}
setInterval(sayHello1, 1000); // it prints hello in every second, 1000ms is 1s

// # Setting a time using a setTimeout

// In JavaScript, we use setTimeout higher order function to execute some action at some time in the future.
// The setTimeout global method take a callback function and a duration as a parameter.
// The duration is in milliseconds and the callback wait for that amount of time.
// function callback() {
//     // code goes here
// }
// setTimeout(callback, duration) // duration in milliseconds

function sayHello2() {
  console.log("Hello with setTimeout");
}
setTimeout(sayHello2, 2000); // it prints hello after 2 seconds.

// ## Functional Programming

// Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems.
// All builtin methods take callback function. In this section, we will see _forEach_, _map_, _filter_, _reduce_, _find_, _every_, _some_, and _sort_.

// # forEach

// _forEach_: Iterate an array elements. We use _forEach_ only with arrays. It takes a callback function with elements, index parameter and array itself.
// The index and the array optional.
const countries = ["New York", "New Zealand", "Australia", "USA", "Canada"];

// countries.forEach(function (element, index, arr) {
//   console.log(index, element, arr);
// });

// The above code can be written using arrow function
// countries.forEach((element, index, arr) => {
//   console.log(index, element, arr);
// });

// The above code can be written using arrow function and explicit return
countries.forEach((element, index, arr) => console.log(index, element, arr));

let sum = 0;
numbers.forEach((num) => console.log(num));
console.log(sum);

countries.forEach((element) => console.log(element.toUpperCase()));

// # map
// _map_: Iterate an array elements and modify the array elements. It takes a callback function with elements,  index , array parameter and return a new array.
// const modifiedArray = arr.map(function (element, index, arr) {
//   return element;
// });

const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare);

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

// # filter

// _Filter_: Filter out items which full fill filtering conditions and return a new array.

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

const countriesEndsByia = countries.filter((country) => country.endsWith("ia"));
console.log(countriesEndsByia);

let scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

// # reduce
// _reduce_: Reduce takes a callback function. The call back function takes accumulator,  current, and optional initial value as a parameter and returns a single value.
//  It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array `first value`.
// If our array is an _empty array_, then `Javascript` will throw an error.

// arr.reduce((acc, cur) => {
//     // some operations goes here before returning a value
//    return
//   }, initialValue)

const summ = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(summ);

// # every
// _every_: Check if all the elements are similar in one aspect. It returns boolean

let bools = [true, true, true, true];
const areAllTrue = bools.every((b) => b === true); // Are all true?
console.log(areAllTrue); // true

let areAllStr = names.every((name) => typeof name === "string"); // Are all strings?
console.log(areAllStr);

// # find
// _find_: Return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);
console.log(age);

scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const score = scores.find((user) => user.score > 80);
console.log(score);

// # findIndex
// _findIndex_: Return the position of the first element which satisfies the condition

const result = names.findIndex((name) => name.length > 7);
console.log(result); // 0

const agee = ages.findIndex((age) => age < 20);
console.log(agee); // 5

// # some
// _some_: Check if some of the elements are similar in one aspect. It returns boolean

bools = [true, true, true, true];
const areSomeTrue = bools.some((b) => b === true);
console.log(areSomeTrue); //true

areAllStr = names.some((name) => typeof name === "number"); // Are all strings ?
console.log(areAllStr); // false

// # sort
//_sort_: The sort methods arranges the array elements either ascending or descending order. By default,
//the **_sort()_** method sorts values as strings.This works well for string array items but not for numbers.
//If number values are sorted as strings and it give us wrong result. Sort method modify the original array.
//It is recommended to copy the original data before you start using _sort_ method.

// # Sorting string values

const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

// # Sorting Numeric values

// As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared,
//  1 which the beginning of the string '100' became the smallest.
//  To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.

const numberss = [9.81, 3.14, 100, 37];
// Using sort method to sort number items provide a wrong result. see below
console.log(numberss.sort()); //[100, 3.14, 37, 9.81]
numberss.sort(function (a, b) {
  return a - b;
});
console.log(numberss); // [3.14, 9.81, 37, 100]

numberss.sort(function (a, b) {
  return b - a;
});
console.log(numberss); //[100, 37, 9.81, 3.14]

// # Sorting Object Arrays
// Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.

// objArr.sort(function (a, b) {
//   if (a.key < b.key) return -1
//   if (a.key > b.key) return 1
//   return 0
// })

// or

// objArr.sort(function (a, b) {
//   if (a['key'] < b['key']) return -1
//   if (a['key'] > b['key']) return 1
//   return 0
// })

users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
// [{…}, {…}, {…}, {…}]