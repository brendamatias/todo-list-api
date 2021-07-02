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
      task_id: 'required|exists:tasks,id'
    }
  }

  get messages() {
    return {
      'id.exists': 'Subitem não encontrado',
      'task_id.required': 'Id do item é obrigatório',
      'task_id.exists': 'Item não encontrado'
    }
  }

  async fails(errors) {
    return this.ctx.response.badRequest({ errors })
  }
}

module.exports = UpdateFinished
