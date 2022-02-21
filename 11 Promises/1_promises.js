const fs = require('fs')

console.log("Before")

//* Pending State
let promiseVar = fs.promises.readFile('file.txt')

//? Fulfilled and setteled
promiseVar.then(function(data){
    console.log("Data -> "+data)
})

//! Rejected and setteled
promiseVar.catch(function(err){
    console.log(err)
})

console.log("After")
