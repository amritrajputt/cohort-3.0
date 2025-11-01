import express from 'express'
import crypto from "crypto"

const app = express()
app.use(express.json())
let todo = []

const posttodo = (description, status) => {
    if (description && status) {
        const newTodo = {
            id: crypto.randomUUID(),
            description,
            status
        }
        todo.push(newTodo)
        return newTodo
    }
    return null
}

const deleteTodo = (index) => {
    if (index) {
        if (index < 0 || index >= todo.length) {
            return null;
        } else {
            const removed = todo.splice(index, 1)[0];
            return removed;
        }
    }
}


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.delete('/delete/:index',(req,res) => {
    
})


app.post('/post', (req, res) => {
    const { description, status } = req.body
    const newTodo = posttodo(description, status)
    if (newTodo) {
        res.status(201).json({ message: 'Todo added', todo: newTodo })
    } else {
        res.status(400).json({ message: 'Description and status are required' })
    }
})


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})