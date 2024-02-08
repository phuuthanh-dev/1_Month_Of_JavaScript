// ## Object

// Everything can be an object and objects do have properties and properties have values, so an object is a key value pair.
// The order of the key is not reserved, or there is no order.
// To create an object literal, we use two curly brackets.

// ### Creating an empty object

// An empty object
const emptyObj = {};

// ### Creating an objecting with values

// Now, the person object has firstName, lastName, age, location, skills and isMarried properties.
// The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.

// Let us see some examples of object. Each key has a value in the object.
const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

let person = {
  firstName: "Huu",
  lastName: "Thanh",
  age: 250,
  country: "VietNam",
  city: "Ho Chi Minh",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
console.log(person);

// # Getting values from an object
// We can access values of object using two methods:
// - using . followed by key name if the key-name is a one word
// - using square bracket and a quote

// accessing values using .
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location); // undefined

// value can be accessed using square bracket and key name
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["age"]);
console.log(person["location"]); // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person["phone number"]);

// # Creating object methods
// Now, the person object has getFullName properties. The getFullName is function inside the person object and we
// call it an object method. The _this_ key word refers to the object itself. We can use the word _this_ to access the
// values of different properties of the object. We can not use an arrow function as object method because the word
// this refers to the window inside an arrow function instead of the object itself. Example of object:
let obj = {
  firstName: "Huu",
  lastName: "Thanh",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(obj.getFullName());

// # Setting new key for an object
// An object is a mutable data structure and we can modify the content of an object after it gets created.
// Setting a new keys in an object
person = {
  firstName: "Huu",
  lastName: "Thanh",
  age: 250,
  country: "VietNam",
  city: "Ho Chi Minh",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
person.nationality = "VietNam";
person.country = "VietNam";
person.title = "student";
person.skills.push("HTML");
person.skills.push("CSS");
person.isMarried = true;

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe learning ${skills}.`;
  return statement;
};
console.log(person);
console.log(person.getPersonInfo());

// ### Object Methods
// There are different methods to manipulate an object. Let us see some of the available methods.
// _Object.assign_: To copy an object without modifying the original object
person = {
  name: "Thanh",
  age: 250,
  country: "VietNam",
  city: "Ho Chi Minh",
  skills: ["HTML", "CSS", "JS"],
  title: "student",
  address: {
    district: "Quan 9",
    pobox: 2002,
    city: "Ho Chi Minh",
  },
  getPersonInfo: function () {
    return `I am ${this.name} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};

const copyPerson = Object.assign({}, person);
console.log(copyPerson);
console.log("=================================");
// # Getting object keys using Object.keys()
// _Object.keys_: To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']
console.log("=================================");

// # Getting object values using Object.values()
// _Object.values_:To get values of an object as an array
const values = Object.values(copyPerson)
console.log(values)
console.log("=================================");

// # Getting object keys and values using Object.entries()
// _Object.entries_:To get the keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)
console.log("=================================");

// # Checking properties using hasOwnProperty()
// _hasOwnProperty_: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
console.log("=================================");