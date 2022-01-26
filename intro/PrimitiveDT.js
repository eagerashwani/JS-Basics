let a = 11;

console.log(a, typeof(a))

let b = 2.04
console.log(b, typeof(b))


let c = 52.01014524
console.log(c, typeof(c))


let d = 'Avengers Assemble'
console.log(d, typeof(d))


let e = true
console.log(e, typeof(e))


let f = undefined
console.log(f, typeof(f))

//null primitive data type hai but iska typeof Object hai
let g = null
console.log(g, typeof(g))

//Call by Value
let firstPerson = "Ashwani"
let secondPerson = firstPerson
firstPerson = "Gal Gadot"
console.log(firstPerson)
console.log(secondPerson)