// Assignment #1 - Trying to code a todo app and store data into the array

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
    if (index !== undefined && index !== null) {
        if (index < 0 || index >= todo.length) {
            return null;
        } else {
            const removedArray = todo.splice(index, 1);
            const removedTodo = removedArray[0];
            return removedTodo;
        }
    }
    return null;
}

const updatedTodo = (index, updates) => {
    if (index !== undefined && index !== null) {
        if (index < 0 || index >= todo.length) {
            return null;
        } else {
            todo[index] = { ...todo[index], ...updates };
            return todo[index];
        }
    }
    return null;
}



app.get('/', (req, res) => {
    res.send('Hello World')
})

app.delete('/delete/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const removedTodo = deleteTodo(index);
    if (removedTodo) {
        res.status(201).json({ message: 'todo deleted', todo: removedTodo })
    } else {
        res.status(400).json({ message: 'Provide a correct index' });
    }
})

app.put('/put/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const updates = req.body;
    const updatedTodotext = updatedTodo(index, updates);
    if (updatedTodotext) {
        res.status(201).json({ message: 'todo updated', todoUpdated: updatedTodotext })
    } else {
        res.status(400).json({ message: 'Provide a correct index' });
    }
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