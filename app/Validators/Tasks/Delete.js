'use strict'

class Delete {
  get validateAll() {
    return true
  }

  get data() {
    return this.ctx.request.params
  }

  get rules() {
    return {
      id: 'exists:tasks,id'
    }
  }

  get messages() {
    return {
      'id.exists': 'Item não encontrado'
    }
  }

  async fails(errors) {
    return this.ctx.response.badRequest({ errors })
  }
}

module.exports = Delete
