const { Router } = require('express')
const courseRouter = Router()

const createCourseRoutes = (app) => {
    courseRouter.post('/purchase', (req, res) => {

    })
    
    courseRouter.get('/preview', (req, res) => {

    })

}
module.exports = {
    courseRouter: courseRouter
}