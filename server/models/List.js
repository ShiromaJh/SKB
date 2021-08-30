const { Schema, model } = require('mongoose')
const TaskSchema = require('./Task')

const ListSchema = new Schema(
    {
        listTitle: {
            type: String,
            required: true
        },
        task: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Task'
            }
        ]
    },
    {
        toJSON: {
         getters: true
        }
    }
)

const List = model('List', ListSchema)

module.exports = List