'use strict'

const mediator = use('App/Mediators/TaskItems')

class TaskController {
  async show({ response, params }) {
    const { status, data } = await mediator.Show(params.id)

    return response.status(status).send(data)
  }

  async store({ request, response }) {
    const { status, data } = await mediator.Store(
      request.only(['task_id', 'content', 'start_at', 'end_at'])
    )

    return response.status(status).send(data)
  }

  async update({ request, response, params }) {
    const { status, data } = await mediator.Update(
      params.id,
      request.only(['content', 'start_at', 'end_at', 'task_id'])
    )

    return response.status(status).send(data)
  }

  async updateFinished({ request, response, params }) {
    const { status, data } = await mediator.UpdateFinished(params.id, request.only('finished'))

    return response.status(status).send(data)
  }

  async updateTaskId({ request, response, params }) {
    const { status, data } = await mediator.UpdateTaskId(params.id, request.only('task_id'))

    return response.status(status).send(data)
  }

  async delete({ response, params }) {
    const { status, data } = await mediator.Delete(params.id)

    return response.status(status).send(data)
  }
}

module.exports = TaskController
