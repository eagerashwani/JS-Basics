
const path = require('path')

let filePath = "C:\\Users\\ipria\\OneDrive\\Desktop\\Dev\\js\\node\\mytext.txt"

let extension = path.extname(filePath)
console.log(extension)

let fileName = path.basename(filePath)
console.log(fileName)

console.log(__dirname)

console.log(__filename)