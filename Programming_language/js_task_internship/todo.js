
// script.js

// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
document.addEventListener("DOMContentLoaded", loadTasks);

// Add task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    saveTask(taskText);
    taskInput.value = ""; // Clear input
  }
});

// Load tasks from localStorage on page load
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTask(task));
}

// Save task to localStorage
function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task to UI
function addTask(taskText) {
  const li = document.createElement("li");
  li.className = "list-group-item";

  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="btn btn-sm btn-warning edit-btn">Edit</button>
      <button class="btn btn-sm btn-danger delete-btn">Delete</button>
    </div>
  `;

  // Edit task
  li.querySelector(".edit-btn").addEventListener("click", () => {
    const newTaskText = prompt("Edit Task:", taskText);
    if (newTaskText && newTaskText.trim()) {
      li.querySelector("span").textContent = newTaskText;
      updateTask(taskText, newTaskText.trim());
    }
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
      deleteTask(taskText);
    }
  });

  taskList.appendChild(li);
}

// Update task in localStorage
function updateTask(oldText, newText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskIndex = tasks.indexOf(oldText);
  if (taskIndex > -1) {
    tasks[taskIndex] = newText;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

// Delete task from localStorage
function deleteTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}