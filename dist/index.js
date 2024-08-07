"use strict";
// Aproach 1 - use question mark in case btn can't be found.
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    saveTodos();
    createTodo(newTodo, todos.length - 1); //passes an index to the todo so that it can be identified and deleted later
    input.value = "";
}
function createTodo(todo, index) {
    const newLI = document.createElement("LI");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        todos.splice(index, 1);
        newLI.remove();
        saveTodos();
    });
    newLI.append(checkbox, todo.text, deleteButton);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
