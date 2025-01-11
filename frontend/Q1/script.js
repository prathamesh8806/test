const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit-btn');
const errorMessageDiv = document.getElementById('error-message');

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();

	const name = nameInput.value.trim();
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();
	const confirmPassword = confirmPasswordInput.value.trim();

	if (name === '') {
		displayErrorMessage('Name is required');
		return;
	}

	if (email === '') {
		displayErrorMessage('Email is required');
		return;
	}

	if (password === '') {
		displayErrorMessage('Password is required');
		return;
	}if (confirmPassword === '') {
		displayErrorMessage('Confirm password is required');
		return;
	}

	if (password !== confirmPassword) {
		displayErrorMessage('Passwords do not match');
		return;
	}

	// If all fields are valid, submit the form
	form.submit();
});

function displayErrorMessage(message) {
	errorMessageDiv.innerText = message;
}

