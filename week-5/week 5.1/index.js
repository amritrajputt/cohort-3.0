const express = require("express")
const app = express()
/*
Create an HTTP Server
It should have 4 routes

1. http://localhost:3000/sum?a=1&b=2
2. http://localhost:3000/subtract?a=1&b=2
3. http://localhost:3000/multiply?a=1&b=2
4. http://localhost:3000/divide?a=1&b=2

Inputs given at the end after `?` are known as query parameters (usually used in GET requests)

The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)
*/
app.get('/sum', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        ans: a + b
    })
})
app.get('/subtract', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        ans: a - b
    })
})
app.get('/multiply', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        ans: a * b
    })
    
})
app.get('/divide', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    if (b == "0") res.status(403).send(`can't divide by 0`)
    else {
        res.json({
            ans: a / b
        })
    }
})

app.listen('3000',() => {
    console.log("server is running...");
    
})