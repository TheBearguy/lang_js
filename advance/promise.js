const promiseOne = new Promise(function (resolve, reject) {
    // DO any Async Tasks
    // DB Calls, Cryptography, Networks
    setTimeout(
        function(){
            console.log("Async task is done")
            resolve()
        }, 1000)
})

promiseOne
.then(function () {
    console.log("Promise Consumed");
})


new Promise(function (resolve, reject) {
    setTimeout(
        function(){
            console.log("Async task 2 is done")
            resolve()
        }, 1000)
})
.then(function () {
    console.log("Async 2 is resolved");
});


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username: "Goku", email: "ok@google.com"})
}, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour  = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let haserror = true
        if (!haserror) {
            resolve({username: "Gohan", pwd: "123"})
        } else {
            reject("E : Error encountered")
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive () {
try {
    const response = await promiseFive
    console.log(response);
} catch (error) {
    console.log(error);
}
}

consumePromiseFive()


// async function getUserData () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
//     }

// getUserData()

fetch('https://api.github.com/users/bugbreaker18')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// // promise.all
// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.