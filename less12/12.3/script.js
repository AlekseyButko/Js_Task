document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('taskList');
  const addBtn = document.getElementById('addBtn');
  const taskInput = document.getElementById('taskInput');

  taskList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
      event.target.parentElement.remove();
    }
  });

  addBtn.addEventListener('click', function () {
    const text = taskInput.value.trim();
    if (text !== '') {
      const li = document.createElement('li');
      li.innerHTML = `${text} <button class="delete-btn">Видалити</button>`;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  });
});
