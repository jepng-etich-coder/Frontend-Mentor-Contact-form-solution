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
