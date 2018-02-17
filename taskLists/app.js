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
