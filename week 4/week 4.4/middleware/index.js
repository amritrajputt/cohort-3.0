const express = require("express")
const app = express()

// function to check age

const checkAgeUsingMiddleware = (req,res,next) => {
    const age = req.query.age
     if(age >= 14){
        next()
    }else{
        res.json({
            msg: "sorry you are not of age yet",
        })
    }
}

app.get('/ride1',checkAgeUsingMiddleware,(req,res) => {
        res.json({
        msg: "you have successfully riden the ride 1"
   })

})

app.get('/ride2',(req,res) => {
        res.json({
        mdg: "you have successfully riden the ride 2"
    })
})
app.listen(3000)