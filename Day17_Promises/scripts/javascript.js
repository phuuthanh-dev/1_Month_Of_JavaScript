// 3. Promise
// - Sync
// - Async
// - Nỗi đau
// - Lý thuyết, cách hoạt động
// - Thực hành, ví dụ

// Sync / Async

// setTimeout, setInterval, fetch
// XMLHttpRequest, đọc file,
// request animation frame

//sleep
// setTimeout(function () {
//   console.log(1);
// }, 1000);

// console.log(2);

setTimeout(function () {
  console.log("Dòng này sẽ in ra sau");
}, 0);
// setTimeout là tác vụ bất động bộ (async)

console.log("Dòng này sẽ in ra trước"); // Đây là tác vụ đồng bộ (sync)

// Callback hell
// Pyramid of doom

// setTimeout(function () {
//   console.log(1); // viec 1
//   setTimeout(function () {
//     console.log(2); // viec 2
//     setTimeout(function () {
//       console.log(3); // viec 3
//       setTimeout(function () {
//         console.log(4); // viec 4
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// 1. new Promise
// 2. Executor

// 1.. Pending
// 2.. Fulfilled
// 3.. Rejected

// var promise = new Promise(
//   // Executor
//   function (resolve, reject) {
//     // Logic
//     // Thành công: resole()
//     // Thất bại: reject()
//     resolve([
//       {
//         id: 1,
//         name: "Javascript",
//       },
//       {
//         id: 2,
//         name: "NodeJS",
//       },
//     ]);

//     // reject('Có lỗi!')
//   }
// );

// promise
//   .then(function (course) {
//     console.log(course);
//   })
//   .catch(function () {
//     console.log("Failure");
//   })
//   .finally(function () {
//     console.log("Done");
//   });

var promise = new Promise(
  // Executor
  function (resolve, reject) {
    // Logic
    // Thành công: resole()
    // Thất bại: reject()
    resolve();

    // reject('Có lỗi!')
  }
);

promise
  .then(function () {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve([1, 2, 3]);
      }, 1000);
    });
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Done");
  });

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

sleep(2000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return sleep(1000);
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  })
  .then(function () {
    console.log(4);
    return sleep(1000);
  });

///////////////////////////////////////
function hell(value, cb) {
  cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell
hell(1, function (valueFromA) {
  hell(valueFromA + 1, function (valueFromB) {
    hell(valueFromB + 1, function (valueFromC) {
      hell(valueFromC + 1, function (valueFromD) {
        console.log(valueFromD + 1);
      });
    });
  });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
  return new Promise(function (resolve) {
    resolve(value);
  });
}

notHell(1)
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    console.log(value + 1);
  });

/////////////////////////////////////////////////////////////
// 1. promise.resolve
// 2. promise.reject
// 3. promise.all

// Thư viện: output luôn luôn là một promise

var promise = Promise.resolve("Success!");

promise
  .then(function (result) {
    console.log("result: ", result);
  })
  .catch(function (err) {
    console.log("err: ", err);
  });

var promise1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([1]);
  }, 2000);
});

var promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 6000);
});

// var promise2 = Promise.reject('Co loi 2!');

Promise.all([promise1, promise2])
  .then(function (result) {
    var result1 = result[0];
    var result2 = result[1];
    console.log(result1.concat(result2));
  })
  .catch(function (error) {
    console.log(error);
  });
/////////////////////////////////////////////////////////////////////////////
var users = [
  {
    id: 1,
    name: "Quân",
  },
  {
    id: 2,
    name: "Hữu Thành",
  },
  {
    id: 3,
    name: "Quân",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Đi chơi không bạn?",
  },
  {
    id: 2,
    user_id: 2,
    content: "Mấy giờ",
  },
  {
    id: 3,
    user_id: 1,
    content: "7 giờ ^^",
  },
];

// 1. Lấy comments
// 2. Từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng

// Fake API

// 1. Array
// 2. Function, callback
// 3. Promise
// 4. DOM

function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUserByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    resolve(result);
    setTimeout(function () {
      resolve(result);
    }, 1000);
  });
}

// Callback hell
// Promise hell

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUserByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    var commentBlock = document.getElementById("comment-block");
    var html = "";
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  });

