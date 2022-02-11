const request = require("request");
const cheerio = require("cheerio");
const { html } = require("cheerio/lib/api/manipulation");

request(
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary",
  handleLBCcb
);

handleLBCcb(err, res, html){
    if(err){
        console.log(err)
    }
    else{
        handleLBC(html)

    }
}

handleLBC(html){
    let allHtml = cheerio.load(html)
    
}