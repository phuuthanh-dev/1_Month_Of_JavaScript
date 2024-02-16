// # Day 17

// ## Promise

// We human give or receive a promise to do some activity at some point in time. If we keep the promise we make others happy but if we do not keep the promise, it may lead discontentment. Promise in JavaScript has something in common with the above examples.

// A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: meaning that the operation completed successfully.
// - rejected: meaning that the operation failed.

// A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

// As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

// ## Callbacks

// To understand promise very well let us understand callback first. Let's see the following callbacks. From the following code blocks you will notice, the difference between callback and promises.

// - call back
//   Let us see a callback function which can take two parameters. The first parameter is err and the second is result. If the err parameter is false, there will not be error other wise it will return an error.

// In this case the err has a value and it will return the err block.

//Callback
let doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("It did not go well", skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    return console.log("After 2 seconds : " + err);
  }
  return console.log("After 2 seconds : " + result);
};

doSomething(callback);

// In this case the err is false and it will return the else block which is the result.

doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback(false, skills);
  }, 2000);
};

doSomething((err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});

// # Promise constructor

// We can create a promise using the Promise constructor. We can create a new promise using the key word `new` followed by the word
// `Promise` and followed by a parenthesis. Inside the parenthesis, it takes a `callback` function. The promise callback function has
// two parameters which are the _`resolve`_ and _`reject`_ functions.

// syntax
const promise = new Promise((resolve, reject) => {
  resolve("success");
  reject("failure");
});

// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

//   # Fetch API

//   The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest,
//   but the new API provides a more powerful and flexible feature set. In this challenge we will use fetch to request url and APIS.
//   In addition to that let us see demonstrate use case of promises in accessing network resources using the fetch API.
const url = "https://restcountries.com/v2/all"; // countries api
fetch(url)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // getting the data
    console.log(data);
  })
  .catch((error) => console.error(error)); // handling error if something wrong happens

//# Async and Await
// Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.

// Now, as you can see from the above example writing async in front of a function create a promise and to get the value from a promise we use await. 
// Async and await go together, one can not exist without the other.
// Let us fetch API data using both promise method and async and await method.

// - promise
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Promise");
    console.log(data)
  })
  .catch(error => console.error(error))

// - async and await
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log("Async and await");
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()