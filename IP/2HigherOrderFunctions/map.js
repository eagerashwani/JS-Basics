//* HOF are the function that operates on other function
// HOF sirf arrays par hi lgte hai
// HOF apni or inside function ki properties ko array par lga deta hai
// Higher order functions in JS are for Arrays,

// In simple words a higher order function is a function that recieves a function as an arugument
// or returns the function as output 


// Map

// map is itself a function which is predefined in js
//map takes a callback function as an Argumenet
//map will call the callback function as many times as the elemets of the array
//map will retur a new Array
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