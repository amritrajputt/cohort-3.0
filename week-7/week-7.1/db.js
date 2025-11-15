const mongoose = require('mongoose')

const schema = mongoose.schema
const objectId = schema.objectId

const User = {
    name: String,
    email: String,
    password: String,
} 

const Todo = {
    title: String,
    done: Boolean,
    userId: objectId,
}

const UserModel = mongoose.model('users',User)
const TodoModel = mongoose.model('todos',Todo)

module.exports={
    UserModel,
    TodoModel
}