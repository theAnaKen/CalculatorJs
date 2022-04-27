// Getting DOM Elements
const outputDiv = document.getElementById("output");
const outputInput = outputDiv.querySelector("input");
const backspace = outputDiv.querySelector("p").querySelector("i");

const keysDiv = document.getElementById("keys");
const calculatorKeys = keysDiv.querySelectorAll(".key");
const calculatorOperator = keysDiv.querySelectorAll(".operator");

// making a output keys variable
let outputVariable = "";

// putting the pressed key in output Value input
calculatorKeys.forEach((key) => {
	key.addEventListener("click", (e) => {
		const keyValue = e.target.innerText;
		outputInput.value += keyValue;
		// outputVariable = outputInput.value;
		// console.log(outputVariable);
	});
	// console.log(key);
});

// putting the pressed operator in output Value input
calculatorOperator.forEach((key) => {
	key.addEventListener("click", (e) => {
		// console.log(outputVariable);

		const keyValue = e.target.innerText;
		if (keyValue === "=") {
			outputInput.value = eval(outputInput.value);
			// console.log(outputVariable);

			return;
		} else if (keyValue === "C") {
			outputInput.value = "";

			return;
		} else if (keyValue === "÷") {
			outputInput.value += "/";

			return;
		} else if (keyValue === "×") {
			outputInput.value += "*";
			return;
		} else if (keyValue === "%") {
			outputInput.value += "/100";
			return;
		} else {
			outputInput.value += keyValue;
		}
		console.log(keyValue);
	});
});

// Backspace button functionality
backspace.addEventListener("click", (e) => {
	outputInput.value.length = outputInput.value.length - 1;
	let erasedResult = outputInput.value.substring(
		0,
		outputInput.value.length - 1,
	);
	outputInput.value = erasedResult;
});
