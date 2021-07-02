const { hooks } = require('@adonisjs/ignitor')
const fs = require('fs')
const path = require('path')

const providerExtensions = {}
const files = fs.readdirSync(path.resolve(__dirname, '../app/Validators/Extensions'))

class CustomFormatter {
  constructor() {
    this.errors = []
  }

  addError(error, field, rule) {
    this.errors.push({ code: rule.toUpperCase(), field, message: error })
  }

  toJSON() {
    return this.errors.length ? this.errors : null
  }
}

hooks.after.providersBooted(() => {
  const Validator = use('Validator')

  Validator.configure({ FORMATTER: CustomFormatter })

  let filename = ''
  files.forEach((file) => {
    filename = file.slice(0, -3)
    // eslint-disable-next-line
    providerExtensions[filename] = require(path.resolve(
      __dirname,
      '../app/Validators/Extensions',
      file
    ))
  })

  Object.entries(providerExtensions).forEach(([name, fn]) => {
    Validator.extend(name, fn)
  })
})
