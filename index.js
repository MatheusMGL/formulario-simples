function dateMask(input, event) {
	const key = event.keyCode;
	const date = input.value;
	
	if (key != 8 && key != 46) {
		if (date.length == 2) {
            return input.value = `${date}/`;
		}
		if (date.length == 5) {
			return input.value = `${date}/`;
		}
		input.value = date;
	}
}

function clearMessage() {
	document.getElementsByClassName('content-message')[0].innerText = '';
}

function resetForm() {
	clearMessage();
    document.getElementById("form").reset();
}

function register() {
	clearMessage();

	const name = document.getElementsByName('name')[0].value;
	const email = document.getElementById('email').value;
	const date = document.querySelector('input[name=date]').value;
	const schooling = document.getElementsByTagName('select')[0].value;
	const gender = document.querySelector('input[name="gender"]:checked');
	gender ? gender.value : null;
	let message = '';

	if (!name) {
		message = `${message}<p>Informe o nome.</p>`;
	}

	if (!email) {
		message = `${message}<p>Informe o email.</p>`;
	}

	if (!date) {
		message = `${message}<p>Informe a data de nascimento.</p>`;
	}

	if (!schooling) {
		message = `${message}<p>Informe a escolaridade.</p>`;
	}

	if (!gender) {
		message = `${message}<p>Informe o sexo.</p>`;
	}

	document.getElementsByClassName('content-message')[0].innerHTML = message;
}