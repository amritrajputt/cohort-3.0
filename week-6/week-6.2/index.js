const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
app.use(express.json());
const users = [];
const JWT_SECRET = "amrit123";

app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    users.push({
        username: username,
        password: password
    })
    res.json({
        msg: 'you are signed up'
    })
})


app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = users.find(u => u.username === username && u.password === password)
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token: token
        })
    } else {
        res.json({
            msg: 'credentials are incorrect'
        })
        return
    }

})


app.get('/get-password', (req, res) => {

    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET)
    if (decodedData.username) {
        const username = req.body.username
        const password = req.body.password

        const user = users.find(u => u.username === username && u.password === password)
        res.json({
            user: user.username,
            password: user.password
        })
    }
})

app.listen('3000')