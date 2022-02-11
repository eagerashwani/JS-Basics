
const req = require('request')

console.log("Before")
req('https://www.worldometers.info/coronavirus/', function(err, res, body){
    console.log(err)
    console.log(res && res.statusCode)
    console.log(body)
})
console.log("After")