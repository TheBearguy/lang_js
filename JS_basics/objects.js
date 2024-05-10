// Singleton
// 2 ways to create and use objects => Object Literals , Constructors
// Via Constructors => Singleton object. 
// Via Object LIterals => Non singleton object.

// Via Constructors => Object.create

// Via Object LIterals:

// Symbol
const objSym = Symbol("key1")

const UserOne = {
    name: "Goku",
    "full name": "Goku Saiyan",
    //objSym: "secretkey1", // Incorrect way to use symbol as a key in objects. This has caused objSym to become a string
    [objSym]: "secretKey1",
    age: 20,
    location: "San Torini",
    email: "goku@google.com",
    isLoggedIn: false,
    lastActiveDays: ["Saturday", "Sunday"]
}
// keys are by default considered as string
// Two ways to access object items:
//console.log(UserOne.email);
// console.log(UserOne["email"]); // Note that double quotes are req to access it
// console.log(UserOne.full name);  // If double quotes are explicitly added in keys, then it cant be accessed using . operator
// console.log(typeof UserOne.objSym); // string
// console.log(UserOne[objSym]); // Symbols in objects are accessed using this syntax : objectName[symbol_name]

// Freeze the Object => Lock the object - No further changes can be done
// Object.freeze(UserOne)
// UserOne.age = 22
// console.log(UserOne); // No changes reflected

UserOne.greetigns = function(){
    console.log(`Hello UserOne, ${this.name}`); // Since we are already manipulating an item inside the UserOne object, to access its other items, just use "this"
}
//console.log(UserOne.greetigns());

/*
When you use console.log(UserOne.greetigns);, you're simply referencing the function greetigns that exists within the UserOne object. Since you're not invoking the function with parentheses (), it doesn't execute the function; it just returns a reference to the function itself.
However, when you use console.log(UserOne.greetigns());, you're not only referencing the function but also immediately invoking it by adding parentheses (). This causes the function to execute, and its return value (which in this case is undefined because the function doesn't explicitly return anything) is then logged to the console.
*/

const fbUser = {
    name: "Goku", 
    age: 19,
    verificationDetails: {
        aadhaar: true,
        passport: true
    },
    fullName: {
        userFullName:{
            firstName: "Goku",
            lastName: "Saiyan"
        }
    }, 
    details:{
        email: "goku@mail.com",
        isLoggedIn: false
    }
}

//console.log(fbUser.fullName.userFullName.lastName);

// When getting data from APIs, its possible that we are not certain of the structure of the Object we're receiving so for the objects we are not certain - use ? operator => it checks if the operator is there or not, if there continue
// console.log(fbUser.userFreinds?.friendDetails?.freindName)

// Merge two objects:
const userGoku = {
    1: "a", 
    2: "b"
}
const userGohan = {
    3: "c", 
    4: "d"
}

// Petty way:
// const userMerge = {userGoku, userGohan}
// console.log(userMerge);

const userMerge = Object.assign({}, userGoku, userGohan)  // Object.assign(target_object, source1, source2, ....), {} is the target object, all the objects are merged and stored in it.
//console.log(userMerge);

const userMergeTwo = {...userGoku, ...userGohan} // spread operator is >>>
//console.log(userMergeTwo);

// keys, values, entries
// console.log(Object.keys(fbUser)); // returns all keys in an array format
// console.log(Object.values(fbUser)); // retursn all values in an array format
// console.log(Object.entries(fbUser)); // returns an array of all items where each item in an array format of ['key', 'value]

// Check if a property / item exists inside the object
//console.log(fbUser.hasOwnProperty('isLoggedOut')); // returns boolean

// Destructuring Objects:
// useful in backend APIs and React
// whenever accessing any property of an Object, we do this => Object_name.property_name, this is hectic to do again and again
// instead we create a shortname for that particular property, so that its easy to call it again and again.

// fbUser.fullName.userFullName.firstName

const {verificationDetails} = fbUser 
// console.log(verificationDetails); // now we can access it directly
// we can also give it a nickname if needed
// const {verificationDetails: verify} = fbUser
// for nested objects, you need to follow the same nested structure using object literals. 
const { fullName: { userFullName: { firstName: name } } } = fbUser
// console.log(name);

// APIs => JSON
// keys are strings, values can be strings, number or boolean
// JSON can be an object or an array of objects
// JSON
// [
//     {
//         // key-val paris
//     },

//     {
//         // key-val paris
//     }, 

//     {
//         // key-val paris
//     },

//     {
//         // key-val paris
//     }, 
// ]