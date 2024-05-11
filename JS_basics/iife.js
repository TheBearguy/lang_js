// Immediately invoked function expressions (IIFE)
// Usually when we call the function in the global scope => it causes pollution in the global scope and causes issues in chaining of function execution
// When we want to execute the function right after its declaration
// ( function definition )( function call )
( function enterData() {
    console.log("Data entered in DB");
} )();
// ";" is vimp, if ; is absent, the execution scope of the previous functino is running and is not terminated, so it does not run the other fxn
(() => {
    console.log("Works for arrows as well");
})();

// treat it just like a function

((name)=>{
    console.log(`${name} just logged in`);
})("Goku");
// ( fxn_define )( fxn_call+args )

// Falsy values :

// false, 0, -0, BigInt 0n, "", null , undefined, NaN
// empty string is false

// Truthy values:

// "0", "false", " ", [], {}, function(){}
// anything written in a string is true