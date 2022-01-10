

const cp = require('child_process')

console.log('Trying to open calculator')
cp.execSync('calc')
console.log('Calculator Opened')


console.log('Trying to open VS code')
cp.execSync('code')
console.log('VScode Opened')


let output = cp.execSync('node test.js')
console.log('Output from :'+ output)