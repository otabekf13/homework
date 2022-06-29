let form = document.forms.example
let inps = form.querySelectorAll('.important')
let labels = form.querySelectorAll('label')


form.onsubmit = (event) => {
	event.preventDefault()
	labels.forEach(item => item.innerHTML = "")

	let arr = []

	for (let inp of inps) {
		if (inp.value.length === 0) {
			arr.push(1)

			let label = inp.nextSibling.nextSibling.nextSibling

			label.innerHTML = `"Plase enter your" &(id)`
			label.style.color = "red"

		}
	}

	if (arr.length === 0) {
		console.log(submit());
	} else {
		alert('error')
	}

}


function submit(params) {
	let user = {}

	let fm = new FormData(form)

	fm.forEach((value, key) => {
		user[key] = value
	});

	return user
}
