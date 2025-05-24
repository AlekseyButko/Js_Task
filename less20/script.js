$(document).ready(function () {
  $('#addBtn').click(function () {
    const taskText = $('#taskInput').val().trim();
    if (taskText !== '') {
      const newItem = $(`
        <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
          <span class="task-text">${taskText}</span>
          <button class="btn btn-sm btn-danger delete-btn">&times;</button>
        </li>`);
      $('#taskList').append(newItem);
      $('#taskInput').val('');
    }
  });

  
  $('#taskList').on('click', '.task-text', function () {
    const taskText = $(this).text();
    $('#modalText').text(taskText);
    const modal = new bootstrap.Modal(document.getElementById('taskModal'));
    modal.show();
  });

  
  $('#taskList').on('click', '.delete-btn', function () {
    $(this).closest('li').remove();
  });
});
