const express = require("express")
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


app.put("/",(req,res) => {
    
})


app.delete("/",(req,res) => {
    
})



app.listen('3001')