const request = require('request')
const cheerio = require('cheerio')


console.log("Before")
request('https://www.worldometers.info/coronavirus/', cb)

function cb(err, res, html){
    if(err){
        console.log(err)
    }
    else{
        handleHtml(html)
    }
}

function handleHtml(html){
    let selTool = cheerio.load(html)
    //console.log(selTool)
    let contentArr = selTool('.maincounter-number span');
    for(let i=0; i<contentArr.length; i++){
        let data = selTool(contentArr[i]).text()
        //console.log(data)
    }
    let totalCases = selTool(contentArr[0]).text()
    let totalDeaths = selTool(contentArr[1]).text()
    let totalRecovery = selTool(contentArr[2]).text()
    console.log('Total Cases = '+ totalCases)
    console.log('Total Deaths = '+ totalDeaths)
    console.log('Total Recovery = '+ totalRecovery)
}
console.log("After")