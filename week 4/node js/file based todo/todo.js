// Assignment #2 - Trying to code a filesystem based todo app and store data into the file
import { error } from 'console'
import crypto from "crypto"
import express from 'express'
const fs = require("fs")

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

// add to do

const addTodo = (description, status) => {
    if (description && status) {
        fs.writeFile("todos.json", description, (error, data) => {
            if (error) {
                return error
            } else {
                const todo = []
                const newTodo = {
                    id: crypto.randomUUID(),
                    description,
                    status
                }
                todo.push(newTodo)
                return newTodo
            }
            return null
        })
    }
}




app.listen(8000)