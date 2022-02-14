// Find returns the first element of the array that satisy the condition

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
let firstWithdrawl = transactions.find(function(n){
    return n<0
})
console.log(firstWithdrawl)