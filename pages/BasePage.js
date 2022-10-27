const SignInForm = require('./SignIn/SignInForm')

class BasePage {
  constructor(path, forms) {
    if (!(Array.isArray(forms))) {
      throw new Error("Array expected")
    }
    this.path = path
    this.forms = forms
    this.elements = new Map()
    this.mapClassMethods()
    console.log(this.elements)
  }

  open() {
    cy.visit(this.path)
  }

  getElement(nameOfElement) {
    throw new Error("did not implemented");
  }

  mapClassMethods = () => {
    this.forms.forEach(classValue => {
      let func_names = Object.getOwnPropertyNames(SignInForm.prototype)
          .filter(func_name => typeof classValue[func_name] === 'object')
      func_names.forEach(funcname => {
        this.elements.set(funcname.replace(new RegExp(/_/g), ' '), classValue[funcname])
      })
    })
  }
}

const bs = new BasePage('', [new SignInForm()])

module.exports = BasePage
