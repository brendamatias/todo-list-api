'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => ({ greeting: 'Hello world in JSON' }))

Route.get('/tasks', 'TaskController.index')
Route.post('/tasks', 'TaskController.store').validator('Tasks/Store')
Route.patch('/tasks/:id', 'TaskController.update').validator('Tasks/Update')
Route.delete('/tasks/:id', 'TaskController.delete').validator('Tasks/Delete')

Route.get('/items/:id', 'TaskItemController.show').validator('TaskItems/Show')
Route.post('/items', 'TaskItemController.store').validator('TaskItems/Store')
Route.put('/items/:id', 'TaskItemController.update').validator('TaskItems/Update')
Route.patch('/items/:id', 'TaskItemController.updateTaskId').validator('TaskItems/UpdateTaskId')
Route.patch('/items/:id/status', 'TaskItemController.updateFinished').validator(
  'TaskItems/UpdateFinished'
)
Route.delete('/items/:id', 'TaskItemController.delete').validator('TaskItems/Delete')
