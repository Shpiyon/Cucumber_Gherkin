class NewTransactionForm {
    constructor() { }

    get searchField() {
        return { css: '[data-test="user-list-search-input"]' }
    }

    getUserCardById(userId) {
        return { css: `[data-test="user-list-item-${userId}"]` }
    }

    get amountInput() {
        return { id: '#amount'}
    }

    get amountInputHelperText() {
        return { id: '#transaction-create-amount-input-helper-text'}
    }

    get commentInput() {
        return { id: '#transaction-create-description-input'}
    }

    get commentInputHelperText() {
        return { id: '#transaction-create-description-input-helper-text'}
    }

    get requestBTN() {
        return { css: '[data-test="transaction-create-submit-request"]' }
    }

    get payBTN() {
        return { css: '[data-test="transaction-create-submit-payment"]' }
    }

    
    get newTransactionFrame(){
        return { class: '.MuiGrid-grid-xs-12.MuiGrid-item.MuiGrid-root'}
    }
}

module.exports = NewTransactionForm