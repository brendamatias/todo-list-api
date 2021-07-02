const { LogicalException } = require('@adonisjs/generic-exceptions')

class CustomException extends LogicalException {
  constructor(code, message, status) {
    super({ message, code }, status)
  }
}

module.exports = CustomException
