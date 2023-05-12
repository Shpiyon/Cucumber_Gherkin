const BasePage = require("../BasePage");
const BankAccountsForm = require("./BankAccountsForm")

class BankAccountsPage extends BasePage{
    constructor() {
        super('bankaccounts', [BankAccountsForm]);
    }

}

module.exports = BankAccountsPage;