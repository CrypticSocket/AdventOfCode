import fs from "fs";

let ProcessInput = (input) => {
	let regex = /mul\([0-9]+,[0-9]+\)/g;
	return input.match(regex);
};

let PerformInstructions = (instructions) => {
	let result = 0;
	instructions.forEach((instruction) => {
		instruction = instruction.replace(")", "").replace("mul(", "");
		let [a, b] = instruction.split(",").map(Number);
		result += a * b;
	});
	return result;
};

let dInput = fs.readFileSync("./Day_03/dummyInput.txt", "utf8");
let input = fs.readFileSync("./Day_03/actualInput.txt", "utf8");

// let instructions = ProcessInput(dInput);
// let result = PerformInstructions(instructions);
// console.log(result);

let instructions = ProcessInput(input);
let result = PerformInstructions(instructions);
console.log(result);
