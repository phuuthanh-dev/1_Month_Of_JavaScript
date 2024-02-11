
// 8. Destructuring

var array = ["Javascript", "PHP", "Ruby"];

// var s1 = array[0];
// var s2 = array[1];
// var s3 = array[2];

var [s1, s2, s3] = array;
console.log(s1, s2, s3);

var [s1, , s3] = array;
console.log(s1, s3);

var course = {
  name: "Javascript",
  price: 1000,
  image: "image-address",
  children: {
    name: "ReactJS",
  },
};

// : đặt tên khác cho biến
var {
  name: parentName,
  price,
  children: { name: childName },
  description1 = "default description1",
} = course;
console.log(parentName, price, childName, description1);

// 9. Rest parameters

var [s1, ...rest] = array;
console.log(s1);
console.log(rest);

var course = {
  name: "Javascript",
  price: 1000,
  image: "image-address",
};
var { name, ...rest } = course;
console.log(name);
console.log(rest);

// Lấy những phần tử còn lại, do đằng trc k có nên phần còn lại là tất cả
function print(...params) {
  console.log(params);
}

print(1, 2, 3, 4, 5, 6, 7, 8);

function logger3({ name, price }) {
  console.log(name);
  console.log(price);
}

logger3({
  name: "Ahihi",
  price: 3000,
  description: "Description content",
});

function logger4([a, b, ...rest]) {
  console.log(a);
  console.log(b);
  console.log(rest);
}

logger4([2, 6, 5, 7, 2]);

// 10. Spread operator

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];
var arr3 = [...arr1, ...arr2];
console.log(arr3);

var object1 = {
  name: "Javascript",
};

var object2 = {
  price: 1000,
};

var object3 = {
  ...object1,
  ...object2,
};

console.log(object3);

// Override
var defaultConfig = {
  api: "http://doamin-trang-khoa-hoc",
  apiVersion: "2.0",
  other: "other",
  //
  //
};
var exerciseConfig = {
  ...defaultConfig,
  api: "http://doamin-trang-bai-tap",
};
console.log(exerciseConfig);

//
var array = ["Javascript", "PHP", "Ruby", "Reactive"];
function logger5(a, b, c, d) {
  console.log(a, b, c, d);
}
function logger6(...rest) {
  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}
logger5(...array);
logger6(...array);

// 11. Template literals

function highligh(...rest) {
  console.log(rest);
}

function highlight([first, ...strings], ...values) {
  return values
    .reduce(
      (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
      [first]
    )
    .join(" ");
}

var brand = "F8";
var course = "Javascript";
const html = highlight`Học lập trình ${course} tại ${brand}!`;
highligh`Học lập trình ${course} tại ${brand}!`;
console.log(html);

// var string = ['Chim xanh biết bay'];
// console.log(...string);
