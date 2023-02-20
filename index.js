const form = document.getElementById('form');
const nombre = document.getElementById ('nombre');
const email = document.getElementById ('email');
const password = document.getElementById ('password');
const password2 = document.getElementById ('password2');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();

	alert('El formulario ha sido enviado');
});

function checkInputs() {
	
	const nombreValue = nombre.value();
	const emailValue = email.value();
	const passwordValue = password.value();
	const password2Value = password2.value();
	
	if(nombreValue === '') {
		setErrorFor(nombre, 'Rellene este campo');
	} else if (!isNombre(nombreValue)) {
		setErrorFor(nombre, 'Solo caracteres alfabéticos');
	} else {
		setSuccessFor(nombre);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Rellene este campo');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email inválido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Rellene este campo');
	}  else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'No debe tener más de 8 caracteres');
    }  else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Rellene este campo');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Las contraseñas no coinciden');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formGrupo = input.parentElement;
	const small = formGrupo.querySelector('small');
	formGrupo.className = 'form-grupo error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formGrupo = input.parentElement;
	formGrupo.className = 'form-grupo success';
}

/*--- Instrucciones de cada casilla----*/

function isNombre(nombre) {
	return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombre) // Letras y espacios, pueden llevar acentos.
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password) {
	return /^.{4,8}$/.test(password);// 4 a 8 dígitos.
}
