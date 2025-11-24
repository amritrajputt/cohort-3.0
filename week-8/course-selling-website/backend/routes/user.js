const { Router } = require('express')
const { userModel } = require('../db')
const userRouter = Router()

const createUserRoutes = (app) => {
    userRouter.post('/signup', async (req, res) => {
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
            await userModel.create({
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

    userRouter.post('/login', (req, res) => {

    })

    userRouter.get('/purchases', (req, res) => {

    })
}

module.exports = {
    userRouter: userRouter
}