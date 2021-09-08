// contact
const form = document.querySelector('form');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const phoneNumber = document.querySelector('#phone');
const email = document.querySelector('#email');

function showError(input, message) {
  const formControll = input.parentElement;
  formControll.className = 'formControll error';
  const small = formControll.querySelector('small');
  small.innerText = message;
}
function showSuccess(input) {
  const formControll = input.parentElement;
  formControll.className = 'formControll success';
}

//prevent the Submit
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (firstName.value == '') {
    showError(firstName, 'Please Enter First Name');
  } else {
    showSuccess(firstName);
  }
  if (lastName.value == '') {
    showError(lastName, 'Please Enter Last Name');
  } else {
    showSuccess(lastName);
  }
  if (phoneNumber.value == '') {
    showError(phoneNumber, 'Please Enter a Phone Number');
  } else {
    showSuccess(phoneNumber);
  }
  if (email.value == '') {
    showError(email, 'Please Enter Email');
  } else {
    showSuccess(email);
  }
});
