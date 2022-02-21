// Promise is an object

let myPromise = new Promise(function(resolve, reject){
    let a = 'Ashwani'
    let b = 'Ashwani'

    if(a===b){
        resolve()
        //It is predefined function that associated with then
    }
    else{
        reject()
    }
})

myPromise.then(function(){
    console.log("Equals")
})

myPromise.catch(function(){
    console.log("Not Equals")
})