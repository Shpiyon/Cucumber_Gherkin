class HomPageForm {
    constructor() { }

    get homePageForm() {
        return { css: '[data-test="transaction-list"]' }
    }

    get contactsTabBTN() {
        return { css: '[data-test="nav-contacts-tab"]' }
    }

    get mineTabBTN() {
        return { css: '[data-test="nav-personal-tab"]' }
    }

    
    get pageTitle() {
       return { css: '[data-test="app-name-logo"]'}
    }
}

module.exports = HomPageForm;