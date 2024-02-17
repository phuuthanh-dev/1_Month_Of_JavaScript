// HTML DOM: Document Object Model

// Có 3 thành phần

/*
 * 1. Element: ID, class, tag, CSS selector, HTML collection
 * 2. Attribute
 * 3. Text
 */

// https://www.w3schools.com/js/js_htmldom.asp
// Mỗi 1 ô là 1 node

//------------------------------------------------------

// Javascript: Browser | Server (NodeJS)

// Browser: HTML -> DOM -> WEB API

console.log(document);

document.write("HELLO GUYS!");

///////////////////////////////////////////////////////ELEMENT
var headingNode = document.getElementById("heading");

console.log({
  element: headingNode,
});

var headingNodes = document.getElementsByClassName("heading");
console.log(headingNodes);

var headingNodes = document.getElementsByTagName("h1");
console.log(headingNodes);

var headingNode = document.querySelector(".box .heading-2:first-child");
console.log(headingNode);

var headingNode = document.querySelector(".box .heading-2:nth-child(2)");
console.log(headingNode);

var headingNodes = document.querySelectorAll(".box .heading-2");
console.log(headingNodes);
console.log(headingNodes[0]);

console.log(document.forms);
console.log(document.forms[1]);
console.log(document.forms["form-1"]);

//Lay ra nhung the a co dat ten
console.log(document.anchors);

console.log(document.images);

//Cách 1:
var listItemNodes = document.querySelectorAll(".box-1 li");
console.log(listItemNodes);

//Cách 2:
var boxNode = document.querySelector(".box-1");
//Công việc 1: Sử dụng tới `boxNode`

//Công việc 2: Sử dụng tới các li elements
//là con của `.box-1`
console.log(boxNode);
console.log(boxNode.getElementsByTagName("li"));
console.log(boxNode.querySelectorAll("p"));

/////////////////////////////////////////////////////DOM ATTRIBUTES
var firstHeadingElement = document.querySelector("h1");
//cách 1: Dành cho những thuộc tính hợp lệ
firstHeadingElement.title = "Title test";

//cách 2: Có thể những thuộc tính k hợp lệ
firstHeadingElement.setAttribute("class", "heading-test");
firstHeadingElement.setAttribute("href", "heading");
firstHeadingElement.setAttribute("data-1", "heading");
firstHeadingElement.setAttribute("data", "test data");

console.log(firstHeadingElement);

console.log(firstHeadingElement.getAttribute("class"));
console.log(firstHeadingElement.getAttribute("title"));
console.log(firstHeadingElement.getAttribute("data"));

///////////////////////////////////////////////////////TEXT
// innerText, textContent
var firstHeadingElement = document.querySelector("h1");
//Những gì mình nhìn thấy
console.log(firstHeadingElement.innerText);
//Chính những gì nằm trong text node
console.log(firstHeadingElement.textContent);

firstHeadingElement.innerText = "New heading"; //textContent cũng vậy
// firstHeadingElement.innerText = '<i>New heading</i>';
// firstHeadingElement.textContent = "<i>New heading</i>";
//EDIT HTML ĐỂ THẤY RÕ HƠN
// firstHeadingElement.innerText = `

// New heading

// `;

//EDIT HTML ĐỂ THẤY RÕ HƠN
firstHeadingElement.textContent = `
  
New heading

`;
///////////////////////////////////////////////////////////
//innerHTML, outerHTML
var a = document.getElementsByClassName("test-innerHtml")[0];

// a.innerText = '<h1>Heading</h1>'
a.innerHTML = "<h1 class='abc' style='color: red'>New heading</h1>";

console.log(a);
console.log(a.innerHTML);
// a.outerHTML = '<span>Test</span>' //ghi đè chính nó
console.log(a.outerHTML); //lấy thêm chính nó
console.log(document.querySelector(".abc").innerText);
////////BÀI TẬP
var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

function render(courses) {
  var ul = document.getElementsByClassName("courses-list")[0];
  var html_arr = courses.map(function (course) {
    return `<li>` + course + `</li>`;
  });
  ul.innerHTML = html_arr.join(""); //join mà k có "" thì mặc định sẽ có dấu,
}

render(courses);
///////////////////////////////////////////////////////
//DOM Style
var node = document.querySelector(".style-js");
//cách 1:
// node.style.width = '200px';
// node.style.height = '200px';
//cách 2:
Object.assign(node.style, {
  width: "200px",
  height: "100px",
  backgroundColor: "green",
});

console.log(node.style.backgroundColor);
console.log(node.style.width);
/////////////////////////////////////////////////////////////
// ClassList property

// add: thêm class vào element
// contains: kiểm tra 1 class có nằm trong element này hay không
// remove: xóa bỏ class khỏi element
// toggle: nếu có 1 class ở element -> thì xóa class đó
//         chưa có                  -> thêm vào
// replace: thay class mới đè tên class cũ

var boxElement = document.querySelector(".box");
console.log(boxElement.classList);
console.log(boxElement.classList.length);
console.log(boxElement.classList[1]);
console.log(boxElement.classList.value); //trả về chuỗi nằm trong attribute class

boxElement.classList.add("red");
//boxElement.classList.add('red blue');  //ko dc
boxElement.classList.add("red", "green");

console.log(boxElement.classList);
console.log(boxElement.classList.contains("red"));

setTimeout(() => {
  boxElement.classList.remove("red");
}, 3000); //xóa class red sau 3s
console.log(boxElement.classList);

setInterval(() => {
  boxElement.classList.toggle("blue");
}, 1000);
console.log(boxElement.classList);
