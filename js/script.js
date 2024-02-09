//Values
const pricePerStudent = parseInt(
  document.getElementById("perStudent").innerHTML
);

const yearlyPrice = parseInt(
  document.getElementById("yearlyPayment").innerHTML.replace(/\s/g, "")
);

const displayContainer = document.getElementById('displayContainer')

//Values made for less repetition
const yearlyString = `Pris per år: ${yearlyPrice.toLocaleString()} nok`

// Regular expression to match only digits (0-9)
const digitRegex = /^\d+$/;

//Creating the display for the total cost
const displayTag = document.createElement("p");
displayTag.id = "displayTag";
displayTag.innerHTML = yearlyString
displayContainer.appendChild(displayTag);

//Function that calculates the total price which is (amountOfStudents * 27) + 180000
function dynamicDisplay() {
  let amountOfStudents = document.getElementById("students").value;

  //Using two ternary operators first to check if the field empty then if the input is valid
  const checkInput =
    amountOfStudents === ""
      ? yearlyString
      : digitRegex.test(amountOfStudents)
      ? ( `Pris per år: ${(amountOfStudents * pricePerStudent + yearlyPrice).toLocaleString()} nok`)
      : "Venligst bare tall";

  displayTag.innerText = checkInput;
}

//Blocks the input of anything but numbers 0-9, backspace, left arrow and right arrow
document.getElementById("students").onkeydown = function (e) {
  if (
    (e.key < "0" || e.key > "9") &&
    e.key !== "Backspace" &&
    e.key !== "ArrowLeft" &&
    e.key !== "ArrowRight"
  ) {
    return false;
  }
  document.getElementById("students").addEventListener("input", dynamicDisplay);
};
