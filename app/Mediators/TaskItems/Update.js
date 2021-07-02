/* eslint-disable camelcase */

const CustomException = require('../../Exceptions/CustomException')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const TaskItem = use('App/Models/TaskItem')

const Database = use('Database')

module.exports = async (id, { content, start_at, end_at, task_id }) =>
  Database.transaction(async (trx) => {
    const taskItem = await TaskItem.query().where({ id }).transacting(trx).first()

    if (taskItem.content !== content) {
      const existTaskItem = await TaskItem.query().where({ content }).transacting(trx).first()

      if (existTaskItem) {
        throw new CustomException('TASK_ITEM_UNIQUE', 'Subitem já cadastrado', 422)
      }
    }

    taskItem.merge({ content, start_at, end_at, task_id })

    await taskItem.save(trx)

    return { status: 200, data: { data: taskItem } }
  })
