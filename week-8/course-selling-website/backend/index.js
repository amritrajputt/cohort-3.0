const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

const { userRouter } = require('./routes/user')
const { courseRouter } = require('./routes/course')
const { adminRouter } = require('./routes/admin')

app.use('/api/v1/user', userRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/course', courseRouter)

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log("Failed to connect to the database", error)
    }

}
app.listen(3000, () => {
    console.log("server is running...");
})
main()