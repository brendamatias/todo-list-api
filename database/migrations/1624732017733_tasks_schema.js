'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TasksSchema extends Schema {
  up() {
    this.createExtensionIfNotExists('uuid-ossp')
    this.create('tasks', (table) => {
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'))
      table.string('title', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('tasks')
  }
}

module.exports = TasksSchema
