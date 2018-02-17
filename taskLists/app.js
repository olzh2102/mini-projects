// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collecion');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
	//Add task event
	form.addEventListener('submit', addTask);

	// Remove task event
	taskList.addEventListener('click', removeTask);

	// Clear tasks event
	clearBtn.addEventListener('click', clearTasks);

	// Filter tasks addEventListener
	filter.addEventListener('keyup', filterTasks);
}

// Add task
function addTask(event) {

	if(taskInput.value === '') {
		alert('Please type a task')
	}

	// Create li element
	const li = document.createElement('li');
	// Add a class
	li.className = 'collection-item';
	// Creat text node and append to li
	li.appendChild(document.createTextNode(taskInput.value));
	// Create new link element
	const link = document.createElement('a');
	// Add class
	link.className = 'delete-item secondary-content';
	// Add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>';
	// Append the link to li
	li.appendChild(link);

	// Append li to ul
	taskList.appendChild(li);

	// Clear the input
	taskInput.value = '';

	event.preventDefault();
}

// Remove task
function removeTask(event) {
	const dltIcon = event.target.parentElement.classList.contains('delete-item');
	const confimMsg = confirm('Are you sure you want to delete the task?');

	if(dltIcon) {
		if(confimMsg) {
			event.target.parentElement.parentElement.remove();
		}
	}
}

// Clear tasks
function clearTasks() {
	// 1 option:
	// taskList.innerHTML = '';

	// 2 option: FASTER way (https://jsperf.com/innerhtml-vs-removechild):
	while(taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
}

// Filter tasks
function filterTasks(event) {
	const text = event.target.value.toLowerCase();

	document.querySelectorAll('.collection-item').forEach(function(task) {
		const item = task.firstChild.textContent;

		if(item.toLowerCase().indexOf(text) != -1) {
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	});

	console.log(text);
}
