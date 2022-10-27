class HomPageForm{
    constructor() {}

    get homePageForm(){
        return cy.get('[data-test="transaction-list"]')
    }

    get contactsTabBTN(){
        return cy.get('[data-test="nav-contacts-tab"]')
    }

    get mineTabBTN(){
        return cy.get('[data-test="nav-personal-tab"]')
    }
}

module.exports = new HomPageForm();