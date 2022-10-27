const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const help = require('../../helper')

const chrome = require('selenium-webdriver/chrome');
const BasePage = require('../../pages/BasePage');
import {SignInPage} from "../../pages";
//const page = new SignInPage()

const service = new chrome.ServiceBuilder('C:\\JS_projects\\Cucumber_Gherkin\\drivers\\chromedriver.exe');

//driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().forBrowser('chrome')
    .setChromeService(service)
    .withCapabilities(capabilities)
    .build();



Given('I am on the {string}', async function (string) {
    await driver.get(help.createLinkOfDomen(string))
});

When('I\'m on the {string} fill in {string} with {string}', function (page, element, username) {
    //await driver.findElement(SignInForm.userNameInput).sendKeys(username)
    //await driver.findElement(SignInForm.passwordInput).sendKeys(password)
    //console.log(page)
    //console.log(element)
    //console.log(username)
    //console.log("signInForm")
    //console.log(form)
    let elem = SignInPage.getElement(element.toLowerCase())
    console.log(typeof elem)
    console.log(elem)
    //await driver.findElement(elem).sendKeys(username)

});


When('I click login Button', async function () {
    await driver.findElement(By.css("button[type='submit']")).click()
});

Then('the page should be open', async function () {
    let mainPageLogo = By.css('h1[data-test="app-name-logo"]');
    await driver.wait(until.elementLocated(mainPageLogo), 10 * 1000);

    //await driver.findElement(By
    //    .css('h1[data-test="app-name-logo"]')).isDisplayed()

});


AfterAll(async function () {
    await driver.quit();
});
