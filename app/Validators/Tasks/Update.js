'use strict'

class Store {
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
      id: 'exists:tasks,id',
      title: 'required'
    }
  }

  get messages() {
    return {
      'id.exists': 'Item não encontrado',
      'title.required': 'Informe o título do item'
    }
  }

  async fails(errors) {
    return this.ctx.response.badRequest({ errors })
  }
}

module.exports = Store
