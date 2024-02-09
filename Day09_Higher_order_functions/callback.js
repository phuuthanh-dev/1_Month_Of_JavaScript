// Callback?

// Là hàm (function) được truyển qua đối số
// khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số

function myFunction(param) {
  if (typeof param === "function") {
    param("Học lập trình");
  }
}

function myCallback(value) {
  console.log("Value: ", value);
}

myFunction(myCallback);

//Callback - Phần 2?

// 1. Là hàm
// 2. Truyền qua đối số
// 3. Được gọi là (trong hàm nhận đối số)

var courses = ["Javascript", "PHP", "Ruby"];

//Declaration function
function declarationFunction(course) {}

Array.prototype.map2 = function (callback) {
  var arrayLength = this.length;
  var output = [];
  for (var i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i);
    output.push(result);
  }
  return output;
};

var htmls = courses.map2(function (course) {
  return `<h2>${course}</h2>`;
});

console.log(htmls.join(""));

// var htmls = courses.map(function (course) {
//   return `<h2>${course}</h2>`
// });

// console.log(htmls.join(''));

// forEach2, reduce2, find2, filter2

//////////////////////////////////////////////////////////Bài tập
Array.prototype.myMap = function (cb) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    var result = cb(this[i], i);
    arr.push(result);
  }
  return arr;
};

// Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]
//////////////////////////////////////////////////////////
delete Array.prototype.map2;
delete Array.prototype.myMap;

var courses = ["Javascript", "PHP"];
//1 tham số thì là độ dài = ... (10)
var courses1 = new Array(10);
//Nhiều hơn tham số thì là phần tử
var courses2 = new Array(10, 20);

console.log(courses1);
console.log(courses2);

//cộng thêm 2 phần tử
courses1.push("Javascript", "PHP");
console.log(courses1);

courses.length = 10;
console.log(courses);

for (var i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

for (var index in courses) {
  console.log(courses[index]);
}

//forEach, find, filter, some, every, reduce

////////////////////////////////forEach
//1. Object prototype
//2. For in
//3. hasOwnProperty
Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

var courses = ["Javascript", "PHP", "Ruby"];
courses.length = 10;

courses.forEach2(function (course, index, array) {
  console.log(course, index, array);
});

////////////////////////////////filter
Array.prototype.filter2 = function (callback) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

var courses = [
  {
    name: "Javascript",
    coin: 680,
  },
  {
    name: "PHP",
    coin: 860,
  },
  {
    name: "Ruby",
    coin: 980,
  },
];

var filterCourses = courses.filter2(function (course, index, array) {
  return course.coin > 700;
});

console.log(filterCourses);

//BÀI TẬP MYFILTER
Array.prototype.myFilter = function (cb) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = cb(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};
const numbers = [1, 2, 3, 4];
console.log(
  numbers.myFilter(function (number) {
    return number % 2 === 0;
  })
);

console.log(
  numbers.myFilter(function (number, index) {
    return index % 2 === 0;
  })
);

console.log(
  numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
  })
);
////////////////////////////////some
Array.prototype.some2 = function (callback) {
  var output = false;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        output = true;
        break;
      }
    }
  }
  return output;
};

var courses = [
  {
    name: "Javascript",
    coin: 680,
    isFinish: true,
  },
  {
    name: "PHP",
    coin: 860,
    isFinish: false,
  },
  {
    name: "Ruby",
    coin: 980,
    isFinish: false,
  },
];

var someCourses = courses.some2(function (course, index, array) {
  return course.isFinish;
});

console.log(someCourses);
////////////////////////////////every

//every: true / false
Array.prototype.every2 = function (callback) {
  var output = false;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        output = true;
        continue;
      } else {
        output = false;
        break;
      }
    }
  }
  return output;
};

var courses = [
  {
    name: "Javascript",
    coin: 680,
    isFinish: false,
  },
  {
    name: "PHP",
    coin: 860,
    isFinish: true,
  },
  {
    name: "Ruby",
    coin: 980,
    isFinish: true,
  },
];

var everyCourses = courses.every2(function (course, index, array) {
  return course.coin > 680;
});

console.log(everyCourses);
