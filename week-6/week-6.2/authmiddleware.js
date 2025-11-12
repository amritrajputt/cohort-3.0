const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const JWT_SECRET = "amrit123"
app.use(express.json())

function auth(req, req, next) {
    const token = req.headers.token
    const decodeData = jwt.verify(token, JWT_SECRET)
    if (decodeData.username) {
        next()
    } else {
        res.json({
            msg: "you are not logged in..."
        })
    }

}