
// Filter returns a new Array conataining Array Elements that satisfies a particular condition

// if the condition stands true it will filter out those elements in a new Array and will discard all the other Elements

// It works on Boolean value where condition is true or false



let arr = [2,4,5,2,7,5,4,8]
let newArr = arr.filter(function(n){
    return n%2==0
})
console.log(newArr)



const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let profitArr = transactions.filter(function(n){
    return n>0
})
console.log(profitArr)