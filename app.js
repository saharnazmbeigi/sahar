// Define UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".list-group");
const clearBtn = document.querySelector(".clear-tasks");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);

  // Remove task event
  taskList.addEventListener("click", removeTask);
  // clear task list
  clearBtn.addEventListener("click", clearTask);
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("برای افزودن تسک در ابتدا تسک را وارد کنید");
  } else {
    // Create li element
    const li = document.createElement("li");
    // Add class
    li.className = "list-group-item d-flex align-items-center";
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create i element
    const i = document.createElement("i");
    // Add class
    i.className = "fas fa-times text-danger mr-auto delete-item";
    // Append the i to li
    li.appendChild(i);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    e.preventDefault();
  }
}

// Remove task
function removeTask(e) {
  if (e.target.classList.contains("delete-item")) {
    if (confirm("آيا مطمن هستی برای حذف تسک")) {
      e.target.parentElement.remove();
    }
  }
}
// clear task
function clearTask() {
  taskList.innerHTML = "";
}
