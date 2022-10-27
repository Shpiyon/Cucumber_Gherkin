const {By} = require('selenium-webdriver');
const SignInPage = require('./pages/SignIn/SignInPage')

module.exports = {
    createLinkOfDomen,
    //Typer
}

function createLinkOfDomen(domen){
return `http://${domen}`
}

class Typer {
    constructor(method, selector) {
      this.method = method
      this.selector = selector
    }

    async clickOn(){
        await driver.findElement(By.method)(this.selector).click()
    }
  }
