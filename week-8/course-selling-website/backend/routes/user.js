const { Router } = require('express')
const userRouter = Router()

const createUserRoutes = (app) => {
    userRouter.post('/signup', (req, res) => {

    })

    userRouter.post('/login', (req, res) => {

    })
    userRouter.get('/purchases', (req, res) => {

    })
}

module.exports = {
    userRouter: userRouter
}