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
	//DOM Load event
	document.addEventListener('DOMContentLoaded', getTasks);

	//Add task event
	form.addEventListener('submit', addTask);

	// Remove task event
	taskList.addEventListener('click', removeTask);

	// Clear tasks event
	clearBtn.addEventListener('click', clearTasks);

	// Filter tasks addEventListener
	filter.addEventListener('keyup', filterTasks);
}

// Check Local Storage
let tasks;
function checkLocalStorage() {
	if(localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
}

// Get tasks from LS
function getTasks() {
	checkLocalStorage();

	tasks.forEach(function(task) {
		// Create li element
		const li = document.createElement('li');
		// Add a class
		li.className = 'collection-item';
		// Creat text node and append to li
		li.appendChild(document.createTextNode(task));
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
	})
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

	// Store in Local Storage
	storeTaskInLocalStorage(taskInput.value);

	// Clear the input
	taskInput.value = '';

	event.preventDefault();
}

// Store task
function storeTaskInLocalStorage(task) {
	checkLocalStorage();

	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(event) {
	const dltIcon = event.target.parentElement.classList.contains('delete-item');
	const confimMsg = confirm('Are you sure you want to delete the task?');
	const parentElIcon = event.target.parentElement.parentElement;

	if(dltIcon) {
		if(confimMsg) {
			parentElIcon.remove();

			// Remove from LS
			removeTaskFromLocalStorage(parentElIcon);
		}
	}
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
	checkLocalStorage();

	tasks.forEach(function(task, index) {
		if(taskItem.textContent === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear tasks
function clearTasks() {
	// 1 option:
	// taskList.innerHTML = '';

	// 2 option: FASTER way (https://jsperf.com/innerhtml-vs-removechild):
	while(taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}

	// Clear tasks from LS
	clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
	localStorage.clear();
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
