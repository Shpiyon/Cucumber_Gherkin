const BasePage = require("./BasePage");
const SignUpForm = require("./components/SignUpForm")

class SignUpPage extends BasePage{
    constructor() {
        super('signup');
        this.SignUpForm = SignUpForm;
    }

    get signUpTitle(){
        return cy.get('[data-test="signup-title"]')
    }

}

module.exports = new SignUpPage();