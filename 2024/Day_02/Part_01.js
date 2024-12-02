import dInput from "./dummyInput.js";
import input from "./actualInput.js";

let processInput = (input) => {
	return input.split("\n").map((x) => x.split(" ").map(Number));
};

let determineSafety = (reports) => {
	let safeCount = 0;
	reports.forEach((report) => {
		let direction = "";
		let isSafe = true;
		for (let i = 1; i < report.length; i++) {
			let difference = report[i] - report[i - 1];
			// 1   3   5    3
			//   2   2   -2
			if (difference == 0) {
				isSafe = false;
				break;
			} else if (difference >= -3 && difference <= 3) {
				let currentDirection = difference < 0 ? "-" : "+";
				if (direction.length == 0) {
					direction = currentDirection;
				}

				if (direction != currentDirection) {
					isSafe = false;
					break;
				}
			} else {
				isSafe = false;
				break;
			}
		}

		if (isSafe) {
			safeCount++;
		}
	});

	return safeCount;
};

// let reports = processInput(dInput);
// let safeCount = determineSafety(reports);
// console.log("Dummy output : ", safeCount);

let reports = processInput(input);
let safeCount = determineSafety(reports);
console.log("Actual output : ", safeCount);
