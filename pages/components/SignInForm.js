class SignInForm {
    constructor() { }

    get signInForm() {
        return { css: '[action="#"]' }
    }

    get alertElement() {
        return { css: '[data-test="signin-error"]' }
    }
    get userNameInput() {
        return { id: 'username' }
    }

    get userNameInputErrorText() {
        return { id: '#username-helper-text' }
    }

    get passwordInput() {
        return { id: 'password' }
    }

    get passwordInputErrorText() {
        return { id: '#password-helper-text' }
    }

    get rememberMeBox() {
        return { css: '[name="remember"]' }
    }

    get submitButton() {
        return { css: '[data-test="signin-submit"]' }
    }

    get signUpLink() {
        return { css: '[href="\/signup"]' }
    }
}

//SignInForm.elements.set('submit', this.submitButton)

module.exports = SignInForm