import dInput from "./dummyInput.js";
import input from "./actualInput.js";

let processInput = (input) => {
	return input.split("\n").map((x) => x.split(" ").map(Number));
};

let determineSafety = (reports) => {
	let safeCount = 0;
	reports.forEach((report) => {
		let isSafe = checkReportSafety(report);

		if (isSafe) {
			safeCount++;
		}
	});

	return safeCount;
};

let checkReportSafety = (report, depth = 0) => {
	let direction = "";
	let isSafe = true;
	let originalReport = [...report];
	let unsafe = [];

	for (let i = 1; i < report.length; i++) {
		let difference = report[i] - report[i - 1];
		// 1   3   5    3
		//   2   2   -2
		if (difference == 0) {
			if (depth == 1) {
				isSafe = false;
				break;
			} else {
				report = [...originalReport];
				report.splice(i, 1);
				let safety1 = checkReportSafety(report, 1);
				report = [...originalReport];
				report.splice(i - 1, 1);
				let safety2 = checkReportSafety(report, 1);
				if (safety1 || safety2) {
					isSafe = true;
					break;
				} else {
					isSafe = false;
					unsafe.push(originalReport);
					break;
				}
			}
		} else if (difference >= -3 && difference <= 3) {
			let currentDirection = difference < 0 ? "-" : "+";
			if (direction.length == 0) {
				direction = currentDirection;
			}

			if (direction != currentDirection) {
				if (depth == 1) {
					isSafe = false;
					break;
				} else {
					report = [...originalReport];
					report.splice(i, 1);
					let safety1 = checkReportSafety(report, 1);
					report = [...originalReport];
					report.splice(i - 1, 1);
					let safety2 = checkReportSafety(report, 1);
					report = [...originalReport];
					report.splice(i - 2, 1);
					let safety3 = checkReportSafety(report, 1);
					if (safety1 || safety2 || safety3) {
						isSafe = true;
						break;
					} else {
						isSafe = false;
						unsafe.push(originalReport);
						break;
					}
				}
			}
		} else {
			if (depth == 1) {
				isSafe = false;
				break;
			} else {
				report = [...originalReport];
				report.splice(i, 1);
				let safety1 = checkReportSafety(report, 1);
				report = [...originalReport];
				report.splice(i - 1, 1);
				let safety2 = checkReportSafety(report, 1);
				report = [...originalReport];
				report.splice(i + 1, 1);
				let safety3 = checkReportSafety(report, 1);
				if (safety1 || safety2 || safety3) {
					isSafe = true;
					break;
				} else {
					isSafe = false;
					unsafe.push(originalReport);
					break;
				}
			}
		}
	}
	// unsafe.length > 0 ? console.log(unsafe.join(",")) : null;
	return isSafe;
};

let reports1 = processInput(dInput);
let safeCount1 = determineSafety(reports1);
console.log("Dummy output : ", safeCount1);

let reports = processInput(input);
let safeCount = determineSafety(reports);
console.log("Actual output : ", safeCount);
