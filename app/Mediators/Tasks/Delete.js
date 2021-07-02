/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Task = use('App/Models/Task')

const Database = use('Database')

module.exports = async (id) =>
  Database.transaction(async (trx) => {
    const task = await Task.query().where({ id }).transacting(trx).first()

    await task.delete()

    return { status: 204 }
  })
