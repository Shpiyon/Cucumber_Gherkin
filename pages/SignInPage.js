const {By} = require('selenium-webdriver');

const BasePage = require("./BasePage");
const SignInForm = require("../pages/components/SignInForm")

class SignInPage extends BasePage{
    constructor() {
        super('signin', [SignInForm]);
    }

    
    get signInTitle(){
        return By.className('.MuiTypography-root.MuiTypography-h5')
    }

    getElement(elementName){
        return this.elements.get(elementName)
    }

}

module.exports = new SignInPage();