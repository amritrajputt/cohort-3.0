const express = require("express")
const app = express()

// function to check age

const checkAge = (age) => {
    if(age >= 14){
        return true
    }else{
        return false
    }
}
const checkAgeUsingMiddleware = (req,res,next) => {
     if(age >= 14){
        next()
    }else{
        res.json({
            msg: "sorry you are not of age yet",
        })
    }
}

app.get('/ride1',(req,res) => {
    if(checkAge(req.query.age)){
        res.json({
        mdg: "you have successfully riden the ride 1"
    })
    }else{
        res.status(411).json({
            msg:"sorry you are not of age yet"
        })
    }

})

app.get('/ride2',(req,res) => {
    if(checkAge(req.query.age)){
        res.json({
        mdg: "you have successfully riden the ride 2"
    })
    }else{
        res.status(411).json({
            msg:"sorry you are not of age yet"
        })
    }

})
app.listen(3000)