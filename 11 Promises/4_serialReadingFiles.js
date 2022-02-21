const fs = require("fs");

let myPromise = fs.promises.readFile("file.txt");
let myPromise2 = fs.promises.readFile("f2.txt");
let myPromise3 = fs.promises.readFile("f3.txt");

myPromise.then(function (data) {
  console.log("Data is " + data);
  myPromise2.then(function (data) {
    console.log("Data is " + data);
    myPromise3.then(function (data) {
      console.log("Data is " + data);
    });
  });
});
