const inputBox =  document.getElementById("input-box")
const addbtn = document.getElementById("add-todo")
const todoContainer = document.getElementById("tododiv")
const addtodos = () => {
    const todotext = inputBox.value.trim()
    if(todotext === "") return;

    const newtodo = document.createElement("div")
    
    const todospan = document.createElement("span")
    todospan.textContent = todotext

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "❌";

    deleteBtn.addEventListener("click" , ()=>{
        todoContainer.removeChild(newtodo)
    })
    newtodo.appendChild(todospan)
    newtodo.appendChild(deleteBtn)
    todoContainer.appendChild(newtodo)
    inputBox.value = ""
}
addbtn.addEventListener("click",addtodos)