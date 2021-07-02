/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Task = use('App/Models/Task')

module.exports = async () => {
  const tasks = await Task.query()
    .with('items', (builder) => builder.orderBy('content'))
    .orderBy('title')
    .fetch()

  return { status: 200, data: { pagination: tasks.pagination, data: tasks.rows } }
}
