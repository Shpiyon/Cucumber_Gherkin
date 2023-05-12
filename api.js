const { expect } = require('chai');
const axios = require('axios');
const { backendUrl, baseUrl } = require("./pages/index");
const driver = require('./driverSetup/driverSetup');
const generate = require('./generator')


let cookie
let cookieName
let cookieValue

class ApiClient {
  constructor() { }

  async createNewUser() {
    return axios.post(`${backendUrl}users`,
      generate.generateUser(),
      { 'Content-Type': 'application/json' }
    ).then((resp) => {
      expect(resp.status).to.eq(201)
      return resp.data.user.username
    })
  }

  async loginUser(username) {

    return await axios.post(`${backendUrl}login`,
      {
        "type": "LOGIN",
        "username": username,
        "password": "s3cret"
      },
      {
        'Content-Type': 'application/json',
        withCredentials: true
      }
    ).then(async function (resp) {
      expect(resp.status).to.eq(200)
      cookie = resp.headers['set-cookie'][0]
      cookieName = cookie.match(/^.*?(?==)/)[0]
      cookieValue = cookie.match(/.{12}(.*?);/)[1]
      const userObj = JSON.stringify(resp.data)
      const localStorageData = `{"actions":[],"activities":{},"meta":{},"events":[],"value":"authorized","context":${userObj},"_event":{},"_sessionid":"x:0","event":{}}`
      await driver.executeScript(`window.localStorage.setItem('authState', '${localStorageData}')`)
      await driver.manage().addCookie({ name: cookieName, value: cookieValue })
      return resp.data.user.id
    })
  }


  async createBankAcc(username) {
    let bankAccInfo = generate.generateBankAccount()
    await this.loginUser(username).then(userId => {
      let data = JSON.stringify({
        "operationName": "CreateBankAccount",
        "query": "\n  mutation CreateBankAccount($bankName: String!, $accountNumber: String!, $routingNumber: String!) {\n    createBankAccount(\n      bankName: $bankName\n      accountNumber: $accountNumber\n      routingNumber: $routingNumber\n    ) {\n      id\n      uuid\n      userId\n      bankName\n      accountNumber\n      routingNumber\n      isDeleted\n      createdAt\n    }\n  }\n",
        "variables": {
          "userId": userId,
          "bankName": bankAccInfo.bankName,
          "accountNumber": bankAccInfo.accountNumber,
          "routingNumber": bankAccInfo.routingNumber
        }
      })

      let config = {
        method: 'post',
        url: `${backendUrl}graphql`,
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `${cookieName}=${cookieValue}`
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          console.log(error)
        });
    })
  }

  checkUserBankAccountsList() {
    let data = JSON.stringify({
      "operationName": "ListBankAccount",
      "query": "\n  query ListBankAccount {\n    listBankAccount {\n      id\n      uuid\n      userId\n      bankName\n      accountNumber\n      routingNumber\n      isDeleted\n      createdAt\n      modifiedAt\n    }\n  }\n"
    });

    let config = {
      method: 'post',
      url: `${backendUrl}graphql`,
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `${cookieName}=${cookieValue}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.dir(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}


module.exports = new ApiClient()