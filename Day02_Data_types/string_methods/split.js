// split(): The split method splits a string at a specified place.
let string = '1 Month Of JavaScript'
console.log(string.split())     // ["1 Month Of JavaScript"]
console.log(string.split(' '))  // ["1", "Month", "Of", "JavaScript"]
let firstName = 'HuuThanh'
console.log(firstName.split())  // ["HuuThanh"]
console.log(firstName.split(''))  // ["H", "u", "u", "T", "h", "a", "n", "h"]
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(',')) // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', '))   //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]