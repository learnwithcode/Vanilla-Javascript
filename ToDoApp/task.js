//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listners
loadeventListners();

// Load all event listners
function loadeventListners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear  task event
  clearBtn.addEventListener('click', clearTask);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
};

// Add task
function addTask(e) {
  if (taskInput.value === '') {
    alert("Value can't be blank");
  }
  // Creaet li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Creaet text node and  appent to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create delete like element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Appent link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  taskInput.value = '';
  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item'))
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  console.log(e.target);
}

// Clear Task
function clearTask() {
  // one way
  //taskList.innerHTML = '';

  // better way
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}