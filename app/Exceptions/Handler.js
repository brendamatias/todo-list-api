'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, { response }) {
    if (error.name === 'CustomException') return response.status(error.status).send(error.message)

    const errorResponse = {
      code: 'SOMETHING_WENT_WRONG',
      message: 'Estamos com problema agora, tente novamente mais tarde'
    }

    return response.status(error.status || 500).send(errorResponse)
  }
}

module.exports = ExceptionHandler
