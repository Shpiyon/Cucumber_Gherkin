const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const help = require('../../api')
const Controller = require('../../Controller/controller');
const driver = require('../../driverSetup/driverSetup');
const until = require("selenium-webdriver/lib/until")


When('On the {string} page fill in {string} with created user username', async function (page, element) {
    await Controller.type(page, element, help.createNewUser())
})

Then('The {string} page should be open and {string} is displayed', async function (page, element) {
    await driver.wait(until.elementLocated({ css: "[role='dialog']" })).isDisplayed()
});