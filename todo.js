let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
  let taskValue = taskInput.value;

  if (taskValue === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    ${taskValue}
    <span class="delete" onclick="deleteTask(this)">X</span>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
}

function deleteTask(element) {
  element.parentElement.remove();
}
