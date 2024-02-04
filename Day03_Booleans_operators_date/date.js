// ## Date Object

// Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object. 
// The object we create using Date object provides many methods to work with date and time.T
// he methods we use to get date and time information from a date object values are started with a word _get_ because it provide the information.

// ### Creating a time object

// Once we create time object. The time object will provide information about time. Let us create a time object

const now = new Date();
console.log(now);

// ### Getting full year

// Let's extract or get the full year from a time object.

const nowYear = new Date();
console.log(nowYear.getFullYear());

// ### Getting month

// Let's extract or get the month from a time object.

const nowMonth = new Date();
console.log(nowMonth.getMonth());

// ### Getting date

// Let's extract or get the date of the month from a time object.

const nowDate = new Date();
console.log(nowDate.getDate());

// ### Getting day

// Let's extract or get the day of the week from a time object.

const nowDay = new Date();
console.log(nowDay.getDay());


// ### Getting hours

// Let's extract or get the hours from a time object.

const nowHours = new Date();
console.log(nowHours.getHours());

// ### Getting minutes

// Let's extract or get the minutes from a time object.

const nowMinutes = new Date();
console.log(nowMinutes.getMinutes()); // 56, because the time is 00:56:41

// ### Getting seconds

// Let's extract or get the seconds from a time object.

const nowSeconds = new Date();
console.log(nowSeconds.getSeconds());

// ### Getting time

// This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:

// 1. Using _getTime()_

const nowTime = new Date(); //
console.log(now.getTime()); // 1707019997789, this is the number of seconds passed from January 1, 1970 to February 2, 2024 11:14:18

// 1. Using _Date.now()_

const allSeconds = Date.now(); //
console.log(allSeconds); // 1707019997789, this is the number of seconds passed from January 1, 1970 to February 2, 2024 11:14:18

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true

const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56