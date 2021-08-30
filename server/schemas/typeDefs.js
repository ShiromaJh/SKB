// import the gql tagged template function
const { gql } = require('apollo-server-express')

// create our typeDefs
const typeDefs = gql`
    type Task {
        _id: ID
        taskContent: String
        userAssigned: String
    }
    type List {
        _id: ID
        listTitle: String
        task: [Task]
    }
    type Kanban {
        _id: ID
        kanbanTitle: String
        list: [List]
        username: String
    }
    type User {
        _id: ID
        username: String
        password: String
        kanban: [Kanban]
        friends: [User]
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        kanbans(username: String): [Kanban]
        kanban(_id: ID!): Kanban
        task: [Task]
    }
    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, password: String!): Auth
        addKanban(kanbanTitle: String!): Kanban
        addList(kanbanId: ID!, listTitle: String!): Kanban
        addTask(listId: ID!, taskContent: String!, userAssigned: String!): List
        addFriend(friendId: ID!): User
    }
    type Auth {
        token: ID!
        user: User
    }
`

// export the typeDefs
module.exports = typeDefs