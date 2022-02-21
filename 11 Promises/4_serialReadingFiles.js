const fs = require("fs");

// I write this Homework
let myPromise = fs.promises.readFile("file.txt");
// let myPromise2 = fs.promises.readFile("f2.txt");
// let myPromise3 = fs.promises.readFile("f3.txt");

// myPromise.then(function (data) {
//   console.log("Data is " + data);
//   myPromise2.then(function (data) {
//     console.log("Data is " + data);
//     myPromise3.then(function (data) {
//       console.log("Data is " + data);
//     });
//   });
// });

// myPromise.then(cb)

// function cb(data){
//   console.log("data is "+ data)
//   let myPromise2 = fs.promises.readFile("f2.txt");
//   myPromise2.then(cb2)
// }

// function cb2(data){
//   console.log("data is "+ data)
//   let myPromise3 = fs.promises.readFile("f3.txt");
//   myPromise3.then(cb3)
// }

// function cb3(data){
//   console.log("Data is "+ data)
  
// }

//Improvemenet


function cb(data){
  console.log("data is "+ data)
  let myPromise2 = fs.promises.readFile("f2.txt");
  return myPromise2
}

function cb2(data){
  console.log("data is "+ data)
  let myPromise3 = fs.promises.readFile("f3.txt");
  return myPromise3
}

function cb3(data){
  console.log("Data is "+ data)
}

myPromise.then(cb).then(cb2).then(cb3).catch(function(err){
  console.log(err)
})