const express = require('express')
const { UserModel, TodoModel } = require('./db')
const app = express()


app.post('/signup', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    UserModel.create({
        email: { type: String, unique: true },
        password: password,
        name: name
    })
    res.json({
        message: "you are signed up"
    })
})

app.post('/signin', (req, res) => {
    const email = req.body.email
    const password = req.body.password
})

app.post('/todo', (req, res) => {

})

app.get('/todos', (req, res) => {

})
app.listen(3000)