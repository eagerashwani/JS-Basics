//Normal function

function sayHi(){
    console.log('Hi')
}


//Parameter in function

function add(a,b){
    console.log(a+b)
}

add(2,3)

function sub(a,b){
    console.log(a-b)
}

function mul(a,b){
    console.log(a*b)
}

function divide(a,b){
    console.log(a/b)
}
 // functions are treated as first class citizen in JavaScript

// let sayHi = function(){ // anonymous function
//      console.log('Hi')
// } // function expression


// let add = function(a,b){
//        console.log(a+b)
// }

// add(2,3)


// sayHi()




// var multiply = function (a , b){
//        console.log(a*b)
// }

// multiply(2,3)



//IIFE (Immediately invoked function Expression)


let substract = (function(a ,b){
    console.log(a-b)
})(30 , 20)


