const { v4: uuidv4 } = require('uuid');

module.exports = {
    generateUser,
    generateByPrefix,
    generateBankAccount,
    
}

function generateByPrefix(prefix = '') {
    return `${prefix}.${uuidv4()}`
  }
  
  
  function generateUser() {
    let firstName = generateByPrefix()
    let lastName = generateByPrefix()
    let username = generateByPrefix()
    let password = 's3cret'
    let confirmPassword = password
  
    return {
      firstName,
      lastName,
      username,
      password,
      confirmPassword
    }
  }
  
  
  function generateBankAccount() {
    let bankName = generateByPrefix()
    let routingNumber = generateByPrefix().substring(1, 10)
    let accountNumber = generateByPrefix().substring(0, 10)
  
    return {
      bankName,
      routingNumber,
      accountNumber
    }
  }
  
  function generateUser() {
    let firstName = generateByPrefix()
    let lastName = generateByPrefix()
    let username = generateByPrefix()
    let password = 's3cret'
    let email = `${generateByPrefix()}@realapp.com`
    let phoneNumber = generateByPrefix()
  
    return {
      firstName,
      lastName,
      username,
      password,
      email,
      phoneNumber
    }
  }

