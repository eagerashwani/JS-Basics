const fs = require('fs')

console.log("Before")

let f1p = fs.promises.readFile('file.txt')
let f2p = fs.promises.readFile('f2.txt')
let f3p = fs.promises.readFile('f3.txt')

function cb(data){
    console.log(" "+ data)
}
//* These func goes into microTask Queue and will execute randomly
f1p.then(cb)
f2p.then(cb)
f3p.then(cb)


console.log("After")