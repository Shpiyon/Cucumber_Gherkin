const BasePage = require("../BasePage");
const SignUpForm = require("./SignUpForm")

class SignUpPage extends BasePage{
    constructor() {
        super('signup', [SignUpForm]);
    }

}

module.exports = SignUpPage;