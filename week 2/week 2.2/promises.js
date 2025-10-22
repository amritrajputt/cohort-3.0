const fs = require("fs")
const { rejects } = require("assert")
const { resolve } = require("path")

// Q1>> Simple Promise

// Write a function isEven(num) that returns a Promise.
// Resolves with "Even number" if the number is even.
// Rejects with "Odd number" if the number is odd.

// Test it with .then() and .catch().
// sol:

const isEven = (num) =>{
    return new Promise((resolve,reject)=>{
         if(num === undefined){
            return reject (new Error("num not passed"))
        }
         if(num % 2 == 0)  resolve("Even number");
    else reject("Odd number");
        
    })
}

isEven()
.then((message)=>console.log(message))
.catch((err)=>console.log(err));


// Q2>>> Delayed Message

// Write a function delayedMessage(msg, seconds) that returns a Promise.
// Resolves after seconds seconds with the message msg.
// Example: delayedMessage("Hello World", 3) should log "Hello World" after 3 seconds.

const delayedMessage = (msg, seconds) =>{
    return new Promise((resolve,reject)=>{
        if(msg && seconds){
        setTimeout(() => {
           resolve (msg);
        }, seconds*1000);
    }else{
        return reject(new Error("pass msg and seconds"))
    }
    })
}
delayedMessage("amrit",2)
.then((message)=>console.log(message))
.catch((err)=>console.log(err))

// Q3>> Read & Uppercase

// Using your promisifiedReadfile, read a file and return its content in uppercase.
// Log the result with .then().

const promisifiedReadfile = (path) => {
    return new Promise((resolve,reject)=>{
        if(path){
            fs.readFile(path,"utf-8",(error,data)=>{
                if(error) return reject(error)
                    else {
                    const newdata = data.toUpperCase()
                    // resolve(newdata)
                    fs.writeFile(path,newdata,(error,data)=>{
                        if(error){
                            reject(error)
                        }else{
                            resolve("data to written successfully!...")
                        }
                    })
                } 
            })
        }else{
            return reject (new Error("please paas path"))
        }
    })
}
promisifiedReadfile("./demo.txt")
.then((data) => console.log(data))
.catch((err) => console.log(err))




