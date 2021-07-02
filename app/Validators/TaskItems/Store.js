'use strict'

class Store {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      task_id: 'required|exists:tasks,id',
      content: 'required|unique:task_items,content',
      start_at: 'required|integer|range:-1,24',
      end_at: 'required|integer|range:-1,24'
    }
  }

  get messages() {
    return {
      'content.required': 'Informe o conteúdo do subitem',
      'task_id.required': 'Item é obrigatório',
      'task_id.exists': 'Item não encontrado',
      'content.unique': 'Subitem já cadastrado',
      'start_at.required': 'Hora de início é obrigatória',
      'start_at.integer': 'Horário inválido',
      'start_at.range': 'Horário inválido',
      'end_at.required': 'Hora de término é obrigatória',
      'end_at.integer': 'Horário inválido',
      'end_at.range': 'Horário inválido'
    }
  }

  async fails(errors) {
    return this.ctx.response.badRequest({ errors })
  }
}

module.exports = Store
