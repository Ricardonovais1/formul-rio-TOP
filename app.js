const passwordField = document.getElementById('password');
const passConfirmField = document.getElementById('confirm-password');
const passMessage = document.getElementById('message');
const confirmMessage = document.getElementById('confirm');
const confirmPass = document.querySelector('.password-confirm-message');
const letter = document.getElementById('letter');
const capital = document.getElementById('capital');
const number_p = document.getElementById('number-p');
const length_p = document.getElementById('length-p');


// When the user clicks on the password field, show the message box
passwordField.onfocus = function() {
    passMessage.style.display = "block";
  }

// When the user clicks outside of the password field, hide the message box
passwordField.onblur = function() {
    passMessage.style.display = "none";
}

// When the user starts to type something inside the password field
passwordField.onkeyup = function() {
    // Validate lowercase letters
    const lowerCaseLetters = /[a-z]/g;
    if(passwordField.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
    // Validate capital letters
    const capitalLetters = /[A-Z]/g;
    if (passwordField.value.match(capitalLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    //Validate number
    const numberInPassword = /[0-9]/g;
    if (passwordField.value.match(numberInPassword)) {
        number_p.classList.remove("invalid");
        number_p.classList.add("valid");
    } else {
        number_p.classList.remove("valid");
        number_p.classList.add("invalid");    
    }
    if (passwordField.value.length >= 8) {
        length_p.classList.remove("invalid");
        length_p.classList.add("valid");
    } else {
        length_p.classList.remove("valid");
        length_p.classList.add("invalid");    
    }
}

passConfirmField.onfocus = function() {
    confirmMessage.style.display = 'block';
    confirmMessage.classList.add('invalid');

    passConfirmField.onkeyup = function() {
    if (passwordField.value === passConfirmField.value) {
        confirmMessage.style.display = 'none';
    }
}
}
// letter.classList.includes('valid') && capital.classList.includes('valid') && number_p.classList.includes('valid') && length_p.classList.includes('valid') && 