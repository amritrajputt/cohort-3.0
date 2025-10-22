const { rejects } = require("assert")
const { error } = require("console")
const fs = require("fs")
const path = require("path")

// Q1>> create a promisified version of fs.readfile
// Q2>> create a promisified version of fs.writefile
// Q3>> write a fn: 1.reads the content of a file 2.trims the extra space from the
//                  left and right 3. write it back to the file

// Q1 sol >>>
        const promisifiedReadfile = (path) => {
            return new Promise((resolve,reject) => {
                if(path){
                    fs.readFile(path,"utf-8",(error,data)=>{
                        if(error) reject(error)
                            else resolve(data)
                    })
                }else{
                    return reject(new Error("path not given..."))
                }
            })
        }

        promisifiedReadfile("demo.txt")
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err.message));
        


   // Q2 sol>>>

   const promisifiedWriteFile = (path,text) => {
    return new Promise((resolve,reject)=>{
        if(path){
            fs.writeFile(path,text,(error)=>{
                if(error) reject (error)
              else resolve(`Data written successfully to ${path}`);
            })
        }else{
             return reject(new Error("path not given..."))
        }
    })
   }

   promisifiedWriteFile("demo.txt","new text written by promisified writefile")
   .then((data)=>console.log(data))
   .catch((error)=> console.log(error));
   

// Q3 sol>>>

    const promisifiedCleaner = (path) =>{
        return new Promise((resolve,reject)=>{
            if(path){
                fs.readFile(path,"utf-8",(error,data)=>{
                    if(error){
                        reject(error)
                    }else{
                       const str = data.trim()
                       
                       
                        fs.writeFile(path,str,(error)=>{
                            if(error) reject(error)
                                else resolve(`Data written successfully to ${path}`)
                        })
                    }
                })
            }else{
                return reject(new Error("path not given..."))
            }
        })
    }

    promisifiedCleaner("demo.txt")
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err.message));
    