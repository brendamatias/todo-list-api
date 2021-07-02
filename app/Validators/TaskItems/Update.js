'use strict'

class Update {
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
      task_id: 'required|exists:tasks,id',
      content: 'required',
      start_at: 'required|integer|range:-1,24',
      end_at: 'required|integer|range:-1,24'
    }
  }

  get messages() {
    return {
      'id.exists': 'Subitem não encontrado',
      'content.required': 'Informe o conteúdo do subitem',
      'task_id.required': 'Item é obrigatório',
      'task_id.exists': 'Item não encontrado',
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

module.exports = Update
