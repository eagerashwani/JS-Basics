const puppeteer = require('puppeteer')

console.log("Before")

let browerLaunchPromise = puppeteer.launch({
    headless : false,
    args : ["--start-maximized"],
    defaultViewport : null
})

browerLaunchPromise.then(function(browserInstance){
    let newTabPromise = browserInstance.newPage();
    return newTabPromise
}).then(function (newTab){
    let webUrlPromise = newTab.goto('https://pepcoding.com')
    return webUrlPromise
}).then(function (){
    console.log('Website Opened')
}).catch(function(err){
    console.log(err)
})


console.log("After")