// Getting DOM Elements
const allKeys = document.querySelectorAll("button");
const key0 = document.getElementById("key0");

const outputDiv = document.getElementById("output");
const outputInput = outputDiv.querySelector("input");
const backspace = outputDiv.querySelector("button").querySelector("i");

const keysDiv = document.getElementById("keys");
const calculatorKeys = keysDiv.querySelectorAll(".key");
const calculatorOperator = keysDiv.querySelectorAll(".operator");

// making a output keys variable
let outputVariable = "";

// putting event listeners on all keys
allKeys.forEach((key) => {
	key.addEventListener("click", (e) => {
		if (outputInput.value === "0" || outputInput.value === "") {
			key0.style.pointerEvents = "none";
		}
	});
});

// putting the pressed key in output Value input
calculatorKeys.forEach((key) => {
	const keyValue = key.innerText;
	key0.style.pointerEvents = "none";

	key.addEventListener("click", (e) => {
		if (outputInput.value === "0") {
			outputInput.value = keyValue;
			return;
		}

		outputInput.value += keyValue;
		key0.style.pointerEvents = "all";
	});
});

// putting the pressed operator in output Value input
calculatorOperator.forEach((key) => {
	key.addEventListener("click", (e) => {
		const keyValue = e.target.innerText;
		if (keyValue === "=") {
			// Eval Error handeling
			try {
				// making the result "0" if input is empty
				if (eval(outputInput.value) === undefined) {
					outputInput.value = 0;
					return;
				}

				outputInput.value = eval(outputInput.value);
			} catch (error) {
				outputInput.value = "SYNTAX ERROR";
			}

			return;
		} else if (keyValue === "C") {
			outputInput.value = "";
			key0.style.pointerEvents = "none";

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
