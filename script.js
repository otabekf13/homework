const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const addTodo = document.querySelector('.add-button')

// const todoItemsList = document.querySelector('.todo-items');
const list = document.querySelector('.bottom')

var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getHours() + ":" + currentdate.getMinutes();

let todos = [];

addTodo.onclick = (todos) => {
	function add(todoInput) {
		if (todoInput.length == 0) {
			alert("Nothing to Todo")
		} else {
			let todoItem = document.createElement('div')
			let left = document.createElement('div')
			let span = document.createElement('h3')
			let time = document.createElement('p')

			let delBtn = document.createElement('.div')
			let delBtnIcon = doc.createElement('span')

			todoItem.classList.add('todo-item')
			left.classList.add('div')
			span.innerText = todoInput.value
			time.innerText = currentdate
			delBtn.classList.add('delete-button')
			delBtnIcon.innerHTML = "X"

			bottom.append(todoItem)
			todoItem.append(left, delBtn)
			left.append(span, time)
			delBtn.append(delBtnIcon)
		}
		console.log(add);
	}
}

add()