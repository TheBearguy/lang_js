// Arrays = Non Primitive Dtype => Call by Reference 
const listOfId = [1,2,3,4,5, false, "Goku"]
listOfId[3] = 10
//console.log(listOfId);
// even if const is used, the inner element sof the array can be manipulated. but the variable itself cannot be reassigned to something else.

const transList = new Array("gender", "age", "amount", 200)
//console.log(transList);
//array has chain of prototypes
listOfId.push(90)
//console.log(listOfId);
listOfId.pop()
//console.log(listOfId);
//console.log(listOfId.includes(3))
const evenId = listOfId.filter(num => num %2 == 0)
//console.log(evenId);
//             listOfId.forEach(id => console.log(id))
//filter, foreach - take functiona s input
//The reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const numbers = [1, 2, 3, 4, 5];

// Sum of all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
//console.log(sum); // Output: 15
// .join() converts into String
//console.log(listOfId.join());

// slice , splice
const newArray = listOfId.slice(1,3)
// console.log("A" + listOfId);
// console.log(newArray);
// console.log("B" + listOfId);

const newSubArray = listOfId.splice(1,3)
// console.log(newSubArray);
// console.log("C" + listOfId);

// Splice => slice and partition, creates separate arrays

const ministers = ["Doestoeyevsky", "Kafka", "Dr.Brand"]
const adminIds = [1,2,3,4,5]
//ministers.push(adminIds) // push treats its input as a single data entity and simply adds it
//console.log(ministers); // 2d array

const organizn = ministers.concat(adminIds) // to merge two arrays
//console.log(organizn);

// spread operator => good way (breaking a glass)
const ecosystem = [...ministers, ...adminIds]
//console.log(ecosystem);

//flat
const another = [1,2,[3,4,5], 6,7 , [8,2, [1,2,6, 5]], 10] // multidim unorganized array => not a good practice ->simplify it
const real_another = another.flat(Infinity) // input should be = upto which dimensino do we wish to flatten. default => Infinity (solves all)
//console.log(real_another);

// To convert a scraped data from one form to another => from(), of()
const scrapedData  = Array.from("Goku")
//console.log(scrapedData);
const emptyData = Array.from(
    {
        name : "Gohan"
    }
)
console.log(emptyData);
// to convert from object to array, it can be done key-wise, value-wise, until its not defined, empty array is returned.