//Khai bao
var arr = new Array;
var courses1 = new Array(10);
//Nhiều hơn tham số thì là phần tử
var courses2 = new Array(10, 20);

console.log(courses1);
console.log(courses2);
//Kiem Tra IsArray
Array.isArray([]);

//Làm việc với Array

var language = ['Javascript', 'PHP', 'Ruby', 'CSS'];
//1. To string
console.log(language.toString())

//2. Join
console.log(language.join(', '))

//3. Pop
console.log(language.pop())

//4. Push
console.log(language.push('Dart', 'Java'))
console.log(language.toString())

//5. Shift
console.log(language.shift())

//6. Unshift
console.log(language.unshift('ABC'))
console.log(language.toString())

//7. Splicing
language.splice(0, 2) //xóa từ bắt đầu từ vị trí 0 và xóa 2 phần tử
console.log(language.toString())

language.splice(1, 0, 'Vi tri') //bắt đầu từ vị trí 0 và chèn vi trí vào
console.log(language.toString())

//8. Concat
var language2 = ['a2', 'b2']
console.log(language.concat(language2))
//tao ra 1 mang moi gop 2 mang con lai

//9. Slicing
console.log(language.slice(1, 3))


//copy mang
console.log(language.slice(0))



////////////////////////////////////////////////////////////////////////////
function joinWithCharacter(array, charactor) {
    return array.join(charactor);
}


// Ví dụ khi sử dụng
var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"




// Viết hàm tại đây
function getLastElement (arr) {
    return arr[arr.length - 1];
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']