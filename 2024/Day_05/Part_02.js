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
	let invalidUpdates = [];
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
			if (!isValid) {
				invalidUpdates.push(update);
				break;
			}
		}
		if (isValid) {
			validUpdates.push(update);
		}
	});

	return [validUpdates, invalidUpdates];
};

let FixInvalidUpdates = (map, updates) => {
	let newUpdates = [];
	updates.forEach((update) => {
		for (let i = 0; i < update.length; i++) {
			const key = update[i];
			let indexOfKey = i;
			let values = map[key];
			if (values == null || values.length == 0) continue;
			for (let j = 0; j < values.length; j++) {
				// 1 2 4 5 3 6
				// 1 2    3   4 5   6
				const value = values[j];
				let indexOfValue = update.indexOf(value);
				if (indexOfValue == -1) continue;
				if (indexOfValue < indexOfKey) {
					let temp = [
						...update.slice(0, indexOfValue),
						key,
						...update.slice(indexOfValue, indexOfKey),
						...update.slice(indexOfKey + 1),
					];
					update = temp;
					indexOfKey = indexOfValue;
				}
			}
		}
		newUpdates.push(update);
	});

	return newUpdates;
};

let FindSumOfMiddlePages = (updates) => {
	let sum = 0;
	updates.forEach((update) => {
		sum += update[Math.floor(update.length / 2)];
	});

	return sum;
};

// let [rules, updates] = ProcessInput(dInput);
let [rules, updates] = ProcessInput(input);
let rulesMap = MakeRulesMap(rules);
let [validUpdates, invalidUpdates] = FindValidUpdates(rulesMap, updates);
let newValidUpdates = FixInvalidUpdates(rulesMap, invalidUpdates);
let sumOfMiddlePages = FindSumOfMiddlePages(newValidUpdates);
console.log("Sum : \n", sumOfMiddlePages);

let [a, b] = FindValidUpdates(rulesMap, newValidUpdates);
console.log(a.length, b.length);
