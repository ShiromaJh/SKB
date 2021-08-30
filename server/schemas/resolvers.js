const { Kanban, List, Task, User } = require("../models")
const { AuthenticationError } = require("apollo-server-express")
const { signToken } = require("../utils/auth")

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-_v -password")
          .populate("kanban")
          .populate("friends")
        return userData
      }

      throw new AuthenticationError("Not logged in")
    },
    kanbans: async (parent, { username }) => {
      const params = username ? { username } : {}
      return Kanban.find(params)
      // kanban: async () => {
      //   return Kanban.find().populate({
      //     path: 'list', populate: { path: 'task' }
      //   })
    },
    kanban: async (parent, { _id }) => {
      return Kanban.findOne({ _id })
    },
    users: async () => {
      return User.find().populate("kanban")
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("friends").populate("kanban")
    },
    task: async () => {
      return Task.find()
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)
      const token = signToken(user)

      return { token, user }
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username })

      if (!user) {
        throw new AuthenticationError("Incorrect credentials")
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials")
      }

      const token = signToken(user)
      return { token, user }
    },
    addKanban: async (parent, args, context) => {
      if (context.user) {
        const kanban = await Kanban.create({
          ...args,
          username: context.user.username,
        })
        console.log(kanban)
        await User.findByIdAndUpdate( { _id: context.user._id }, { $push: {kanban: kanban._id } }, { new: true } )

        return kanban
      }

      throw new AuthenticationError('You need to be logged in!')
    },
    addList: async (parent, { kanbanId, listTitle }, context) => {
      if (context.user) {
        const updatedKanban = await Kanban.findOneAndUpdate( { _id: kanbanId }, { $push: { list: listTitle } }, { new: true } )

        return updatedKanban
      }

      throw new AuthenticationError('You need to be logged in!')
    },
    addTask: async (parent, { listId, taskContent, userAssigned }, context) => {
      if (context.user) {
        const updatedList = await List.findOneAndUpdate( { _id: listId }, { $push: { task: { taskContent, userAssigned } } }, { new: true } )

        return updatedList
      }

      throw new AuthenticationError('You need to be logged in')
    }
  }
}

module.exports = resolvers
