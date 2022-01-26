// 3 types : Objects, Functions, Array

let person = {
    name: "Tony Stark",
    age : 41
}
console.log(person,typeof(person))


let arr = [1,2,'sa']
console.log(arr,typeof(arr))


function hello(){
    console.log("hello")
}
console.log(hello,typeof(hello))

//Javascript has 3 data types that are passed by reference: Array, Function, and Object. These are all ///technically Objects, so we’ll refer to them collectively as Objects.


//Call by Reference

let firstPerson = {
    name : "Ashwani",
    age : 24
}

let secondPerson = firstPerson

firstPerson.name = "Gal Gadot"

console.log(firstPerson)
console.log(secondPerson)