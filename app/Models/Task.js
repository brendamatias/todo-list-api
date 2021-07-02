'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
  static boot() {
    super.boot()
  }

  items() {
    return this.hasMany('App/Models/TaskItem')
  }
}

module.exports = Task
