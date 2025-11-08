const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.post("/sum",(req,res) => {
    const a = Number(req.body.a)
    const b = Number(req.body.b)
    res.json({
        ans: a+b
    })
})
app.listen("3000",() => {
    console.log("server is running...");
    
})