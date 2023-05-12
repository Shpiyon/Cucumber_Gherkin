const driver = require('../driverSetup/driverSetup')
const until = require("selenium-webdriver/lib/until")
const { baseUrl } = require("../pages/index")
const SignInPage = require('../pages/SignIn/SignInPage')
const SignUpPage = require('../pages/SignUp/SignUpPage')
const BankAccountsPage = require('../pages/BankAccounts/BankAccountsPage')
const { expect } = require("chai")



const Pages = {
    "Sign In": new SignInPage(),
    "Sign Up": new SignUpPage(),
    "Bank Account": new BankAccountsPage()
}

class Controller {
    constructor() { }

    async findAnElement(page, element) {
        return driver.findElement(Pages[page].getElement(element), 10 * 1000)
    }
    async waitUntilElementLocated(page, element) {
        return driver.wait(until.elementLocated(Pages[page].getElement(element)), 10 * 1000)
    }

    async waitUntilElementDisplayed(page, element) {
        await this.waitUntilElementLocated(page, element).then(element => element.isDisplayed())
    }

    async waitUntilElementEnabled(page, element) {
        return driver.wait(until.elementIsEnabled(driver.findElement(Pages[page].getElement(element))), 10 * 1000)
    }

    async waitUntilElementDisabled(page, element) {
        return driver.wait(until.elementIsDisabled(driver.findElement(Pages[page].getElement(element))), 10 * 1000)
    }

    async waitUntilElementVisible(page, element) {
        return driver.wait(until.elementIsVisible(driver.findElement(Pages[page].getElement(element))), 10 * 1000)
    }

    async click(page, element) {
        await this.waitUntilElementEnabled(page, element).then(element => element.click())
    }

    async type(page, element, inputData) {
        await this.waitUntilElementEnabled(page, element).then(element => {
            element.sendKeys(inputData)
        })
    }

    async open(page) {
        await driver.get(`${baseUrl}${Pages[page].path}`)
    }

    async vefiryElementsValue(page, element, value) {
        let text
        text = await driver.findElement(Pages[page].getElement(element)).getText()
        expect(text).eq(value)
    }

    driverClean() {
        driver.manage().deleteAllCookies()
        driver.get('javascript:window.localStorage.clear();');
    }

    driverQuit() {
        driver.quit()
    }
}

module.exports = new Controller()
