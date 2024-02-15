localStorage.setItem("Name", "HuuThanh"); // since the value is string we do not stringify it

localStorage.setItem("age", 21);

const skills = ["HTML", "CSS", "JS", "React"];
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem("skills", skillsJSON);
console.log(localStorage);

let skillsObject = [
  { tech: "HTML", level: 10 },
  { tech: "CSS", level: 9 },
  { tech: "JS", level: 8 },
  { tech: "React", level: 9 },
  { tech: "Redux", level: 10 },
  { tech: "Node", level: 8 },
  { tech: "MongoDB", level: 8 },
];

let skillJSON = JSON.stringify(skillsObject);
localStorage.setItem("skillsObject", skillJSON);

let firstName = localStorage.getItem("Name");
let age = localStorage.getItem("age");
console.log(firstName, age, skills);

let skillss = localStorage.getItem('skills')
let skillsObj = JSON.parse(skillss, undefined, 4)
console.log(skillsObj)

// localStorage.clear()