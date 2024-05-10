// String Declaration
const name = "goku"
const stepCount = 11000
// console.log(name + stepCount + " steps"); Not good syntax to display value of variables and use strings  
console.log(`Hello my name is ${name} and my step count is ${stepCount}`); // Ideal syntax
// THis is String Interpolation

const playerName = "Gohan" // Data type is a string
const userName = new String("Luffy") // String declaration via String Class
// When doing via String Class, the data type is an Object, Plus , the object is such that the index is the key and the character is the value. (The string is converted into the object)
/* playerName = new String("Gohan")
String { "Gohan" }
0: "G"
1: "o"
2: "h"
3: "a"
4: "n"
length: 5
<primitive value>: "Gohan"
*/

/* 
NOTE : Main primitive data types (string, number, boolean) has its own way of creating a corresponding non-primitive data type (object)
1. String:
str = "someString"     // data type is primitive => string
str2 = new String("anotherString")     // data type is non - primitive => object
Similar is for Number and Boolean.
It doesnt work like that for null and undefined (though they are primitive dtypes)
Symbol has a class "Symbol()" but its not used to create an object

All these classes of the dtypes (String(), Number(), etc) are actually called as "WRAPPER Classess"
Wrapper Class - , a wrapper class is a class that encapsulates (wraps) a primitive data type and provides additional functionality or methods. In the context of JavaScript, the wrapper classes are String, Number, Boolean, etc., which wrap around primitive values of strings, numbers, and booleans, respectively.

so "String()" is a constructor that takes in the value and generates a wrapper Object.
new keyword is just for specifying that its a new object.

So the object created by using the wrapper classes have access to all the methods and properties of that correstpongding class
and the primitive dtypes do not have the access to that.

*/

//console.log(playerName.charAt(2)); // But here playerName is a primitive dtype , so ideally it should not have the access to the properties and methods of the String classs

/*
AUTOBOXING / AUTOWRAPPING:
primitive data type values are automatically coerced into corresponding objects when you attempt to access properties or methods on them. This behavior is known as "autoboxing" or "auto-wrapping". 

This is valid for String, Number, BOolean.

When applying methods on primtive datatypes, JS converts them into corresponding object Temporarily, after the work is done, the objects are discarded.

*/

let num = 10;
//console.log(num.toFixed(2)); // Output: "10.00"

let bool = true;
//console.log(bool.toString()); // Output: "true"

const str = "Hello";
//console.log(str.toUpperCase()); // Output: "HELLO"

// Some Methods:
const hotelName = "  Suna-Village  "
//console.log(hotelName.indexOf('-'))
//console.log(hotelName.substring(5, 8))
//console.log(hotelName.slice(-10, 4));
//console.log(hotelName.trim('-')); // trims only whitespaces and newline chars etc.
//console.log(hotelName.trim(' '));
const webUrl = " https://www.google.com/Y%20Combinator%20Startups"
//console.log(webUrl.replace("%20", "-")); // by default replaces only the first occurance
console.log(webUrl.replace(/%20/g, "-")); // adding /g regex will make it replace for all
//Other methods => mdn doc