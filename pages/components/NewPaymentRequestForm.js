class NewPaymentRequestForm{
    constructor() {}

    get newPaymentRequestForm() {
        cy.get('.MuiGrid-grid-xs-12.MuiGrid-item.MuiGrid-root')
    }

    get SearchInput() {
        this.newPaymentRequestForm().find('#user-list-search-input')
    }
}

module.exports = NewPaymentRequestForm