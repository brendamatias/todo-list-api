/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Task = use('App/Models/Task')

const Database = use('Database')

module.exports = async ({ title }) =>
  Database.transaction(async (trx) => {
    const task = await Task.create({ title }, trx)

    return { status: 200, data: { data: task } }
  })
