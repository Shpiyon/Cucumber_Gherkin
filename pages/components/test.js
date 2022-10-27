const SignInPage = require("../SignInPage")

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
let elements = new Map()
function mapClassMethods(classValue) {
    //console.log(classValue.prototype)
    let classMethodsArray = Object.entries(classValue.prototype).forEach(elem => {
        console.log(elem)
    })
    console.log(classMethodsArray)
        //.filter(item => typeof classValue[item] !== 'function')
    classMethodsArray.forEach((elem) => {
        elements.set(elem, `${classValue.name}.${elem}`)
    })
}
mapClassMethods(SignInForm)
//console.log(SignInPage.mapClassMethods(SignInForm))