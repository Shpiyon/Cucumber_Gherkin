class BankAccountsForm {
    constructor() { }


    get bank_account_form() {
        return { css: '[.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12]' }
    }

    get create_new_button() {
        return { css: '[data-test="bankaccount-new"]' }
    }

    get delete_button() {
        return { css: '[data-test="bankaccount-delete"]' }
    }

    get bank_account_name() {
        return { id: 'bankaccount-bankName-input' }
    }

    get bank_account_routing_number() {
        return { id: 'bankaccount-routingNumber-input' }
    }

    get bank_account_account_number() {
        return { id: 'bankaccount-accountNumber-input' }
    }

    get save_button() {
        return { css: '[data-test="bankaccount-submit"]' }
    }

    get last_bank_account() {
        return { css: "ul[data-test='bankaccount-list'] li:nth-last-child(-n + 1) div p" }
    }

}

module.exports = BankAccountsForm;