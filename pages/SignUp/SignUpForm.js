class SignUpForm {
    constructor() { }


    get sign_up_title() {
        return { css: '[data-test="signup-title"]' }
    }

    get sign_up_form() {
        return { css: '[action="#"]' }
    }

    get first_name_input() {
        return { id: 'firstName' }
    }

    get first_name_input_error_text() {
        return { id: 'firstName-helper-text' }
    }

    get last_name_input() {
        return { id: 'lastName' }
    }

    get last_name_input_error_text() {
        return { id: 'lastName-helper-text' }
    }

    get user_name_input() {
        return { id: 'username' }
    }

    get user_Name_input_error_text() {
        return { id: 'username-helper-text' }
    }

    get password_input() {
        return { id: 'password' }
    }

    get password_input_error_text() {
        return { id: 'password-helper-text' }
    }

    get confirm_password_input() {
        return { id: 'confirmPassword' }
    }

    get confirm_password_input_error_text() {
        return { id: 'confirmPassword-helper-text' }
    }

    get submit_button() {
        return { css: '[data-test="signup-submit"]' }
    }

    get sign_in_link() {
        return { css: '[href="\/signin"]' }
    }
}

module.exports = SignUpForm;