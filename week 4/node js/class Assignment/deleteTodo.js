const fs = require("fs")
const {Command}= require("commander")
const program  = new Command();
const file = "todos.json"


const deleteTodo = (index) => {
    if (!fs.existsSync(file)) return console.log("No todos found!");
    
    const data = fs.readFileSync(file,"utf-8")
    let todos = JSON.parse(data)
    if(index < 0 || index >= todos.length){
        return console.log("invalid index! ❌");
    }
    const removed = todos.splice(index,1)
    fs.writeFileSync(file,JSON.stringify(todos,null,2))
    console.log(`🗑️ Deleted: "${removed[0].task}"`);
    
}

program
      .command("delete <index>")
      .description("delete a  todo")
      .action(deleteTodo);
      program.parse()