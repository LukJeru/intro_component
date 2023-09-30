function validateForm() {
  let a = document.getElementById("fname");
  let b = document.getElementById("lname");
  let c = document.getElementById("password");
  let d = document.getElementById("email");
  if (a.value == "" || b.value == "" || c.value == ""|| d.value == "") {
    if (a.value == "") {
      a.style.backgroundSize = "20px 20px";
      document.getElementById("fname_error").style.visibility = "visible";
    } else {
      a.style.backgroundSize = "";
      document.getElementById("fname_error").style.visibility = "hidden";
    }
    if (b.value == "") {
      b.style.backgroundSize = "20px 20px";
      document.getElementById("lname_error").style.visibility = "visible";
    } else {
      b.style.backgroundSize = "";
      document.getElementById("lname_error").style.visibility = "hidden";
    }
    if (c.value == "") {
      c.style.backgroundSize = "20px 20px";
      document.getElementById("password_error").style.visibility = "visible";
    } else {
      c.style.backgroundSize = "";
      document.getElementById("password_error").style.visibility = "hidden";
    }
    if (d.value == "") {
      d.style.backgroundSize = "20px 20px";
      document.getElementById("email_error").style.visibility = "visible";
    } else {
      d.style.backgroundSize = "";
      document.getElementById("email_error").style.visibility = "hidden";
    }
  }
}

document.getElementById("buttonClaim").addEventListener("click", validateForm)
