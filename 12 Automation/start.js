const puppeteer = require('puppeteer')

console.log("Before")

let browerLaunchPromise = puppeteer.launch({
    headless : false
})

browerLaunchPromise.then(function(){
    console.log('Browser Opened')
})


console.log("After")