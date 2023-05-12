const { Given, When, Then, AfterAll, After, Before } = require('@cucumber/cucumber');
const ApiClient = require('../../api')
const driver = require('../../driverSetup/driverSetup')
const Controller = require('../../Controller/controller');
const { baseUrl } = require("../../pages/index")

After(() => {
    Controller.driverClean()
 });

 AfterAll(() => {
     Controller.driverQuit()
 })

Given('I am on the {string} page and {string} is displayed', async function (page, element) {
    await Controller.open(page)
    await Controller.waitUntilElementDisplayed(page, element)

});

When('On the {string} page fill in {string} with {string}', async function (page, inputField, value) {
    await Controller.type(page, inputField, value)
})

When('On the {string} page I click {string}', async function (page, button) {
    await Controller.waitUntilElementDisplayed(page, button)
    await Controller.click(page, button)
});

Then('The {string} page should open and {string} is displayed', async function (page, element) {
    await Controller.waitUntilElementDisplayed(page, element)
});

// Then('On the {string} page the {string} has the value {string}', async function (page, element, value) {
//     await Controller.waitUntilElementDisplayed(page, element)
//     await Controller.vefiryElementsValue(page, element, value)
// });

When('On the {string} page the {string} has the value {string}', async function (page, element, value) {
    await Controller.waitUntilElementDisplayed(page, element)
    await Controller.vefiryElementsValue(page, element, value)
});

Given('As user {string} open page {string}', {timeout: 60 * 1000}, async function (username, page) {
    await driver.get(baseUrl)
    await ApiClient.loginUser(username)
    await ApiClient.createBankAcc(username)
    await Controller.open(page)
});

Given('As a new user open page {string}', {timeout: 60 * 1000}, async function (page) {
    await driver.get(baseUrl)
    let user 
    user = await ApiClient.createNewUser()
    await ApiClient.createBankAcc(user)
    await ApiClient.loginUser(user)
    await Controller.open(page)
});

                                