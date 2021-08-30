const faker = require('faker')

const db = require('../config/connection')
const { User, Kanban, List, Task } = require('../models')

db.once('open', async () => {
    await Task.deleteMany()
    await List.deleteMany()
    await Kanban.deleteMany()
    await User.deleteMany()

    // create users
    const userData = []

    for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName()
        const password = faker.internet.password()

        userData.push({ username, password })
    }

    const createdUsers = await User.collection.insertMany(userData)

    // create friends
    for(let i = 0; i<100; i += 1) {
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length)
        const { _id: userId } =  createdUsers.ops[randomUserIndex]

        let friendId = userId

        while (friendId === userId) {
            const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length)
            friendId = createdUsers.ops[randomUserIndex]
        }

        await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId }})
    }

    // create Kanban
    let createdKanbans = []
    for (let i = 0; i< 100; i += 1) {
        const kanbanTitle = faker.lorem.word()

        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length)
        const { username, _id : userId } = createdUsers.ops[randomUserIndex]

        const createdKanban = await Kanban.create({ kanbanTitle, username })
        
        await User.updateOne(
            { _id: userId },
            { $push: { kanban: createdKanban._id } }
        )

        createdKanbans.push(createdKanban)
    }

    // create list
    let createdLists = []
    for (let i = 0; i < 250; i +=1) {
        const listTitle = faker.lorem.word()

        const randomKanbanIndex = Math.floor(Math.random() * createdKanbans.length)
        const { _id: kanbanId } = createdKanbans[randomKanbanIndex]
        
        const createdList = await List.create({ listTitle })

        await Kanban.updateOne(
            { _id: kanbanId },
            { $push: { list: createdList._id } }
        )

        createdLists.push(createdList)

    }

    // create tasks
    let createdTasks = []
    for (let i = 0; i < 400; i +=1) {
        const taskContent = faker.lorem.words(Math.round(Math.random() * 3) + 1)
        const userAssigned = faker.name.firstName()

        const randomListIndex = Math.floor(Math.random() * createdLists.length)
        const { _id: listId } = createdLists[randomListIndex]

        const createdTask = await Task.create({ taskContent, userAssigned })

        await List.updateOne(
            { _id: listId },
            { $push: { task: createdTask._id } },
        )

        createdTasks.push(createdTask)
    }
    
    console.log('all done')
    process.exit(0)
})