// Aproach 1 - use question mark in case btn can't be found.

// const btn = document.getElementById("btn");
// btn?.addEventListener("click", function() {
//     alert("CLICKED!!!");
// });

// Approach 2 - use exclamation point (no-null assertion operator)

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = [];

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);
  input.value = "";
}

function createTodo(todo: Todo) {
  const newLI = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
}

form.addEventListener("submit", handleSubmit);
