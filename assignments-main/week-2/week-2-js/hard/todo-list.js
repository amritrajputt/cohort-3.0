/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(todo,index){
      this.todo = []
      this.index = 0
    }
    add(todo){
      if(!todo)return
      this.todo.push(todo); 
      this.index += 1; 
    }
    removetodo(index){
      if(index < 0 || index >= this.todo.length) return
      this.todo.splice(index,1)
    }
    updatetodo(index,updatedtodo){
       if(index < 0 || index >= this.todo.length) return
       this.todo[index] = updatedtodo
    }
    getalltodo(){
      return this.todo
    }
    gettodobyindex(index){
        if(index < 0 || index >= this.todo.length) return
        return this.todo[index]
    }
    
  clear() {
    this.todo = [];
  }
}
let mytodo = new Todo()
mytodo.add('hey')
console.log(mytodo.gettodobyindex(0))
console.log(mytodo.getalltodo());


module.exports = Todo;
