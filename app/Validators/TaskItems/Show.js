'use strict'

class Show {
  get validateAll() {
    return true
  }

  get data() {
    return this.ctx.request.params
  }

  get rules() {
    return {
      id: 'exists:task_items,id'
    }
  }

  get messages() {
    return {
      'id.exists': 'Subitem não encontrado'
    }
  }

  async fails(errors) {
    return this.ctx.response.badRequest({ errors })
  }
}

module.exports = Show
