let score = "18Mar"

//console.log(score);
//console.log(typeof score);

let scoreNumber = Number(score)
// "18Mar" => NaN
// "18" => 18
// true => 1; false => 0
// undefined => undefined
//console.log(typeof scoreNumber);
//console.log(scoreNumber);
let isLoggedIn = "Goku"
let isLoggedInBool = Boolean(isLoggedIn)
//console.log(isLoggedInBool);
// "Goku" => true
// "" => 0
// "1" => true, "0" => false
// 

let custId = 29947

let custIdString = String(custId)
// console.log(typeof custIdString);
// console.log(custIdString);


// =========================Operations=================================//
// Basic Arithematic operations are as they are normally.

let userName = "Goku"
let fakeName = "Golu"
//console.log(userName + " " + fakeName);
// console.log(1 + 2);
// console.log("1" + "2")
// The inconsistencies are here:
// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + "2" + "2"); //122
// console.log(1 + 2 + "2"); //32
// console.log("1" + 2 + "2"); //122
// Actual Concept => Primitive rules (check ecma docs on ToPrimitives)
// The type thats encountered first often determines the type thats taken into considerration

//console.log(3*4-5%8+10**3) // Poor code. Use Parentheses to maintain readability.

// console.log(+true) // its like +1, 
// // similarly (-true) => -1
// console.log(+""); // "" in numbber is 0
// console.log(-""); // -0

// Postfix and prefix operations are as it is => ++x / --x and x++ / x--
