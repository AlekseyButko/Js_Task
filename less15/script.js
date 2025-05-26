document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  renderTasks();

  addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text !== "") {
      tasks.push({ text, completed: false });
      saveTasks();
      renderTasks();
      taskInput.value = "";
    }
  });

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;

      const span = document.createElement("span");
      span.textContent = task.text;
      if (task.completed) span.classList.add("completed");

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Видалити";

      checkbox.addEventListener("change", () => {
        tasks[index].completed = checkbox.checked;
        saveTasks();
        renderTasks();
      });

      deleteBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
