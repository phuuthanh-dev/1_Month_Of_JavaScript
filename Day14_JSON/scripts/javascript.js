// 2. JASON
//  1. Là một định dạng dữ liệu (chuỗi)
//  2. JavaScript Object Notation
//  3. JSON thể hiện các loại dữ liệu String, Number, Boolean, Null
//  Array, Object

// Mã hóa / Giải mã
// Encode / decode
// stringify : Từ Javascript types -> JSON
// parse: Từ JSON -> Javascript types

var json1 = "1";
var json2 = "null";
var json3 = '["Javascript","PHP"]';
var json4 = '{"name":"Thanh Phung","age":18}';
var json5 = "true";

console.log(JSON.parse(json5));

console.log(JSON.stringify(1));
console.log(JSON.stringify(true));
console.log(JSON.stringify(["Javascript", "PHP"]));
console.log(JSON.stringify({ name: "Thanh Phung", age: 18 }));
