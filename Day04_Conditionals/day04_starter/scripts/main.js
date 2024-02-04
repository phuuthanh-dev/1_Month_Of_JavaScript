// ## Conditionals

// Conditional statements are used for  make decisions based on different conditions.
// By default , statements in JavaScript script executed sequentially from top to bottom. If the processing logic require so, the sequential flow of execution can be altered in two ways:

// - Conditional execution: a block of one or more statements will be executed if a certain expression is true
// - Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. In this section, we will cover _if_, _else_ , _else if_ statements. The comparison and logical operators we learned in the previous sections will be useful in here.

// Conditions can be implementing using the following ways:

// - if
// - if else
// - if else if else
// - switch
// - ternary operator

// ### If

// In JavaScript and other programming languages the key word _if_ is to used check if a condition is true and to execute the block code. 
// To create an if condition, we need _if_ keyword, condition inside a parenthesis and block of code inside a curly bracket({}).

if (3 == 3) {
  //this part of code runs for truthy condition
  console.log("3 is equal to 3");
}

let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
}

let isRaining = true;
if (isRaining) {
  console.log("Remember to take your rain coat.");
}

// ### If Else

// If condition is true the first block will be executed, if not the else condition will be executed.

if (num > 0) {
  console.log(`${num} is a positive number`);
} else {
  console.log(`${num} is a negative number`);
}
//  3 is a positive number

num = -3;
if (num > 0) {
  console.log(`${num} is a positive number`);
} else {
  console.log(`${num} is a negative number`);
}
//  -3 is a negative number

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}

// ### If  Else if Else

// On our daily life, we make decisions on daily basis. We make decisions not by checking  one or two conditions instead we make decisions based on multiple conditions. 
// As similar to our daily life, programming is also full of conditions. We use *else if* when we have multiple conditions.

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

// ### Switch

// Switch  is an alternative for **if else if else else**.
// The switch statement starts with a *switch* keyword followed by a parenthesis and code block. 
// Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value. 
// The break statement is to terminate execution so the code execution  does not go down after the condition is satisfied.  
// The default block runs if all the cases don't satisfy the condition.

let weatherr = 'cloudy'
switch (weatherr) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}


// Examples to use conditions in the cases
let number = prompt('Enter number');
switch (true) {
  case number > 0:
    console.log('Number is positive');
    break;
  case number == 0:
    console.log('Numbers is zero'); 
    break;
  case number < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}