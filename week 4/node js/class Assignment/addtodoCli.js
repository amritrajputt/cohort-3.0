const fs = require("fs")                                            
const {Command} = require("commander")       
const { json } = require("stream/consumers")
const program = new Command()                                           
const file = "todos.json"

const addTodo = (task) => {
    let todos  = []
    if(fs.existsSync(file)){
        const data = fs.readFileSync(file,"utf-8")
        todos  = data ? JSON.parse(data) : []
    }
    todos.push({task,done: false})
    fs.writeFileSync(file,JSON.stringify(todos,null,2))
    console.log(`✅ Todo added: "${task}"`);
}

program
  .name("addtodos")
  .description("CLI to add todo")
  .version("0.0.1");

program
  .command("add <task>")
  .description("Add a new todo")
  .action(addTodo);


    program.parse()