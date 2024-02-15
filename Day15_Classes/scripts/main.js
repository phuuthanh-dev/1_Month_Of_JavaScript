// # Day 15

// ## Classes

// JavaScript is an object oriented programming language. Everything in JavScript is an object,
// with its properties and methods. We create class to create an object. A Class is like an object constructor,
// or a "blueprint" for creating objects. We instantiate a class to create an object. The class defines attributes
// and the behavior of the object, while the object, on the other hand, represents the class.

// Once we create a class we can create object from it whenever we want. Creating an object from a class is called class instantiation.

// In the object section, we saw how to create an object literal. Object literal is a singleton. If we want to get a similar object ,
// we have to write it. However, class allows to create many objects. This helps to reduce amount of code and repetition of code.
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
"My car is " + myCar.age(year) + " years old.";


class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    console.log(this);
    return info;
  }
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    console.log("hi");
    return skills[index];
  }
}

console.log(Person.favoriteSkill());

class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }

  saySomething() {
    console.log("I am a child of the person class");
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";
    let pronoun = this.gender == "Male" ? "He" : "She";

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    console.log(this);
    return info;
  }
}

const s1 = new Student(
  "Asabeneh",
  "Yetayeh",
  250,
  "Finland",
  "Helsinki",
  "Male"
);
const s2 = new Student("Lidiya", "Tekle", 28, "Finland", "Helsinki", "Female");
s1.setScore = 1;
s1.setSkill = "HTML";
s1.setSkill = "CSS";
s1.setSkill = "JavaScript";

s2.setScore = 1;
s2.setSkill = "Planning";
s2.setSkill = "Managing";
s2.setSkill = "Organizing";

console.log(s1);
console.log(s2);

console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());

console.log(s2.saySomething());
console.log(s2.getFullName());
console.log(s2.getPersonInfo());
