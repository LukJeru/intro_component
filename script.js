function validateForm() {
  let a = document.getElementById("fname");
  let b = document.getElementById("lname");
  let c = document.getElementById("password");
  let d = document.getElementById("email");
  if (a.value == "") {
    alert("First Name must be filled out");
    return false;
  }
  else if (b.value == "") {
    alert("Last Name must be filled out");
    return false;
  }
  else if (c.value == "") {
    alert("Password must be filled out");
    return false;
  }
  else if (d.value == "") {
    alert("Email must be filled out");
    return false;
  }
  else {
    a.style.borderColor = "#00ff00";
}
}

document.getElementById("buttonClaim").addEventListener("click", validateForm)
