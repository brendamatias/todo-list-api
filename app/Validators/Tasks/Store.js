'use strict'

class Store {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      title: 'required|unique:tasks,title'
    }
  }

  get messages() {
    return {
      'title.required': 'Informe o título do item',
      'title.unique': 'Item já cadastrado'
    }
  }

  async fails(errors) {
    return this.ctx.response.badRequest({ errors })
  }
}

module.exports = Store
