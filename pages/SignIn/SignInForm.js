class SignInForm {
    constructor() { }

    get sign_in_page_header() {
        return {css: '.MuiTypography-h5.MuiTypography-root'}
    }

    get sign_in_form() {
        return { css: '[action="#"]' }
    }

    get alert_element() {
        return { css: '[data-test="signin-error"]' }
    }
    get user_name_input() {
        return { id: 'username' }
    }

    get user_name_input_error_text() {
        return { css: "div[data-test='signin-username'] p" }
    }

    get password_input() {
        return { id: 'password' }
    }

    get password_input_error_text() {
        return { css: "div[data-test='signin-password'] p" }
    }

    get remember_box() {
        return { css: '[name="remember"]' }
    }

    get submit_button() {
        return { css: '[data-test="signin-submit"]' }
    }

    get sign_up_link() {
        return { css: '[href="\/signup"]' }
    }
}

module.exports = SignInForm;
