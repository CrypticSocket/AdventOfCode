import dInput from "./dummyInput.js";
import input from "./actualInput.js";

let ProcessInput = (input) => {
	let equations = input.split("\n").map((x) => x.split(": "));
	return equations.map((x) => {
		x[0] = Number(x[0]);
		x[1] = x[1].split(" ").map(Number);
		return x;
	});
};

let GetCaliberationResult = (equations) => {
	let totalCalibratedResults = 0;
	let results = [];
	equations.forEach((equation) => {
		let [result, operands] = equation;
		let isPossibleEquation = CheckIfPossibleEquation(result, operands);
		totalCalibratedResults += isPossibleEquation ? result : 0;
		if (isPossibleEquation) results.push(result);
	});

	return totalCalibratedResults;
};

let CheckIfPossibleEquation = (result, operands) => {
	let isPossibleEquation = false;
	let remainingOperands = [...operands];
	let currentResult = remainingOperands.shift(); // 10                   // 190
	while (remainingOperands.length > 0) {
		let nextOperand = remainingOperands.shift(); // 19
		let newResult = currentResult * nextOperand; // 190
		isPossibleEquation = CheckIfPossibleEquation(result, [
			newResult,
			...remainingOperands,
		]);
		if (!isPossibleEquation) {
			newResult = currentResult + nextOperand;
			isPossibleEquation = CheckIfPossibleEquation(result, [
				newResult,
				...remainingOperands,
			]);
		}
		if (!isPossibleEquation) {
			newResult = Concatenate(currentResult, nextOperand);
			isPossibleEquation = CheckIfPossibleEquation(result, [
				newResult,
				...remainingOperands,
			]);
		}

		return isPossibleEquation;
	}

	if (currentResult == result) isPossibleEquation = true;

	return isPossibleEquation;
};

let Concatenate = (a, b) => {
	return Number(a.toString() + b.toString());
};

// let equations = ProcessInput(dInput);
let equations = ProcessInput(input);
let calibratedResults = GetCaliberationResult(equations);

console.log(calibratedResults);
// console.log(input);
