import dInput from "./dummyInput.js";
import input from "./actualInput.js";

var processInput = (input) => {
	let firstList = [],
		secondList = [];
	input.split("\n").map((x) => {
		let [a, b] = x.split("   ");
		firstList.push(Number(a));
		secondList.push(Number(b));
	});
	return [firstList, secondList];
};

var findSimilarityScore = (lists) => {
	let [list1, list2] = lists;
	let score = 0;
	let occurrenceMap = {};

	for (let i = 0; i < list2.length; i++) {
		if (!occurrenceMap[list2[i]]) {
			occurrenceMap[list2[i]] = 1;
		} else {
			occurrenceMap[list2[i]] += 1;
		}
	}

	for (let i = 0; i < list1.length; i++) {
		if (occurrenceMap[list1[i]] != null) {
			score += list1[i] * occurrenceMap[list1[i]];
		}
	}

	return score;
};

// console.log(dInput);
// console.log(input);
// let lists = processInput(dInput);
// let score = findSimilarityScore(lists);
// console.log("Dummy data : ", score);

let lists = processInput(input);
let score = findSimilarityScore(lists);
console.log("Dummy data : ", score);
