// Synchronous way of reading data from file

console.log("Before")
const fs = require('fs')
let data = fs.readFileSync('f1.txt')
console.log('Data -> ' + data)
console.log("After")


// Async way of reading file

console.log("Before")
fs.readFile('f1.txt',cb)
function cb(err, data){
    if(err){
        console.log(err)
    }
    else
       console.log('Data is '+ data)
}
console.log("After")