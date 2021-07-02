'use strict'

class UpdateFinished {
  get validateAll() {
    return true
  }

  get data() {
    return {
      ...this.ctx.request.params,
      ...this.ctx.request.all()
    }
  }

  get rules() {
    return {
      id: 'exists:task_items,id',
      finished: 'required|boolean'
    }
  }

  get messages() {
    return {
      'id.exists': 'Subitem não encontrado',
      'finished.required': 'Informe o status do subitem',
      'finished.boolean': 'Status inválido'
    }
  }

  async fails(errors) {
    return this.ctx.response.badRequest({ errors })
  }
}

module.exports = UpdateFinished
