const form = document.querySelector("#myForm");
const toast = document.querySelector(".toast-hidden");
const errorMessages = document.querySelectorAll(".error-msg");
const consentText = document.querySelector(".consent-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  for (let error of errorMessages) {
    error.style.display = "none";
  }

  let isFormValid = true;

  const firstName = document.querySelector("#firstname");
  const lastName = document.querySelector("#lastname");
  const email = document.querySelector("#email");
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const message = document.querySelector("#message");
  const consent = document.querySelector("#checkbox");

  function showError(input, message) {
    const errorMsg = input.parentElement.querySelector(".error-msg");

    if (errorMsg) {
      errorMsg.textContent = message; //set the text content of the error message to the message passed
      errorMsg.style.display = "block"; //show the error message
    }
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  if (firstName.value.trim() === "") {
    showError(firstName, "This field is required");
    isFormValid = false;
  }

  if (lastName.value.trim() === "") {
    showError(lastName, "This field is required");
    isFormValid = false;
  }

  if (!validateEmail(email.value)) {
    showError(email, "Please enter valid email address");
    isFormValid = false;
  }

  if (!queryType) {
    const errorMsg = document.querySelector(".form-query .error-msg");
    errorMsg.textContent = "Please select query type";
    errorMsg.style.display = "block";
    isFormValid = false;
  }

  if (message.value.trim() === "") {
    showError(message, "This field is required");
    isFormValid = false;
  }

  if (!consent.checked) {
    const errorMsg = document.querySelector(".form-consent .error-msg");
    errorMsg.textContent =
      "To submit this form please consent to being contacted";
    errorMsg.style.display = "block";
    isFormValid = false;
  }

  if (isFormValid) {
    toast.style.display = "block"; // show toast
    form.reset();
    if (consentText) {
      consentText.style.display = "block";
    }
  }
});
