// basic comparisons work as it is =>    < > >= <= ==

// The problem arises when there is comparison between two different data types.
// Avoid these comparisons - Maintain clean code
// Note that the results of the comparisons may be different as predicted. (thats the glitch)

// console.log("2" > 1);
// console.log("00000002" >= 1);
// console.log(2 > "0010");
// console.log("2"==2)
// console.log("000002" == 2);
// js converts string to number while comparing.
// console.log(null > 0);
// console.log(null == 0);
// console.log(null < 0);
// console.log(null >= 0);

/*
Note : The way comparisons (< > <= >=) and equality check (==) work are different. 
Comparions => convert whatever is there into a number. 
thus for (null >= 0) null is converted to 0, and is 0>=0 yes => true
*/

// thus sometimes "null" is converted to 0 or sometimes NaN. 
// same is for undefined

console.log(undefined > null);
console.log(undefined == null);
console.log(undefined >= null);

// Strict check => "==="
// Checks the value and thee data data types of the two operands as well. 
// if both are equal => true
// else => false

console.log("02" === 2); // false