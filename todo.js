let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
  let task = taskInput.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    ${task}
    <span class="delete" onclick="deleteTask(this)">X</span>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(element) {
  element.parentElement.remove();
}
