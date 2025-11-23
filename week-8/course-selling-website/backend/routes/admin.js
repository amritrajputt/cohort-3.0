const { Router } = require('express')
const adminRouter = Router()
const { adminModel } = require('../db')

const createAdminRouter = (app) => {
    adminRouter.post('/signup', (req, res) => {

    })

    adminRouter.post('/login', (req, res) => {

    })

    adminRouter.post('/', (req, res) => {

    })

    adminRouter.put('/', (req, res) => {

    })

    adminRouter.get('/course/bulk', (req, res) => {

    })
}
module.exports = {
    adminRouter: adminRouter
}