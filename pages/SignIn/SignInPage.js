const BasePage = require("../BasePage");
const SignInForm = require("./SignInForm")

class SignInPage extends BasePage {
    constructor() {
        super('signin', [SignInForm]);
    }
}

module.exports = SignInPage;
