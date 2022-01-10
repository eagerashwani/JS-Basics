//variables

// var, let, const

var a;
console.log(a)

// JS is Dynamically Typed lang (means Type specify nhi karna hai)
// JS is single threaded lang (means line by line execution)

a = 5;
console.log(a)

a = 'I am Ashwani'
console.log(a)

a = true
console.log(a)

a = null
console.log(a)

//Numbers
var b = 2
var c = 2.5
var f = 463.654891
console.log(b)
console.log(c)
console.log(f)


//String
var s = 'a'
var s2 = 'i am hero'

//Boolean
var t = true
var ff = false


//undefined
var u;
console.log(u)


//null 
var n =  null
console.log(n)

// var keyword has some problems

//Redeclartion

var b = 'hello'
console.log(b)  //prints hello

var b = 'bye'
console.log(b)   // prints bye

//Overcoming Redeclartion
//using let keyword

let b = 'hello'
console.log(b)  //prints hello

let b = 'bye'
console.log(b)  //Error : Redeclaration Error

b = 'reassign allow'
console.log(b)


//loops


var flag = true
var num = 13

for(var i =2; i*i<=num ; i++){
    if(num%i==0){
        flag = false
        break
    }
}

if(flag==true){
    console.log('prime')
}
else{
    console.log('not prime')
}

//2nd problem with var - scoping

//let is block scoped
//var is function scoped

if(10%2==0){
    let a = 'Number is divided by 2'
    console.log('Thia is block scope',a)
}
console.log(a) // if var use in line 99, it print but now shows error


//const keyword

const a = 5;

const a = 4; //no redeclaration

a = 'hello'  //no reassigning