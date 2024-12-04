import dInput from "./dummyInput.js";
import input from "./actualInput.js";

let ProcessInput = (input) => {
	return input.split("\n").map((x) => x.split(""));
};

let FindXMAS = (xmasArray) => {
	let rowLength = xmasArray.length;
	let xmasCount = 0;
	for (let i = 0; i < rowLength; i++) {
		let colLength = xmasArray[i].length;
		for (let j = 0; j < colLength; j++) {
			// Left to right || Right to left
			if (j + 4 <= rowLength) {
				xmasCount += isItAPossibleXmas(
					xmasArray[i].slice(j, j + 4).join("")
				);
			}
			// Top to bottom || Bottom to top
			if (i + 4 <= colLength) {
				xmasCount += isItAPossibleXmas(
					xmasArray[i][j] +
						xmasArray[i + 1][j] +
						xmasArray[i + 2][j] +
						xmasArray[i + 3][j]
				);
			}
			// Left to right diagonal
			if (i + 4 <= rowLength && j + 4 <= colLength) {
				let possibleString =
					xmasArray[i][j] +
					xmasArray[i + 1][j + 1] +
					xmasArray[i + 2][j + 2] +
					xmasArray[i + 3][j + 3];
				xmasCount += isItAPossibleXmas(possibleString);
			}
			// Right to left diagonal
			if (i + 4 <= rowLength && j - 4 >= -1) {
				let possibleString =
					xmasArray[i][j] +
					xmasArray[i + 1][j - 1] +
					xmasArray[i + 2][j - 2] +
					xmasArray[i + 3][j - 3];
				xmasCount += isItAPossibleXmas(possibleString);
			}
		}
	}
	return xmasCount;
};

let isItAPossibleXmas = (theString) => {
	let possibleXMAS = ["XMAS", "SAMX"];
	return possibleXMAS.indexOf(theString) > -1;
};

// let xmasArray = ProcessInput(dInput);
// let countFound = FindXMAS(xmasArray);
// console.log(countFound);

let xmasArray = ProcessInput(input);
let countFound = FindXMAS(xmasArray);
console.log(countFound);
