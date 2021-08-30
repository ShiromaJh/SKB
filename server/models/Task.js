const { Schema, model } = require('mongoose')

const TaskSchema = new Schema(
  { 
    taskContent: {
      type: String,
      required: true,
    },
    userAssigned: {
      type: String,
      required: true,
    }
  }
)

const Task = model('Task', TaskSchema)

module.exports = Task