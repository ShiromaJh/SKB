const { Schema, model } = require('mongoose')

const KanbanSchema = new Schema(
  { 
    kanbanTitle: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    list: [
      {
        type: Schema.Types.ObjectId,
        ref: 'List'
      }
    ]
  },
  {
    toJSON: {
      getters: true
    }
  }
)

const Kanban = model('Kanban', KanbanSchema)

module.exports = Kanban