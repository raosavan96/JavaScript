let nameError = document.getElementById("name_error");
let phoneError = document.getElementById("phone_error");
let emailError = document.getElementById("email_error");
let massError = document.getElementById("mass_error");
let submitError = document.getElementById("submit_error");

function validateName() {
  let name = document.getElementById("name_id").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name id required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById("phone_id").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no. is  required";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no. should be 10 digits required";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Phone no. is  required";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById("email_id").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is  required";
    return false;
  }

  if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMass() {
  let mass = document.getElementById("mass_id").value;
  let required = 30;
  let left = required - mass.length;

  if (left > 0) {
    massError.innerHTML = left + "more characters required";
    return false;
  }

  massError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMass()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
