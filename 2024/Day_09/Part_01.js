import fs from "fs";

const dInput = fs.readFileSync("./Day_09/dummyInput.txt", "utf-8");
const input = fs.readFileSync("./Day_09/actualInput.txt", "utf-8");

let ProcessInput = (input) => {
	let memoryMap = {}; //12345 -> 0..111....22222............3...4..5..6...7..8..9.. 10 ...
	let isBlock = true;
	let id = 0;
	let index = 0;
	for (let i = 0; i < input.length; i++) {
		let size = input[i];
		for (let j = 0; j < size; j++) {
			if (isBlock) {
				memoryMap[index++] = id;
			} else {
				memoryMap[index++] = ".";
			}
		}
		isBlock = !isBlock;
		if (!isBlock) {
			id++;
		}
	}

	return [memoryMap, index];
};

let DefragmentMap = (map, length) => {
	let i = 0,
		j = length - 1; // 1 2 9 3 4 5 6 7 . . 8 . .
	while (i < j) {
		//                 ^   ^
		if (map[i] != ".") {
			i++;
		} else {
			if (map[j] == ".") {
				j--;
			} else {
				map[i] = map[j];
				map[j] = ".";
			}
		}
	}
};

let FindChecksum = (map, length) => {
	let checkSum = 0;
	for (let i = 0; i < length; i++) {
		if (map[i] == ".") break;
		checkSum += i * map[i];
	}

	return checkSum;
};

// To validate
let PrintMemoryMap = (map) => {
	let index = 0;
	let mapString = "";
	while (map[index] != null) {
		mapString += map[index++];
	}

	console.log(mapString);
};

// let [memoryMap, mapLength] = ProcessInput(dInput);
let [memoryMap, mapLength] = ProcessInput(input);
// console.log(mapLength);
// PrintMemoryMap(memoryMap);
DefragmentMap(memoryMap, mapLength);
// PrintMemoryMap(memoryMap);
let checkSum = FindChecksum(memoryMap, mapLength);
console.log(checkSum);
// console.log(input);
