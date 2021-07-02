/* eslint-disable camelcase */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const TaskItem = use('App/Models/TaskItem')

const Database = use('Database')

module.exports = async ({ task_id, content, start_at, end_at }) =>
  Database.transaction(async (trx) => {
    const taskItem = await TaskItem.create({ task_id, content, start_at, end_at }, trx)

    return { status: 201, data: { data: taskItem } }
  })
