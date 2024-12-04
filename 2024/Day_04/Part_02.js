import dInput from "./dummyInput.js";
import input from "./actualInput.js";

let ProcessInput = (input) => {
	return input.split("\n").map((x) => x.split(""));
};

let FindXMAS = (xmasArray) => {
	let rowLength = xmasArray.length;
	let xmasCount = 0;
	for (let i = 1; i < rowLength; i++) {
		let colLength = xmasArray[i].length;
		for (let j = 1; j < colLength; j++) {
			let ltrMasFound = false;
			let rtlMasFound = false;

			if (
				i - 1 >= 0 &&
				i + 1 < rowLength &&
				j - 1 >= 0 &&
				j + 1 < colLength
			) {
				let ltr =
					xmasArray[i - 1][j - 1] +
					xmasArray[i][j] +
					xmasArray[i + 1][j + 1];
				ltrMasFound = isItAPossibleXmas(ltr);

				let rtl =
					xmasArray[i - 1][j + 1] +
					xmasArray[i][j] +
					xmasArray[i + 1][j - 1];
				rtlMasFound = isItAPossibleXmas(rtl);
			}

			xmasCount += ltrMasFound && rtlMasFound ? 1 : 0;
		}
	}
	return xmasCount;
};

let isItAPossibleXmas = (theString) => {
	let possibleXMAS = ["MAS", "SAM"];
	return possibleXMAS.indexOf(theString) > -1;
};

// let xmasArray = ProcessInput(dInput);
// let countFound = FindXMAS(xmasArray);
// console.log(countFound);

let xmasArray = ProcessInput(input);
let countFound = FindXMAS(xmasArray);
console.log(countFound);
