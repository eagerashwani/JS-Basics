const request = require("request");
const cheerio = require("cheerio");
const { html } = require("cheerio/lib/api/manipulation");

request(
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary",
  handleLBCcb
);

function handleLBCcb(err, res, body) {
  if (err) {
    console.log(err);
  } else {
    handleHTML(body);
  }
}

function handleHTML(html) {
  let selTool = cheerio.load(html);

  let elemArr = selTool(
    ".d-flex.match-comment-padder.align-items-center .match-comment-long-text"
  );
  let lbc = selTool(elemArr[0]).text();

  console.log(lbc);
}
