// # Day 13

// ## Console Object Methods

// In this section, we will cover about console and console object methods. Absolute beginners usually do not know which to use: console.log(), document.write() or document.getElementById.

// We use console object methods to show output on the browser console and we use document.write to show output on the browser document(view port).
// Both methods used only for testing and debugging purposes. The console method is the most popular testing and debugging tool on the browser.
// We use document.getElementById() when we like to interact with DOM try using JavaScript. We will cover DOM in another section.

// In addition to the famous, console.log() method, the console provides other more methods.

// ### console.log()

// We use console.log() to show output on the browser console. We can substitute values and also we can style the logging out put using %c.

// - Showing output on browser console

console.log("Welcome to 1 Month Of JavaScript");

console.log("%d %s of JavaScript", 1, "Month");

console.log("%c1 Month Of JavaScript", "color:green"); // log output is green
console.log(
  "%c1 Month%c %cOf%c %cJavaScript",
  "color:green",
  "",
  "color:red",
  "",
  "color:yellow"
);

// console.warn
console.warn("This is a warning");
console.warn(
  "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
);

// console.error
console.error("This is an error message");
console.error("We all make mistakes");

// console.table
// The console.table() method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data,
// which must be an array or an object, and one additional optional parameter columns. Let us first start with a simple array. The code below displays a table with two columns.
//  An index column to display the index and value column to display the names

const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

// #console.time

// Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page.
// When you call console.timeEnd() with the same name,
// the browser will output the time, in milliseconds, that elapsed since the timer was started.

console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

// console.info
console.info('This is console.info')

// console.assert()

// The console.assert() methods writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. 
// If this expression is false, an Assertion failed error message will be displayed.

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

// ### console.group()
// The console.group() can help to group different log groups. Copy the following code and paste it on browser console to the groups.

const names = ['Kim', 'Hoang', 'Trung', 'Tin']
console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

// console.count

//It prints the number of times the console.count() is called. It takes a string label parameter. It is very helpful to count the number of times a function is called. 
//In the following example, the console.count() method will run three times

const func = () => {
  console.count('Function has been called')
}

func()
func()
func()

// ### console.clear()
// The console.clear() cleans the browser console.

//console.clear()