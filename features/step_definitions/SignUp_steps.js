const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const help = require('../../api')
const Controller = require('../../Controller/controller');


When('I\'m on the {string} page click on the {string}', async function (page, button) {
    await Controller.click(page, button)
});

