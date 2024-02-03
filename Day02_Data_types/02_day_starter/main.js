//LÀM VIỆC VỚI CHUỖI
var myString = "Hello JS my Javascript JS!";

//1. Length
console.log(myString.length);

//2. Find index
console.log(myString.indexOf("my"));

//3. Cut string
console.log(myString.slice(9));
console.log(myString.slice(6, 8));

//4. Replace
console.log(myString.replace(/JS/g, "Javascript"));
console.log(myString.replace("my", "JS"));

//5. Convert to upper case
console.log(myString.toUpperCase());

//6. Convert to lower case
console.log(myString.toLowerCase());

//7. Trim
console.log(myString.trim().length);

//8. Split
const myString2 = "Huu Thanh";
console.log(myString2.split(" "));

//9.Get a character by index
console.log(myString2.charAt(4));

//LÀM VIỆC VỚI INT
Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2); // false
Number.isInteger(Math.PI); // false

Number.parseFloat("10"); // 10
Number.parseFloat("10.00"); // 10
Number.parseFloat("238,21"); // 238
Number.parseFloat("237.22"); // 237.22
Number.parseFloat("34 56 78"); // 34
Number.parseFloat(" 37 "); // 37
Number.parseFloat("18 is my age"); // 18

Number.parseInt("10"); // 10
Number.parseInt("10.00"); // 10
Number.parseInt("238,21"); // 238
Number.parseInt("237.22"); // 237
Number.parseInt("34 56 78"); // 34
Number.parseInt(" 37 "); // 37
Number.parseInt("18 is my age"); // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString(); // '11'
(18).toString(); // '18'
(17.3).toString(); // '17.3'

//Object
var passKey = "pass";

var myInfo = {
  name: "Huu Thanh",
  age: 18,
  address: "Ha Noi, VN",
  [passKey]: "1234",
  getName: function () {
    return this.name;
  },
};

// Function ---> Phương thức / Method
// Others ---> Thuộc tính / Property

myInfo["my-email"] = "phuuthanh2003@gmail.com";
myInfo.phone = "0707064154";

var myKey = "address";

delete myInfo.age;

console.log(myInfo);

console.log(myInfo.getName);
console.log(typeof myInfo.getName); //xem kiểu dữ liệu
console.log(myInfo.getName()); //chạy hàm

console.log(myInfo["phonee"]); // ko có key này sẽ là undifined
console.log(myInfo.address); // cách 1
console.log(myInfo["my-email"]); // cách 2
console.log(myInfo[myKey]); // cách 3

//Object constructor

function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Cách 2
// var User = function (firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

var author = new User("Phùng", "Thành", "Avatar");
var user = new User("Hoàng", "Hồ", "Avatar");

author.title = "Chia sẻ dạo tại F8";
user.comment = "liệu có khóa asp.net k ad 🤣";

console.log(author.constructor === User);
console.log(author.getName());
console.log(author);
console.log(user);

//Object prototype - Basic
//1. Prototype là gì?
//2. Sử dụng khi nào?
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var user = new User("Hoàng", "Hồ", "Avatar");
var user2 = new User("Trung", "Kiếm", "Avatar");

User.className = "F8";
console.log(user.className);

User.prototype.className = "F8"; //Thêm vào đối tượng được tạo ra
console.log(user); //Nằm trong _proto_
console.log(user.className);

User.prototype.getClassName = function () {
  return this.className;
};
console.log(user); //Nằm trong _proto_
console.log(user.getClassName);
console.log(user2.getClassName());

//Đối tượng Date

var date = new Date();
var date1 = Date();
console.log(typeof date);
console.log(typeof date1);
console.log(date);
console.log(date1);

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDay());
console.log(date.getHours());

console.log(`${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`);

/* 
Math object

- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()

*/

console.log(Math.PI);
console.log(Math.round(1.49));
console.log(Math.abs(-4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.7));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10)); // random tu 1 den 10

var random = Math.floor(Math.random() * 5);

var bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin"];

console.log(bonus[random]);

var random = Math.floor(Math.random() * 100);

if (random < 50) {
  console.log("Cường hóa thành công!");
}

console.log(Math.min(-100, 1, 90, 50, 40));
console.log(Math.max(-100, 1, 90, 50, 40));
