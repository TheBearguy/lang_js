// "this" => refers to the current context / current object
const user = {
    userName: "Goku", 
    servicePrice: 5999, 
    welcomeMessage: function() {
        // console.log(`${this.userName} , entered the chat!`);
        // console.log(this); // "this" is a way to access the properties and other things of the current context or current obbject.
    }
}

// user.welcomeMessage()
// user.userName = "Gohan"
// user.welcomeMessage()

// "this" may appear to work like call by referecne type but its not quite the same: 
/* 
Difference between call by reference and this :
    Call by reference: Allows direct access to and modification of the original data by passing a reference to it. Changes made within the function affect the original data directly.

    "this" keyword: Provides a way to access properties and methods of the current object within a method or function context. While it allows access to the object's properties and methods, it doesn't directly provide a means to change the reference or memory location of the object itself. Instead, it's used to interact with the current instance of the object.

So, "this" indeed serves as a reference to the current context or object, providing a convenient way to work with its properties and methods within a method or function.
*/

const userTwo = {
    userName: "Gohan", 
    servicePrice: 7999, 
    welcomeMessage: function() {
        console.log(`${this.userName} , entered the chat!`);
        //console.log(this); // "this" is a way to access the properties and other things of the current context or current obbject.
    },
    changeUserName: function(newName) {
        this.userName = newName
        console.log(`userName changed to ${this.userName}`);
    } 
}
// userTwo.welcomeMessage()
// userTwo.changeUserName("Chichi")
// userTwo.welcomeMessage() // once changed, it remains changed (even though in the object userName is explicitly written as "Gohan", it is updated  in the memory)

// "this" => reference to the current context, so  all info about current context is returned.
// in console, when log(this) => returns an  object named "window" (which is basically the window of the browser. all info and details of thw window is accessed)
// in node, in  global scope , this => refers to an empty object, coz there's no context in  the global scope yet.
// inside a function , this => refers to some details about the function. BUT, we cannot access the properties (values) defined inside the function using "this"
function thisInsideFunction() {
    let userName = "Goku"
    console.log(this); // some details
    console.log(this.userName); // undefined
}
// thisInsideFunction()
// Arrow function:
const userFriend = () => {
    console.log(this); // "this" doesnt work inside arrow function // it retursn an empty object
    console.log("Arrow");
}
userFriend()

// Implicit return -> no need to write return 
// when using {} - need to write return
// when using () - no need to write return
const returnType = () => (typeof this)

// console.log(returnType())

const returnObj = () => ({userName: "Amado"}) // to return an obj as well, put it inside parentheses
console.log(returnObj());

const Uid = [1,2,3,4,5,6]
Uid.forEach(function() {}) // type1
Uid.forEach( () => {} ) // type2
Uid.forEach( () => (num1+num2) ) // type3