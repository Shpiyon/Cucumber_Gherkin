class NewTransactionForm {
    constructor () {}

    get searchField(){
        return cy.get('[data-test="user-list-search-input"]')
    }

    getUserCardById(userId){
        return cy.get(`[data-test="user-list-item-${userId}"]`)
    }

    get amountInput(){
        return cy.get('#amount')
    }

    get amountInputHelperText(){
        return cy.get('#transaction-create-amount-input-helper-text')
    }

    get commentInput(){
        return cy.get('#transaction-create-description-input')
    }

    get commentInputHelperText(){
        return cy.get('#transaction-create-description-input-helper-text')
    }

    get requestBTN(){
        return cy.get('[data-test="transaction-create-submit-request"]')
    }

    get payBTN(){
        return cy.get('[data-test="transaction-create-submit-payment"]')
    }
}

module.exports = new NewTransactionForm()