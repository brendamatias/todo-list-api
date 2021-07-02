'use strict'

const mediator = use('App/Mediators/Tasks')

class TaskController {
  async index({ response }) {
    const { status, data } = await mediator.All()

    return response.status(status).send(data)
  }

  async store({ request, response }) {
    const { status, data } = await mediator.Store(request.only('title'))

    return response.status(status).send(data)
  }

  async update({ request, response, params }) {
    const { status, data } = await mediator.Update(params.id, request.only('title'))

    return response.status(status).send(data)
  }

  async delete({ response, params }) {
    const { status, data } = await mediator.Delete(params.id)

    return response.status(status).send(data)
  }
}

module.exports = TaskController
