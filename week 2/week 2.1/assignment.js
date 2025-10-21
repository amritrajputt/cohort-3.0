const fs = require("fs")


//  Q1. try to create a promisified version of setTimeOut,fetch,Fs.readFile



//  1. sol:
                const delay = (ms) =>{
                    return new Promise ((resolve,reject) => {
                        if(ms<=0){
                            reject(new Error("Invalid time!"))
                        }else{
                        setTimeout(resolve,ms);
                        }
                    })
                } 
                delay(1000).then(()=>console.log("resolved")).catch((error)=> console.log(error.message));
                





 //   2.sol:       
    
                // fetch is already promisified so no need to wrapping it into a new promise 
                // see it visually

                const fetched = fetch("url.com").then(()=>console.log("hello")).catch(()=>console.log("hiiiii"));
                






    //  3. sol:              
                const fetchFile = (path)=>{
                    return new Promise((resolve,reject)=>{
                        if(path){
                            fs.readFile(path,"utf-8",(error,data)=>{
                                if(error){
                                    reject(error)
                                }else{
                                    resolve(data)
                                }
                        });   
                        }else{
                           reject(new Error("path not given"));
                           return
                        }
                    })
                }
                fetchFile("./b.txt").then((data)=>{console.log(data)})
                .catch((error)=> console.log(error.message));
                 

    