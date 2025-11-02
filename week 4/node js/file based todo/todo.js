import express from 'express';
const fs = require("fs");

const app = express();
app.use(express.json());

// Add a todo
app.post('/addTodo', (req, res) => {
    const { description, status } = req.body;
    if (!description || !status) {
        return res.status(400).json({ message: 'Description and status are required' });
    }
    const newTodo = { todo: description, todoStatus: status };
    fs.readFile("todos.json", "utf-8", (error, data) => {
        let todos = [];
        if (!error && data) {
            try { todos = JSON.parse(data); } catch { todos = []; }
        }
        todos.push(newTodo);
        fs.writeFile("todos.json", JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Error writing file" });
            }
            res.status(201).json({ message: 'todo added', todo: newTodo });
        });
    });
});

// Delete a todo
app.delete('/delete/:index', (req, res) => {
    const index = parseInt(req.params.index,10);
    fs.readFile("todos.json", "utf-8", (err, data) => {
        let todos = [];
        if (!err && data) {
            try { todos = JSON.parse(data); } catch { todos = []; }
        }
        if (typeof index !== "number" || index < 0 || index >= todos.length) {
            return res.status(400).json({ message: 'Provide a correct index' });
        }
        const [removedTodo] = todos.splice(index, 1);
        fs.writeFile("todos.json", JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Error writing file" });
            }
            res.status(200).json({ message: 'todo deleted', todo: removedTodo });
        });
    });
});

// Update a todo
app.put('/post/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const updates = req.body;
    fs.readFile("todos.json", "utf-8", (err, data) => {
        let todos = [];
        if (!err && data) {
            try { todos = JSON.parse(data); } catch { todos = []; }
        }
        if (typeof index !== "number" || index < 0 || index >= todos.length) {
            return res.status(400).json({ message: 'Provide a correct index' });
        }
        if (!updates || typeof updates !== "object") {
            return res.status(400).json({ message: 'Updated todo object required' });
        }
        todos[index] = { ...todos[index], ...updates };
        fs.writeFile("todos.json", JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Error writing file" });
            }
            res.status(200).json({ message: 'todo updated', todoUpdated: todos[index] });
        });
    });
});

// Get all todos
app.get('/todos', (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        let todos = [];
        if (!err && data) {
            try { todos = JSON.parse(data); } catch { todos = []; }
        }
        res.status(200).json({ todos });
    });
});

// Home route
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8000);

