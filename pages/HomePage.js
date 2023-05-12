const BasePage = require("./BasePage");
const HomePageForm = require("./components/HomePageForm")
const LeftSideMenuForm = require("./components/LeftSideMenuForm")

class HomePage extends BasePage{
    constructor() {
        super('personal', [HomePageForm, LeftSideMenuForm]);
    }
}

module.exports = new HomePage();