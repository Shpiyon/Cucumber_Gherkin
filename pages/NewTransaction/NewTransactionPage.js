const BasePage = require("../BasePage");

const NewTransactionForm = require("./components/NewTransactionForm")
const IncomingTransactionRequestDetailsFrame = require("../components/IncomingTransactionRequestDetailsForm")

class NewTransactionPage extends BasePage{
    constructor() {
        super('transaction/new', [NewTransactionForm, IncomingTransactionRequestDetailsFrame]);
    }

}

module.exports = new NewTransactionPage()