/*
    Vòng lặp - Loop

1. for - lặp với điều kiện đúng
2. for/in - lặp qua key của đối tượng
3. for/of - lặp qua value của đối tượng
4. while - lặp khi điều kiện đúng
5. do/while - lặp ít nhất 1 lần, sau đó 
    lặp khi điều kiện đúng

*/

//For loop

// for (var i = 1; i <= 1000; i++) {
//   console.log(i);
// }

function getRandNumbers(min, max, length) {
  var arr = new Array();
  for (var i = 0; i < length; i++) {
    arr[i] = Math.random() * (max - min) + min;
  }
  return arr;
}

//hàm getRandNumbers có 3 tham số là min, max, length.
//Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị
//trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min
//tới max.

var myArray = ["Javascript", "PHP", "Ruby", "CSS", "Python"];
var arrayLength = myArray.length;

// for (var i = 0; i < myArray.length; i++) { //giảm hiệu năng vì mỗi lần lặp là tính length 1 lần
//   console.log(myArray[i]);
// }

for (var i = 0; i < arrayLength; i++) {
  console.log(myArray[i]);
}

console.log("==================================================");
////////////////bai tap

var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];

function getTotal(arr) {
  var total = 0;
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    total += arr[i].price;
  }
  return total;
}

// Expected results:
// Output: 8700000
console.log(getTotal(orders));
console.log("==================================================");
// For/in loop

var myInfo = {
  name: "Huu Thanh",
  age: 18,
  address: "Ha Noi, VN",
};

for (var key in myInfo) {
  // code
  console.log(myInfo[key]);
}
console.log("==================================================");

var languages = ["Javascript", "PHP", "Ruby", "CSS", "Python"];

for (var key in languages) {
  console.log(languages[key]);
}

console.log("==================================================");
var myString = "Javascript";

for (var key in myString) {
  console.log(myString[key]);
}
console.log("==================================================");
//bai tappp////////////////////////////
function run(object) {
  var arr = new Array();
  for (var key in object) {
    arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return arr;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16, gender: "male" }));
console.log("==================================================");
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

// For/of loop

var languages = ["Javascript", "PHP", "Ruby"];

for (var value of languages) {
  console.log(value);
}
console.log("==================================================");
var languages = "Javascript";

for (var value of languages) {
  console.log(value);
}
console.log("==================================================");
var myInfo = {
  name: "Huu Thanh",
  age: 18,
  address: "Ha Noi, VN",
};

console.log(Object.keys(myInfo));
console.log(Object.values(myInfo));
console.log("==================================================");
for (var value of Object.keys(myInfo)) {
  console.log(myInfo[value]);
}
console.log("==================================================");
for (var value of Object.values(myInfo)) {
  console.log(value);
}
console.log("==================================================");
// While loop
var myArray = ["Javascript", "PHP", "Ruby"];
var i = 0;

while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}
console.log("==================================================");
// do/while loop
var i = 0;
var isSuccess = false;

do {
  i++;
  console.log(i);
} while (i < 10);
console.log("==================================================");
//Break & Continue in Loop
for (var i = 0; i < 10; i++) {
  console.log(i);

  if (i >= 5) {
    break;
  }
}
console.log("==================================================");
for (var i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
console.log("==================================================");
//Vòng lặp lồng nhau - Nested loop

var myArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (var i = 0; i < myArray.length; i++) {
  for (var j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}
console.log("==================================================");
//Loop...
for (var i = 10; i > 0; i--) {
  console.log(i);
}
console.log("==================================================");
for (var i = 0; i <= 100; i += 5) {
  console.log(i);
}
console.log("==================================================");
