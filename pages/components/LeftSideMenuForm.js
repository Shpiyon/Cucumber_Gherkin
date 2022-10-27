class LeftSideMenuForm{
    constructor() {}

    get leftSideMenuFrame() {
        return cy.get('.MuiDrawer-docked.MuiDrawer-root > div > div:nth-of-type(2)')
    }

    get accountBalance() {
        return cy.get('[data-test="sidenav-user-balance"]')
    }

    get homePageBTN() {
        return cy.get('[data-test="sidenav-home"]')
    }

    get myAccountPageBTN() {
        return cy.get('[data-test="sidenav-home"]')
    }

    get bankAccountPageBTN() {
        return cy.get('[href="/bankaccounts"]')
    }

    get notificationsPageBTN() {
        return cy.get('[data-test="sidenav-notifications"]')
    }

    get logoutBTN() {
        return cy.get("div[class='MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button']")
    }
}

module.exports = new LeftSideMenuForm();