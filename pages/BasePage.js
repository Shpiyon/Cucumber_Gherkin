const driver = require("../driverSetup/driverSetup")

class BasePage {
  constructor(path, forms) {
    if (!(Array.isArray(forms))) {
      throw new Error("Array expected")
    }
    this.path = path
    this.forms = forms
    this.elements = new Map()
    this.mapClassMethods()
  }

  getElement(elementName) {
    return this.elements.get(elementName)
}

  mapClassMethods = () => {
    this.forms.forEach(classValue => {
      let func_names = Object.getOwnPropertyNames(classValue.prototype)
          .filter(func_name => typeof classValue[func_name] !== 'function')
      func_names.forEach(funcname => {
        this.elements.set(funcname.replace(new RegExp(/_/g), ' '), classValue.prototype[funcname])
      })
    })

  }
}


module.exports = BasePage
