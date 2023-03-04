function verifyPhone(event) {
  // Get the phone number entered by the user
  var phone = document.getElementById("phone").value;

  // Create a regular expression to match a valid phone number
  var phoneRegex = /^\d{10}$/;

  // Check if the phone number matches the regular expression
  if (phoneRegex.test(phone)) {
    return true;
  } else {
    alert("Phone number is not valid!");
    event.preventDefault();
    return false;
  }
}



  