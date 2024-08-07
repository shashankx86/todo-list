// Aproach 1 - use question mark in case btn can't be found.

// const btn = document.getElementById("btn");
// btn?.addEventListener("click", function() {
//     alert("CLICKED!!!");
// });

// Approach 2 - use exclamation point (no-null assertion operator)

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

function handleSubmit (e: SubmitEvent) {
  e.preventDefault();
  const newTodoText = input.value;
  const newLI = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox"
  newLI.append(newTodoText);
  newLI.append(checkbox);
  list.append(newLI);
  input.value = "";
}

form.addEventListener("submit", handleSubmit);








