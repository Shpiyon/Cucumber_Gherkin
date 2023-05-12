class LeftSideMenuForm {
    constructor() { }

    get leftSideMenuFrame() {
        return { css: '.MuiDrawer-docked.MuiDrawer-root > div > div:nth-of-type(2)' }
    }

    get accountBalance() {
        return { css: '[data-test="sidenav-user-balance"]' }
    }

    get homePageBTN() {
        return { css: '[data-test="sidenav-home"]' }
    }

    get myAccountPageBTN() {
        return { css: '[data-test="sidenav-home"]' }
    }

    get bankAccountPageBTN() {
        return { css: '[href="/bankaccounts"]' }
    }

    get notificationsPageBTN() {
        return { css: '[data-test="sidenav-notifications"]' }
    }

    get logoutBTN() {
        return { css: "div[class='MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button']" }
    }
}

module.exports = LeftSideMenuForm;