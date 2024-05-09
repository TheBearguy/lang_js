const accountId = "abc122"
var accountHolderName = "Chihiro"

// let accountCredentials = {
//     "Email" : "okgoogle@google.com", 
//     "Password" : "Paww"
// }
// This is a javascript object - used for storing structred data, similar like a python dic

// accountId = "deff33" / No No , it doesnt work that way

let accountEmail = "okgoogle@google.com"
accountType = "Savings"
accountHolderName = "Rokuhira"

let accountBenefits;
// ; can / cannot be there
// if not initialised = its 'undefined', similar to None in python.
console.table([accountId,accountEmail, accountHolderName,accountType, accountBenefits])

/*
const - this value will never change, its static
let - a normal Variable
var - has memory issues *Avoid to use*
var has issues in Block Scope and Functional Scope
no identifier while declaration is not a good practice.
*/