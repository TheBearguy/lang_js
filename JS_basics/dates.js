// Date => Object
let currDate = new Date()
// console.log(currDate);
// console.log(currDate.toDateString());
// console.log(currDate.toLocaleDateString());
// console.log(currDate.toLocaleString());
// console.log(currDate.toTimeString());

let releaseDate = new Date(2024, 2, 9) // year, month, date => default

//releaseDate = new Date("2023-03-19")
releaseDate = new Date("01/14/2022")
//console.log(releaseDate.toLocaleDateString().split("/"));

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(releaseDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

let customizedDate = newDate.toLocaleString("default", {
    weekday: "long", 
})
console.log(customizedDate);