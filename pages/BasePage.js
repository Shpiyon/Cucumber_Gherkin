class BasePage {
  constructor(path, forms) {
    console.log("BASEPAGECONSTRUCTOR")
    if (!(Array.isArray(forms))) {
      throw new Error("Array expected")
    }
    this.path = path
    this.forms = forms
    this.elements = new Map()
    this.mapClassMethods()
  }

  open() {
    cy.visit(this.path)
  }

  getElement(nameOfElement) {
    throw new Error("did not implemented");
  }

  mapClassMethods = () => {
    this.forms.forEach(classValue => {
      let classMethodsArray = Object.getOwnPropertyNames(classValue.prototype)
        .filter(item => typeof classValue[item] !== 'function')
      classMethodsArray.forEach((elem) => {
        this.elements.set(elem, classValue.elem)
      })
    })
  }
}

module.exports = BasePage