//Values
const pricePerStudent = parseInt(
  document.getElementById("perStudent").innerHTML
);

const yearlyPrice = parseInt(
  document.getElementById("yearlyPayment").innerHTML.replace(/\s/g, "")
);

const startUpPrice = parseInt(
  document.getElementById("firstTimePayment").innerHTML.replace(/\s/g, "")
);

const container = document.getElementById("container");

// Regular expression to match only digits (0-9)
const digitRegex = /^\d+$/;

//Values with more to them such as creating an element(displayContainer which is created here)
const displayContainer = document.createElement("p");
container.appendChild(displayContainer);
displayContainer.id = "displaySum";
displayContainer.innerHTML = yearlyPrice.toLocaleString();

//Function that calculates the total price which is (amountOfStudents * 27) + 180000
function dynamicDisplay() {
  let amountOfStudents = document.getElementById("students").value;
  //Ignores anything but numbers (should do so)
  amountOfStudents = amountOfStudents.replace(/\D/g, "");

  //Even though the input is empty print the base startup price
  if (amountOfStudents === "" || amountOfStudents === 0) {
    displayContainer.innerText = yearlyPrice.toLocaleString();
  } else {
    //Using ternary operator to check if input is valid
    const checkError = digitRegex.test(amountOfStudents)
      ? (amountOfStudents * pricePerStudent + yearlyPrice).toLocaleString()
      : "Please enter a valid number of students (digits only)";

    displayContainer.innerText = checkError;
  }
}

//Runs my function everytime anything changes within the input field
document.getElementById("students").addEventListener("input", dynamicDisplay);
