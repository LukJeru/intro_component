function validateForm() {
  let a = document.getElementById("fname");
  let b = document.getElementById("lname");
  let c = document.getElementById("password");
  let d = document.getElementById("email");
  if (a.value == "" || b.value == "" || c.value == ""|| d.value == "") {
    if (a.value == "") {
      a.style.borderColor = "red"
      document.getElementById("fname_img").style.visibility = true;
    }
    if (b.value == "") {
      b.style.borderBlockColor = "red"
    }
    if (c.value == "") {
      c.style.borderBlockColor = "red"
    }
    if (d.value == "") {
      d.style.borderBlockColor = "red"
    }
    return false;
  }
  else {
    a.style.borderColor = "green"
    b.style.borderColor = "green"
    c.style.borderColor = "green"
    d.style.borderColor = "green"
  }
}

document.getElementById("buttonClaim").addEventListener("click", validateForm)
