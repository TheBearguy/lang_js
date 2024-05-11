const coding = ["js", "ruby", "java", "python", "cpp"]
// foreach uses callback function.

// coding.forEach( function (val){ // callback fxn = name of fxn is not there
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // no parentheses, bcoz we jsut have to give the fxn defintion and not actually execute the fxn

// coding.forEach( (item, index, arr)=> { // has access of the particular item, its index and the entire array itself.
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )