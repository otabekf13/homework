const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const addTodo = document.querySelector('.add-button')

const list = document.querySelector('.bottom')

var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getHours() + ":" + currentdate.getMinutes();

let delBtn = document.getElementsByClassName("delete-button");
var i;
for (i = 0; i < delBtn.length; i++) {
	let delBtn = document.createElement('.div')
	let delBtnIcon = doc.createElement('span')

	delBtn.classList.add('delete-button')
	delBtnIcon.innerHTML = "X"

	span.className = "close";
	span.appendChild(txt);
	delBtn[i].appendChild(span);
}

let close = document.getElementsByClassName('delete-button')
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

var todoItem = document.getElementsByClassName('todo-item');
todoItem.addEventListener('click', function (ev) {
	if (ev.target.tagName === 'todo-item') {
		ev.target.classList.toggle('checked');
	}
}, false);

function newElement() {
	let left = document.createElement('div')
	let span = document.createElement('h3')
	let time = document.createElement('p')

	todoItem.classList.add('todo-item')
	left.classList.add('div')

	time.innerText = currentdate

	if (todoInput.length === 0) {
		alert("Nothing to Todo")
	} else {
		span.innerText = todoInput.value = ""
	}

	bottom.append(todoItem)
	todoItem.append(left, delBtn)
	left.append(span, time)
	delBtn.append(delBtnIcon)
}
