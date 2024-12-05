import dInput from "./dummyInput.js";
import input from "./actualInput.js";

let ProcessInput = (input) => {
	let [rules, updates] = input.split("\n\n");
	rules = rules.split("\n").map((x) => x.split("|").map(Number));
	updates = updates.split("\n").map((x) => x.split(",").map(Number));
	return [rules, updates];
};

let MakeRulesMap = (rules) => {
	let map = {};
	for (let i = 0; i < rules.length; i++) {
		let [key, value] = rules[i];
		if (!map[key]) {
			map[key] = [];
		}
		map[key].push(value);
	}
	return map;
};

let FindValidUpdates = (rulesMap, updates) => {
	let validUpdates = [];
	updates.forEach((update) => {
		let isValid = false;
		for (let i = 0; i < update.length; i++) {
			let key = update[i];
			let allValues = rulesMap[key];
			if (allValues == null || allValues.length == 0) continue;
			isValid = allValues.every((value) => {
				return (
					update.indexOf(value) == -1 ||
					(update.indexOf(value) > -1 && update.indexOf(value) > i)

					// Edge case : What if there are multiple of the same number?
				);
			});
			if (!isValid) break;
		}
		if (isValid) {
			validUpdates.push(update);
		}
	});

	return validUpdates;
};

let FindSumOfMiddlePages = (updates) => {
	let sum = 0;
	updates.forEach((update) => {
		sum += update[Math.floor(update.length / 2)];
	});

	return sum;
};

// let [rules, updates] = ProcessInput(dInput);
// let rulesMap = MakeRulesMap(rules);
// let validUpdates = FindValidUpdates(rulesMap, updates);
// let sumOfMiddlePages = FindSumOfMiddlePages(validUpdates);
// console.log("Sum : \n", sumOfMiddlePages);

let [rules, updates] = ProcessInput(input);
let rulesMap = MakeRulesMap(rules);
let validUpdates = FindValidUpdates(rulesMap, updates);
let sumOfMiddlePages = FindSumOfMiddlePages(validUpdates);
console.log("Sum : \n", sumOfMiddlePages);
