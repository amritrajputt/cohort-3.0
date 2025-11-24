const { Router } = require('express')
const adminRouter = Router()
const { adminModel } = require('../db')
const bcrypt = require('bcrypt')
const { z, email } = require('zod')


const createAdminRouter = (app) => {
    adminRouter.post('/signup', async (req, res) => {
        const name = req.body.name
        const username = req.body.username
        const password = req.body.password

        const requiredInput = z.object({
            email: z.string().min(6).max(60).email(),
            password: z.string().min(8).max(20)
                .refine((val) => [...val].some((c) => c => 'A' && c <= "Z"), {
                    message: "Password must contain at least one uppercase letter",
                })
                .refine((val) => [...val].some((c) => c => 'a' && c <= "z"), {
                    message: "Password must contain at least one lowercase letter",
                })
                .refine((value) => [...value].some((c) => c >= '0' && c <= '9'), {
                    message: "Password must contain at least one number",
                }),
            name: z.string().min(3).max(30)
        })
        const parsedDataWithSuccess = requiredInput.safeParse(req.body)
        if (!parsedDataWithSuccess.success) {
            res.json({
                message: "Incorrect format",
                error: parsedDataWithSuccess.error
            })
            return
        }
        try {
            const hashedPassword = await bcrypt.hash(password, 5)
            await adminModel.create({
                name: name,
                email: email,
                password: hashedPassword
            })
        } catch (error) {
            return res.status(400).json({
                message: "User already exists!",
            });
        }
        res.json({
            message: "you are signed up"
        })
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