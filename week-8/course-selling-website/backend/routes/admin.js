const { Router } = require('express')
const adminRouter = Router()
const { adminModel } = require('../db')
const bcrypt = require('bcrypt')
const { z, email } = require('zod')
const {JWT_ADMIN_PASSWORD} = require('../config')
const jwt = require('jsonwebtoken')

adminRouter.post('/signup', async (req, res) => {

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
        firstname: z.string().min(3).max(30),
        lastname: z.string().min(3).max(20)
    })
    const parsedDataWithSuccess = requiredInput.safeParse(req.body)
    if (!parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }
    const { email, firstname, lastname, password } = parsedDataWithSuccess.data
    try {
        const existing = await adminModel.findOne({ email })
        if (existing) {
            return res.status(400).json({ message: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await adminModel.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashedPassword
        })
        res.json({ message: "You are signed up" })
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
})

adminRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const admin = await adminModel.findOne({
        email: email,
    })
    if (!admin) {
        res.status(403).json({
            message: "User doesn't exist in our DB"
        })
        return
    }
    const passwordMatched = await bcrypt.compare(password, admin.password)
    if (passwordMatched) {
        const token = jwt.sign({
            id: admin._id.toString(),
        },JWT_ADMIN_PASSWORD)
        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

adminRouter.post('/course', (req, res) => {

})

adminRouter.put('/course', (req, res) => {

})

adminRouter.get('/course/bulk', (req, res) => {

})

module.exports = {
    adminRouter: adminRouter
}