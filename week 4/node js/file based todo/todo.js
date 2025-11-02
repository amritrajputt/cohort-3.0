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

//function to add to-do
function addTodotofile(description, status) {
    if (!description || !status) {
        return new Error("Description and status are required")
    }
    const newTodo = {
        todo: description,
        todoStatus: status
    }
    fs.readFile("todos.json", "utf-8", (error, data) => {
        let todos = []
        if (!error && data) {
            try {
                todos = JSON.parse(data)
            } catch {
                todos = []
            }
        }
        todos.push(newTodo)
        fs.writeFile("todos.json", JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                console.error("Error writing file:", err);
            }
        })
    })
}

function deleteTodo(index) {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        let todos = [];
        if (!err && data) {
            try {
                todos = JSON.parse(data);
            } catch {
                todos = [];
            }
        }
        if (typeof (index) !== "number" || index < 0 || index >= todos.length) {
            console.error("Provide correct index");
            return;
        }
        todos.splice(index, 1)
        fs.writeFile("todos.json", JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                console.error("Error writing file:", err);
            }
        })
    })

}

function updateTodo(index, update) {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        let todos = [];
        if (!err && data) {
            try {
                todos = JSON.parse(data);
            } catch {
                todos = [];
            }
        }
        if (typeof (index) !== "number" || index < 0 || index >= todos.length) {
            console.error("Provide correct index");
            return;
        }
        if (!update || typeof update !== "object") {
            console.error("Updated todo object required");
            return;
        }

        todos[index] = { ...todos[index], ...update };

        fs.writeFile("todos.json", JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                console.error("Error writing file:", err);
            }
        }
        )

    })
}
app.listen(8000)