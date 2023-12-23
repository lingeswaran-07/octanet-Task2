function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
      var taskList = document.getElementById('tasks');

      var taskElement = document.createElement('div');
      taskElement.className = 'task';
      
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', toggleTaskCompletion);

      var taskTextElement = document.createElement('span');
      taskTextElement.textContent = taskText;

      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';
      deleteButton.addEventListener('click', deleteTask);

      taskElement.appendChild(checkbox);
      taskElement.appendChild(taskTextElement);
      taskElement.appendChild(deleteButton);

      taskList.appendChild(taskElement);

      taskInput.value = '';
    }
  }

  function toggleTaskCompletion(event) {
    var taskElement = event.target.closest('.task');
    taskElement.classList.toggle('completed', event.target.checked);
  }

  function deleteTask(event) {
    var taskElement = event.target.closest('.task');
    taskElement.remove();
  }