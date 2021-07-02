const CustomException = require('../../Exceptions/CustomException')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Task = use('App/Models/Task')

const Database = use('Database')

module.exports = async (id, { title }) =>
  Database.transaction(async (trx) => {
    const task = await Task.query().where({ id }).transacting(trx).first()

    if (task.title !== title) {
      const existTask = await Task.query().where({ title }).transacting(trx).first()

      if (existTask) {
        throw new CustomException('TASK_UNIQUE', 'Item já cadastrado', 422)
      }
    }

    task.merge({ title })
    await task.save(trx)

    return { status: 200, data: { data: task } }
  })
