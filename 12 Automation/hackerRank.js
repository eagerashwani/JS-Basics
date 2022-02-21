const loginLink = "https://www.hackerrank.com/auth/login";
const puppeteer = require("puppeteer");

let email = "hekag50503@submic.com";
let password = "password";

let page;

let browerLaunch = puppeteer.launch({
  args: ["--start-maximized"],
  headless: false,
  defaultViewport: null,
});

browerLaunch
  .then(function (browserInstance) {
    let newTab = browserInstance.newPage();
    return newTab;
  })
  .then(function (newTabInstance) {
    page = newTabInstance;
    let website = newTabInstance.goto(loginLink);
    return website;
  })
  .then(function () {
    let emailEnterPromise = page.type("input[id='input-1']", email, {
      delay: 100,
    });
    return emailEnterPromise;
  })
  .then(function () {
    let passEnterPromise = page.type("input[id='input-2']", password, {
      delay: 100,
    });
    return passEnterPromise;
  })
  .then(function () {
    let buttonClick = page.click('button[data-analytics="LoginPassword]');
    return buttonClick;
  });
