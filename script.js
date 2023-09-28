const taskInput = document.querySelector('.input');
const taskSection = document.querySelector('.tasks');
const btn = document.querySelector('.btn');

taskInput.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    createTask();
  }
});

btn.addEventListener('click', () => {
  createTask();
});

function createTask() {
  if (taskInput.value.length == 0) {
    alert('The task field is blank. Enter a task name and try again.');
  } else {
    const newDiv = document.createElement('div');
    newDiv.classList.add('task');
    newDiv.innerHTML = `<label class="taskname"><input class="check" type="checkbox" name="check"><p>${taskInput.value}</p></label><button class="delete"><i class="fa-solid fa-trash"></button>`;

    const checkbox = newDiv.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        newDiv.classList.add('checked');
      } else {
        newDiv.classList.remove('checked');
      }
    });

    newDiv.querySelector('.delete').addEventListener('click', () => {
      deleteTask(newDiv);
    });

    taskSection.prepend(newDiv);
  }

  taskInput.value = '';
}

function deleteTask(div) {
  div.remove();
}
