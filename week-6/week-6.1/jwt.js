const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const JWT_SECRET = "amritrajput"
app.use(express.json())

const users = []


app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    users.push({
        username: username,
        password: password
    })
    res.json({
        message: "you are signed in"
    })
    console.log(users);

})
app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = users.find(u => u.username === username && u.password === password)
    if (user) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)
        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            msg: "Invalid username or password"
        })
    }
    console.log(users);

})

app.get('/me', (req, res) => {
    const token = req.headers.token
    const decodedInformation = jwt.verify(token, JWT_SECRET)
    const username = decodedInformation.username


    const user = users.find(u => u.token === token)
    if (user) {
        res.json({
            username: user.username,
            password: user.password
        })
    } else {
        res.json({
            msg: "token invalid"
        })
    }
})

app.listen('3000', () => {
    console.log('server is running...');
})