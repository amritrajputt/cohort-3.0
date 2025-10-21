const { error } = require("console");
const fs = require("fs")

// async code example (reading from a file...)

const content = fs.readFileSync("assignment.txt","utf-8")
console.log(content);
 
const content2 = fs.readFileSync("./b.txt","utf-8") //reading from 2 file synchronously
console.log(content2);


// async code example

fs.readFile("assignment.txt", "utf-8",(error,result) => {
    if(!error) console.log(result);
    else console.log(error); 
})

fs.readFile("b.txt", "utf-8",(error,result) => {
    if(!error) console.log(result);
    else console.log(error);
    
})