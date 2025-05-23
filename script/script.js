const form = document.getElementById("myForm");
const toast = document.querySelector(".toast-hidden");
const errorMessages = document.querySelectorAll(".error-msg");
const consentMessage = document.querySelector(".consent-txt");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //prevents default form submission

  //hide error messages, msg is the name given to the current element(can be anything)
  //for loop, repeats action i.e "for each error message in the list, do this(or a list of things)..."
  for (let msg of errorMessages) {
    msg.style.display = "none";
  }

  //create a variable isFormValid and set it to true
  let isFormValid = true;

  //get all form inputs

  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const consent = document.getElementById("checkbox");
  const queryTYpe = document.querySelector('input[name="query-type"]:checked');

  //first name validation
  if (firstName.value.trim() === "") {
    // console.log("First name is empty");
    // console.log("User entered:", firstName.value);
    showError(firstName, "This field is required");
    isFormValid = false;
  }

  if (lastName.value.trim() === "") {
    showError(firstName, "This field is required");
    isFormValid = false;
  }

  if (!validateEmail(email.value)) {
    showError(email, "Please enter valid email address");
    isFormValid = false;
  }

  if (!queryTYpe) {
    showError(
      document.querySelector(".form-query"),
      "Please select a query type"
    );
    isFormValid = false;
  }

  if (message.value.trim() === "") {
    showError(message, "This field is required");
  }
  isFormValid = false;
});
