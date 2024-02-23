//Values
const pricePerStudent = parseInt(
  document.getElementById("perStudent").innerHTML
);

const yearlyPrice = parseInt(
  document.getElementById("yearlyPayment").innerHTML.replace(/\s/g, "")
);

const displayContainer = document.getElementById("displayContainer");
const errorMsg = "Skriv inn et tall fra 0-9";

// Regular expression to match only digits (0-9)
const digitRegex = /^\d+$/;

//Creating the display for the total cost
const displayTag = document.createElement("p");
displayTag.id = "displayTag";
displayContainer.appendChild(displayTag);
displayTag.setAttribute("role", "status");

//Before price
const beforePriceText = document.createElement("span");
beforePriceText.textContent = "Pris per år: ";
displayTag.appendChild(beforePriceText);

//Bold price
const priceTag = document.createElement("span");
priceTag.id = "priceTag";
displayTag.appendChild(priceTag);

//After price
const afterPriceText = document.createElement("span");
afterPriceText.textContent = " kr";
displayTag.appendChild(afterPriceText);

//The magic
function dynamicDisplay() {
  let amountOfStudents = document.getElementById("students").value;

  // Hide display if input is empty or reset the display input if there is a number
  displayTag.style.display = amountOfStudents === "" ? "none" : "block";

  //Quit early for optimization if empty
  if (amountOfStudents === "") {
    return;
  }

  //Returning an error if you have typed something else than a number
  if (!digitRegex.test(amountOfStudents)) {
    priceTag.textContent = errorMsg;
    return;
  }

  //Equation
  const calculatedPrice = (
    (amountOfStudents < 1500
      ? 1500
      : amountOfStudents > 35000
      ? 35000
      : amountOfStudents) *
      pricePerStudent +
    yearlyPrice
  ).toLocaleString('nb');

  priceTag.textContent = calculatedPrice;
}


//Event trigger for each input
document.getElementById("students").addEventListener("input", (e) => {
  if (!digitRegex.test(e.target.value)) {
    e.target.value = e.target.value.slice(0, -1);
    e.preventDefault();
  }
  dynamicDisplay();
});
