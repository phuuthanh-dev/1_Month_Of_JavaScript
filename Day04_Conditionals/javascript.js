// Câu lệnh rẽ nhánh - If else

var date = 2;

if (date === 2) {
  console.log("Hôm nay là thứ 2");
} else if (date === 3) {
  console.log("Hôm nay là thứ 3");
} else if (date === 4) {
  console.log("Hôm nay là thứ 4"); //Chỉ lọt vào 1 nhánh đúng đầu tiên
} else {
  console.log("Không biết");
}

function run(a) {
  //
  if (a % 15 == 0) {
    return 3;
  } else if (a % 5 == 0) {
    return 2;
  } else if (a % 3 == 0) {
    return 1;
  }
}

// Kỳ vọng
console.log(run(3)); // 1
console.log(run(5)); // 2
console.log(run(15)); // 3

// Câu lệnh rẽ nhánh -Switch

var date = 2;

switch (date) {
  case 2: // ===
    console.log("Hôm nay là thứ 2");
    break;
  case 3:
    console.log("Hôm nay là thứ 3");
    break;
  case 4:
    console.log("Hôm nay là thứ 4");
    break;
  case 5:
    console.log("Hôm nay là thứ 5");
    break;
}

var date1 = 2;

switch (date1) {
  case 2: // ===
  case 3:
  case 4:
    console.log("Hôm nay là thứ 2, 3, 4");
    break;
  case 5:
    console.log("Hôm nay là thứ 5");
    break;
  default:
    console.log("Không biết");
}

// if else: < > !==

// Toán tử 3 ngôi - Ternary operator

var course = {
  name: 'Javascript',
  coin: 250
}

// if (course.coin > 0){
//   console.log(`${course.coin} Coins`);
// } else {
//   console.log('Miễn phí');
// }

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result);

var a = 1;
var b = 2;
var c = a > 0 ? a : b;