const addTask = document.getElementById('add-task');
const inputTask = document.getElementById('task-input');
const allTasks = document.querySelector('.all-tasks');
const delAll = document.getElementById('delete-all-tasks')

let tasks = [];
let todoTasks = [];

/*-------------------------------------------------------*/
function Task(task) {
	this.task = task;
	this.completed = false;
}

/*-------------------------------------------------------*/
function createTask(description, index) {
	return `
        <div class="create-task ${description.completed ? 'checked' : ''}">
             <div class="task">${description.task}</div>
             <div class="action">
                  <input onclick="completedTask(${index})" class="complete" type="checkbox" 
                        ${description.completed ? 'checked' : ''}>
                  <span onclick="editTask(${index})" class="btn-edit"></i></span>
                  <span onclick="deletedTask(${index})" class="delete"></i></span>
             </div>
        </div>          
    `
}

/*-------------------------------------------------------*/
function filterTasks() {
	const activeTasks = tasks.length && tasks.filter(item => item.completed === false);
	const completedTasks = tasks.length && tasks.filter(item => item.completed === true);
	tasks = [...activeTasks, ...completedTasks];
}

/*-------------------------------------------------------*/
function showTasks() {
	allTasks.innerHTML = "";
	if (tasks.length === 0) {
		delAll.classList.add("hide");
	} else {
		delAll.classList.remove("hide");
	}
	if (tasks.length > 0) {
		filterTasks();
		tasks.forEach((item, index) => {
			allTasks.innerHTML += createTask(item, index)
		});
		todoTasks = document.querySelectorAll('.create-task');

	}
}

showTasks();

/*-------------------------------------------------------*/
function storage() { }

/*-------------------------------------------------------*/
function completedTask(index) {
	tasks[index].completed = !tasks[index].completed;
	if (tasks[index].completed) {
		todoTasks[index].classList.add('checked')
	} else {
		todoTasks[index].classList.remove('checked')
	}
	storage();
	showTasks();
}

/*-------------------------------------------------------*/
function deletedTask(index) {
	todoTasks[index].classList.add('deleted')
	setTimeout(() => {
		tasks.splice(index, 1);
		storage();
		showTasks();
	}, 500)
}

/*-------------------------------------------------------*/
function editTask(index) {
	let curTask = todoTasks[index];
	if (!curTask.classList.contains('edit')) {
		curTask.classList.add('edit');
		curTask.querySelector('.task').innerHTML = `<input type="test" value="${tasks[index].task}">`;
	} else {
		let newTask = curTask.querySelector('.task > input').value;
		tasks[index].task = newTask;
		curTask.querySelector('.task').innerText = newTask;
		curTask.classList.remove('edit');
	}
}


/*-------------------------------------------------------*/
addTask.addEventListener("click", () => {
	if (inputTask.value === '') {
	} else {
		tasks.push(new Task(inputTask.value));
	}
	storage();
	showTasks();
	inputTask.value = '';

});

/*-------------------------------------------------------*/
delAll.addEventListener("click", () => {
	tasks = [];
	storage();
	showTasks();
});