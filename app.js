//Disabling the submit button
const disable = () => {
	let inputNumber = document.getElementById('digits').value;
	let submitButton = document.getElementById("btn");
	let numberTrim = inputNumber.trim("");         //remove/trim spaces, both left and right
	const numberArray = numberTrim.split("");      //split numbers to return array
	const numberLength = numberArray.length

	if (numberLength == 3) {   //checking for length if is equal to 3 digits
		submitButton.style.background = "#0959c9";
	}

	else if (isNaN(inputNumber)) {
		submitButton.style.background = "#0959c9";
	}

	else {
		submitButton.style.background = "white";
	}
}

const armstrong = () => {
	let inputNumber = document.getElementById('digits').value;
	let submitButton = document.getElementById("btn");
	let numberTrim = inputNumber.trim("");     //remove/trim spaces, both left and right
	const numberArray = numberTrim.split(""); //split numbers to return array
	const numberLength = numberArray.length

	let error = document.getElementById("error");
	let sample = document.getElementById("sample");
	let result = document.getElementById("result");

	if (inputNumber == "") {
		error.innerHTML = "Enter your values";
		error.style.color = "red";
		sample.innerHTML = ""
		result.innerHTML = "";
	}

	else if (parseInt(inputNumber) < 0) {
		error.innerHTML = "Enter a positive number";
		error.style.color = "red";
		sample.innerHTML = "";
		result.innerHTML = "";
	}

	else if (inputNumber.trim() == "") {          //remove/trim spaces, both left and right
		error.innerHTML = "Please Enter a real Value";
		error.style.color = "red";
		sample.innerHTML = "";
		result.innerHTML = "";
	}

	// checking input number is not a number
	else if (isNaN(inputNumber)) {
		error.innerHTML = "Numbers Only";
		error.style.color = "red";
		sample.innerHTML = "";
		result.innerHTML = "";
	}
	//checking if the input number is less or greater than 3. 
	else if (numberLength > 3 || numberLength < 3) {
		sample.innerHTML = "";
		error.innerHTML = "Numbers should be 3 digits only";
		error.style.color = "red";
		result.innerHTML = "";
	}

	else {
		let sum;
		let sumTotal = 0
		for (let i in numberArray) {
			sum = numberArray[i] ** 3;
			sumTotal += sum
		}


		if (sumTotal == inputNumber) {
			error.innerHTML = "";
			result.innerHTML = `${inputNumber} is an Armtrong number`;
			sample.innerHTML = `${numberArray[0]}**3 + ${numberArray[1]}**3 + ${numberArray[2]}**3 = ${sumTotal}`;
		}
		else {
			sample.innerHTML = "";
			error.innerHTML = "Wrong Number!!";
			error.style.color = "red";
			result.innerHTML = `Total sum of the cube is ${sumTotal}, Therefore ${inputNumber} is not an Armstrong number`;
		}
	}
}

