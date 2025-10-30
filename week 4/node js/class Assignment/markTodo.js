const fs = require("fs")
const {Command} = require("commander")
const program = new Command();
let file = "todos.json"

const markTodo = (index) => {
    if(!fs.existsSync(file))  return console.log("No todos found!");

    const data = fs.readFileSync(file,"utf-8")
    let todos = JSON.parse(data)
    if(index < 0 || index >= todos.length){
        return console.log("invalid index! ❌");
    }
    todos[index].done = true
   fs.writeFileSync(file, JSON.stringify(todos, null, 2));

  console.log(`✅ Todo marked as done: "${todos[index].task}"`);

}

program 
      .command("marksTodo <index>")
      .description("mark a  todo as true")
      .action(markTodo);
      program.parse()