class SignUpForm{
    constructor() {}

    get signUpForm(){
        return cy.get('[action="#"]')
    }

    get firstNameInput(){
        return cy.get('[data-test ="signup-first-name"]')
    }

    get firstNameInputErrorText() {
        return this.firstNameInput.find('#firstName-helper-text')
    }

    get lastNameInput(){
        return cy.get('[data-test ="signup-last-name"]')
    }

    get lastNameInputErrorText() {
        return this.lastNameInput.find('#lastName-helper-text')
    }

    get userNameInput(){
        return cy.get('[data-test ="signup-username"]')
    }

    get userNameInputErrorText() {
        return this.userNameInput.find('#username-helper-text')
    }

    get passwordInput(){
        return cy.get('[data-test ="signup-password"]')
    }

    get passwordInputErrorText() {
        return this.passwordInput.find('#password-helper-text')
    }

    get confirmPasswordInput(){
        return cy.get('[data-test ="signup-confirmPassword"]')
    }

    get confirmPasswordInputErrorText() {
        return this.confirmPasswordInput.find('#confirmPassword-helper-text')
    }

    get submitButton(){
        return cy.get('[data-test="signup-submit"]')
    }

    get signInLink(){
        return cy.get('[href="\/signin"]')
    }
}

module.exports = new SignUpForm()