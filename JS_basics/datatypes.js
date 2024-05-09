"use strict"; // Treat all JS codes as newer version

/* when in browser, in console, normally we'd do this :
------ alert(3+3) ----- and that would return 6 in an alert. 
but we're using nodejs */

console.log(
    3+
    3
) // code readability should be high

let loggedIn = true
let userName = "Goku"
let age = 7
let state;

// Datatypes :
// number => range of 2 ^ 53
// bigint => very big numbers
// string
// boolean = true/false
// symbol = unique, useful in react
// null = standalone value
// undefined = value is not assigned to the variable
console.log(typeof age);
console.log(typeof "Gohan");
console.log(typeof undefined); // undefined
console.log(typeof null); // object