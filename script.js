function validateForm() {
  let a = document.forms["form"]["fname"].value;
  let b = document.forms["form"]["lname"].value;
  let c = document.forms["form"]["email"].value;
  let d= document.forms["form"]["password"].value;
  if (a == "") {
    document.getElementByID("fname").style.visibility = "visible";
    document.getElementByID("fname").style.color = "red";
    document.getElementByID("fname").innerHTML = "First Name cannont be empty.";
    return false;
  }
  if (b == "") {
    alert("Name must be filled out");
    return false;
  }
  if (c == "") {
    alert("Email must be filled out");
    return false;
  }
  if (d == "") {
    alert("Password must be filled out");
    return false;
  }
}

validateForm();
