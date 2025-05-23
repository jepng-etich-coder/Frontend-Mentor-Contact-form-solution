//pseudocode

//START

// ON form submission:
// PREVENT the default form behavior - add all items that must happen upon form submission i.e. form, toast, error messages, consent text

// HIDE all previous error messages

// SET isFormValid to true

// IF First Name is empty
// SHOW error message for First Name
// SET isFormValid to false

// IF Last Name is empty
// SHOW error message for Last Name
// SET isFormValid to false

// IF Email is invalid
// SHOW error message for Email
// SET isFormValid to false

// IF no query type is selected (radio button)
// SHOW error message for query type
// SET isFormValid to false

// IF message textarea is empty
// SHOW error message for message
// SET isFormValid to false

// IF consent checkbox is not checked
// SHOW error message for consent
// SET isFormValid to false

// IF isFormValid is true THEN
// SHOW toast message
// RESET form fields
// UPDATE consent text to say “Thanks for consenting”
// END IF

// END

const form = document.getElementById('myForm');
const toast = document.querySelector('.toast-hidden');
const errorMessages = document.querySelectorAll('.error-msg');
const consentText = document.getElementById('consent-text');

form.addEventListener('submit', function (e) {
e.preventDefault(); // Prevent default form submission

// Hide all previous error messages
errorMessages.forEach(msg => (msg.style.display = 'none'));

let isFormValid = true;

// Get form inputs
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const consent = document.getElementById('checkbox');
const queryType = document.querySelector('input[name="query-type"]:checked');

// First Name Validation
if (firstName.value.trim() === '') {
showError(firstName, 'First name is required');
isFormValid = false;
}

// Last Name Validation
if (lastName.value.trim() === '') {
showError(lastName, 'Last name is required');
isFormValid = false;
}

// Email Validation
if (!validateEmail(email.value)) {
showError(email, 'Please enter a valid email address');
isFormValid = false;
}

// Query Type (radio) Validation
if (!queryType) {
showError(document.querySelector('.form-query'), 'Please select a query type');
isFormValid = false;
}

// Message Validation
if (message.value.trim() === '') {
showError(message, 'Message cannot be empty');
isFormValid = false;
}

// Consent Checkbox Validation
if (!consent.checked) {
showError(consent, 'You must agree to be contacted');
isFormValid = false;
}

// If all validations pass
if (isFormValid) {
toast.style.display = 'block'; // show success message
form.reset(); // clear form
if (consentText) {
consentText.textContent = 'Thanks for consenting. We’ll be in touch soon!';
}
}
});

// Helper to show error next to input
function showError(input, message) {
const error = input.closest('fieldset')?.querySelector('.error-msg') ||
input.parentElement.querySelector('.error-msg') ||
input.nextElementSibling;
if (error) {
error.textContent = message;
error.style.display = 'block';
}
}

// Helper to validate email format
function validateEmail(email) {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}
