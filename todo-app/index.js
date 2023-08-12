const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-value");
const todoContainer = document.getElementById("todo-container");

addBtn.addEventListener("click", () => {
    // console.log(todoInput.value)
    const hasElement = document.getElementById(todoInput.value) ? true : false;
    if (hasElement) {
        alert("Item already exists!");
        return;
    }
    todoContainer.innerHTML +=
        `<li id="${todoInput.value}">${todoInput.value} 
        <span id="${todoInput.value}-del" onclick="deleteTodo(${todoInput.value})">X</span></li>`;
})


function deleteTodo(element) {
    element.remove();
    // document.getElementById(`${id}`).remove();
}