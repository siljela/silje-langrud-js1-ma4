const firstName = document.querySelector("#firstName");
firstName.addEventListener("keyup", checkLength);

function checkLength(event) {
  const firstNameError = document.querySelector("#firstNameError");
  const inputValue = event.target.value.trim();
  const valueLength = inputValue.length;

  if (valueLength > 2) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
}
