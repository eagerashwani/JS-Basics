
let arr = [2,4,6,8,9]

let cubeArr = arr.map(function(n){
    return n*n*n
})

console.log("Original Array ", arr)
console.log("Cube Array ", cubeArr)

let namesArr = ['Shivam Verma' , 'Shubham Samrat' , 'Ashish Kumar']
let newArr = namesArr.map(function(n){
    return n.split(' ')
})
console.log(newArr)

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;

let dollars = transactions.map(function(n){
    return (n/inrtToUsd).toFixed(2)
})
console.log(dollars)

let rupee = transactions.map(function(n){
    return (n*inrtToUsd).toFixed(0)
})
console.log(rupee)