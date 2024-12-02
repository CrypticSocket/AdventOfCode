import dInput from "./dummyInput.js";
import input from "./actualInput.js";

let processInput = (input) => {
	return input.split("\n").map((x) => x.split(" ").map(Number));
};

let determineSafety = (reports) => {
	let safeCount = 0;
	let unsafe = [];
	reports.forEach((report) => {
		let isSafe = ReportSafety(report);
		if (isSafe) {
			safeCount++;
		} else {
			unsafe.push(report);
		}
	});
	console.log("Unsafe found : ", unsafe.length);
	safeCount += CheckIfActuallyUnsafe(unsafe);
	return safeCount;
};

let ReportSafety = (report) => {
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

	return isSafe;
};

let CheckIfActuallyUnsafe = (reports) => {
	let newSafety = 0;
	let safe = [];
	reports.forEach((x) => {
		let possibleReports = [];
		for (let i = 0; i < x.length; i++) {
			let tempReport = [...x];
			tempReport.splice(i, 1);
			possibleReports.push(tempReport);
		}
		for (let i = 0; i < possibleReports.length; i++) {
			let isSafe = ReportSafety(possibleReports[i]);
			if (isSafe) {
				safe.push(x);
				newSafety++;
				break;
			}
		}
	});

	console.log("Corrected unsafe : ", newSafety);
	console.log(safe);
	return newSafety;
};

let reports = processInput(dInput);
let safeCount = determineSafety(reports);
console.log("Dummy output : ", safeCount);

console.log("\n|||||||||||||||||||||||||\n");

reports = processInput(input);
safeCount = determineSafety(reports);
console.log("Actual output : ", safeCount);
