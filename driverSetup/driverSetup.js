require('chromedriver')
require('geckodriver')

const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

module.exports = driver