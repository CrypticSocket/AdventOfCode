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

var sortAndFindDistance = (lists) => {
	let [list1, list2] = lists;
	let distance = 0;
	list1 = list1.sort((a, b) => a - b);
	list2 = list2.sort((a, b) => a - b);

	for (let i = 0; i < list1.length; i++) {
		distance += Math.abs(list1[i] - list2[i]);
	}
	return distance;
};

// console.log(dInput);
// console.log(input);
// let lists = processInput(dInput);
// let distance = sortAndFindDistance(lists);
// console.log("Dummy data : ", distance);

let lists = processInput(input);
let distance = sortAndFindDistance(lists);
console.log("Dummy data : ", distance);
