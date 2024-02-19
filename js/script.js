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
displayTag.setAttribute('role', 'status');

const priceTag = document.createElement("span");
priceTag.id = "priceTag"
displayTag.appendChild(priceTag)

//The magic
function dynamicDisplay() {
  let amountOfStudents = document.getElementById("students").value;

  // Check if the input is empty or not a valid number
  const checkInput =
    amountOfStudents === ""
      ? ""
      : !digitRegex.test(amountOfStudents)
      ? errorMsg
      : `Pris per år: ${priceTag.innerText = (
          (amountOfStudents < 1500
            ? 1500
            : amountOfStudents > 35000
            ? 35000
            : amountOfStudents) *
            pricePerStudent +
          yearlyPrice
        ).toLocaleString()} kr `;

  displayTag.innerHTML = checkInput;
}

//Event trigger for each input
document.getElementById("students").addEventListener("input", (e) => {
  if (!digitRegex.test(e.target.value)) {
    e.target.value = e.target.value.slice(0, -1);
    e.preventDefault();
  }
  dynamicDisplay();
});
