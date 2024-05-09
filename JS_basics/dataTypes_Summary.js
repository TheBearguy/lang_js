/* Data is managed, stored and retrieved from the memory in two ways  (two categories to store and call data):
1. Call by Value - Primitive Data Type
2. Call by  reference  -  Non Primitive Data Type

# Call by Value DataTypes : 7 data types => String, Number, Boolean, null, undefined, Symbol, BigInt
# When these data are called (by calling their variabbles), a COPY of these values is returned.
# So all the changes that are executed will hapen on the copy of that value.

# Call by Reference DataTypes : 3 data types => Array, Object, Function
# When these data are called, direct memory location of where thhese data is stored is returned.
# So all the changes are performed on the actual data in the memory

JS is Dynamically Typed language - Data types need not be declared explicitly
*/

//Symbol is used to make things unique
let userId = Symbol('abc')
let custId = Symbol(10)
let staffId = Symbol('abc')
//console.log((userId === custId) | (custId === staffId) | (userId === staffId)); // 0 => false
// Every Symbol is unique. Even if input to the Symbol() is same.


let bigNumber = 2020202020n // append "n" to make it bigInt

// Reference Types
const listOfCompanies = ["Google", "Nvidia", "OpenAI", "Microsoft"]
const RainbowTable = {
    userName : "Goku",
    pwd : "Gohan", 
    h_pwd : "h220fch"
}
function startAttack(){
    console.log("Start the Attack");
}

//console.log(typeof  startAttack);

// Type of Reference data types is Object, 
// specifically, type of a defined function is 'function-object'



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Call by Value Data Types are stored on => Stack
// Call by Reference DataTypes are stored on => Heap

let postOne = "McLaren"
let postTwo = postOne // Copy of PostOne's contents is passed
postTwo = "Pagani"
console.log(postOne);
console.log(postTwo);
// Both will be different

let carOne = {
    name : "McLaren",
    engine : "v12"
}
let carTwo = carOne // Memory reference of carOne is passed, thus now both carOne and carTwo point towards the same object.
carTwo.name = "Pagani"
console.log(carOne.name);
console.log(carTwo.name);
