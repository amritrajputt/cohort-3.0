const express = require('express')
const bcrypt = require('bcrypt')
const {z} = require('zod')
const { UserModel, TodoModel } = require('./db')
const jwt = require("jsonwebtoken")
const { default: mongoose } = require('mongoose')
const app = express()
app.use(express.json())


mongoose.connect("mongodb+srv://amritrajput:tCB4Oq5LbwbkpCPb@cluster0.m6sem7b.mongodb.net/todo-app-databse")
const JWT_SECRET = "amrit123123123"



app.post('/signup', async (req, res) => {

    //providing schema of input to zod
    const requiredBody = z.object({
        //sssignment 1 uppercase,1lowercase,1 special character
        email:z.string().min(12).max(30).email(),
        password:z.string().min(8).max(100),
        name:z.string().min(3).max(50)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)
    if(!parsedDataWithSuccess.success){
        res.json({
            message: "Incorrect format",
            error : parsedDataWithSuccess.error
        })
        return
    }

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    
   try {
        const hashedPassword = await bcrypt.hash(password,5)
        await UserModel.create({
            email: {type:String,unique: true },
            password: hashedPassword,
            name: name,

        });
    } catch (error) {
        return res.status(400).json({
            message: "User already exists!",
        });
    }

    res.json({
        message: "you are signed up"
    })
})

app.post('/signin', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const user = await UserModel.find({
        email: email
    })
    if(!user) {
        
        res.status(403).json({
            message: "User doesn't exist in our DB"
        })
        return
    }

   const passwordMatch = await bcrypt.compare(password,user.password)

    if (passwordMatch) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)
        res.json({
            token
        })
    } else {
        res.json({
            message: "Incorrect credential"
        })  
    }
})

const auth = (req,res,next) => {
    const token = req.header.token
    const decodedData = jwt.verify(token,JWT_SECRET)
    if(decodedData){
        req.userId = decodedData.id
        next()
    }else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }
}

app.post('/todo',auth, (req, res) => {
    const userId = req.userId
    const title = req.body.title
    const done = req.body.done
    TodoModel.create({
        title,
        userId,
        done
    })
    res.json({
        userId : userId
    })
})

app.get('/todos',auth,async (req, res) => {
    const userId = req.userId
    const todos = await TodoModel.find({
        userId : userId
    })
    res.json({
        todos
    })
})
app.listen(3000)