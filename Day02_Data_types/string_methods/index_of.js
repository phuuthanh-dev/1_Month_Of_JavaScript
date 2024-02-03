// indexOf(): Takes takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

let string = '1 Month Of JavaScript'
console.log(string.indexOf('M'))          // 2
console.log(string.indexOf('Month'))       // 2
console.log(string.indexOf('month'))       // -1
console.log(string.indexOf('a'))          // 12
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1
