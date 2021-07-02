'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskItemsSchema extends Schema {
  up() {
    this.create('task_items', (table) => {
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'))
      table.string('content', 255).notNullable()
      table
        .uuid('task_id')
        .references('id')
        .inTable('tasks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.integer('start_at').notNullable()
      table.integer('end_at').notNullable()
      table.boolean('finished').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('task_items')
  }
}

module.exports = TaskItemsSchema
