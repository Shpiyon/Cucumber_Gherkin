const BasePage = require("./BasePage");
const HomePageForm = require("./components/HomePageForm")
const LeftSideMenuForm = require("./components/LeftSideMenuForm")

class HomePage extends BasePage{
    constructor() {
        super('personal');
        this.HomePageForm = HomePageForm;
        this.LeftSideMenuForm = LeftSideMenuForm;
    }

    get pageTitle() {
        cy.get('[data-test="app-name-logo"]')
    }
}

module.exports = new HomePage();