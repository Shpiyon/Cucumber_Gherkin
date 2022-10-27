const BasePage = require("./BasePage");

const NewTransactionForm = require("./components/NewTransactionForm")
const IncomingTransactionRequestDetailsFrame = require("./components/IncomingTransactionRequestDetailsFrame")

class NewTransactionPage extends BasePage{
    constructor() {
        super('transaction/new');
        this.NewTransactionForm = NewTransactionForm;
        this.IncomingTransactionRequestDetailsFrame = IncomingTransactionRequestDetailsFrame
    }

    get newTransactionFrame(){
        return cy.get('.MuiGrid-grid-xs-12.MuiGrid-item.MuiGrid-root')
    }
}

module.exports = new NewTransactionPage()