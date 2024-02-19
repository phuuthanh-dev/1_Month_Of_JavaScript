//DOM EVENTS
var h1Elements = document.querySelectorAll("h1");

for (var i = 0; i < h1Elements.length; i++) {
  h1Elements[i].onclick = function (e) {
    console.log(e.target);
    //Ko nên sử dụng h1Elements[i]
    //sau khi load document i đã là 4 nên sau khi click thì h1Elements[4] nên k đc
  };
}

// 1. Input / select
var inputValue;
var inputElement = document.querySelector('input[type="text"]');
inputElement.oninput = function (e) {
  inputValue = e.target.value;
  console.log(inputValue);
};

var checkboxElement = document.querySelector('input[type="checkbox"]');
checkboxElement.onchange = function (e) {
  console.log(e.target.checked);
};

var selectElement = document.querySelector("select");
selectElement.onchange = function (e) {
  console.log(e.target.value);
};

// 2. Key up / down
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function (e) {
//   switch(e.which) {
//     case 27:
//        console.log('Exit');
//        break;
//   }
// };

document.onkeydown = function (e) {
  switch (e.which) {
    case 27:
      console.log("EXIT");
      break;
    case 13:
      console.log("SEND CHAT");
      break;
  }
};

// 1. preventDefault: muốn hành vi mặc định k diễn ra như thẻ a

// var aElements = document.anchors;  // phải có name cho thẻ mới lấy đc
var aElements = document.links;

for (var i = 0; i < aElements.length; ++i) {
  aElements[i].onclick = function (e) {
    if (!e.target.href.startsWith("https://f8.edu.vn")) {
      e.preventDefault();
    }
  };
}
var ulElement = document.querySelector("ul");

ulElement.onmousedown = function (e) {
  e.preventDefault();
};

ulElement.onclick = function (e) {
  console.log(e.target);
};

// 2. stopPropagation : dừng sự kiện nổi bọt
document.querySelector("div").onclick = function () {
  console.log("DIV");
};
document.querySelector("button").onclick = function (e) {
  e.stopPropagation();
  console.log("Click me!");
};

// 1.DOM event / Event listener

// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe
var btn = document.querySelector("#bt1");

//CÁCH 1:
// setTimeout(function () {
//   btn.onclick = function () {
//     //Viec 1
//     console.log("Viec 1");

//     //Viec 2
//     console.log("Viec 2");

//     //Viec 3
//     alert("Viec 2");
//   };
// }, 3000);

// btn.addEventListener('click', function(e) {
//   console.log(Math.random());
// })

function viec1() {
  console.log("Viec1");
}

function viec2() {
  console.log("Viec2");
}

btn.addEventListener("click", viec1);
btn.addEventListener("click", viec2);

//CÁCH 2: rõ ràng mạch lạc hơn
// btn.addEventListener('click', function(e) {
//   console.log(Math.random());
// })

// btn.addEventListener('click', function(e) {
//   console.log(Math.random());
// })

setTimeout(function () {
  btn.removeEventListener("click", viec1);
}, 3000);

