const express = require("express")
const { use } = require("react")
const app = express()
app.use(express.json())
var users =  [{
    name: 'john',
    kidneys:[{
        healthy: false,
       }]
  }]

app.get("/", (req,res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length
    let numberOfHealthyKidneys = 0
    for(let i = 0 ; i< johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys-numberOfHealthyKidneys
    res.json({
        johnKidneys,
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

// do this using using filter 

app.post("/post",(req,res) => {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})


app.put("/put",(req,res) => {
    for(let i =0 ;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true
    }
    res.json({
        msg:"done!"
    })
})


app.delete("/delete",(req,res) => {
    if(isThereatleastoneunhealthyKidney){
         const newKidneys = []
    for(let i= 0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy ){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newKidneys
    res.json({msg:"done"})
    }else{
        res.sendStatus(411)
    }
})

function isThereatleastoneunhealthyKidney(){
    let atleastOneUnhealthyKidney = false
    for(let i = 0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen('3001')