import fs from "fs";

const dInput = fs.readFileSync("./Day_09/dummyInput.txt", "utf-8");
const input = fs.readFileSync("./Day_09/actualInput.txt", "utf-8");

let ProcessInput = (input) => {
	let memoryMap = {};
	let sizeMap = {};
	let isBlock = true;
	let id = 0;
	let index = 0;
	for (let i = 0; i < input.length; i++) {
		let size = Number(input[i]);
		memoryMap[index] = {
			blockName: isBlock ? id : ".",
			size: size,
			next: index + 1,
		};
		if (isBlock) {
			sizeMap[id] = [size, index];
		}
		isBlock = !isBlock;
		id += isBlock ? 0 : 1;
		index++;
	}

	memoryMap[index - 1]["next"] = null;

	return [memoryMap, sizeMap, id - 1, index];
};

let DefragmentMap = (map, sizeMap, maxId, size) => {
	let j = maxId;
	while (j > 0) {
		let sizeRequired = sizeMap[j][0];
		let maxIndex = sizeMap[j][1];
		let swapped = false;
		let index = 0;
		let previousIndex = null;
		while (map[index] != null) {
			if (
				map[index]["blockName"] == "." &&
				map[index]["size"] >= sizeRequired &&
				index < maxIndex &&
				!swapped
			) {
				map[index]["size"] -= sizeRequired;
				map[size] = {
					blockName: j,
					size: sizeRequired,
					next: index,
				};
				map[previousIndex]["next"] = size;
				swapped = true;
				size++;
			}
			if (swapped && map[index]["blockName"] == j) {
				map[index]["blockName"] = ".";
				break;
			}
			previousIndex = index;
			index = map[index]["next"];
		}

		// Clean up the list
		index = 0;
		while (map[index] != null) {
			if (
				map[index]["blockName"] == "." &&
				map[map[index]["next"]] != null &&
				map[map[index]["next"]]["blockName"] == "."
			) {
				map[index]["size"] += map[map[index]["next"]]["size"]; // add the size of the next one to this
				map[index]["next"] = map[map[index]["next"]]["next"];
				// map[map[index]["next"]] = null; // Free that space
			}
			index = map[index]["next"];
		}
		j--;
	}
};

let FindChecksum = (map, length) => {
	let checkSum = 0;
	let position = 0;
	let index = 0;
	while (map[index] != null) {
		let node = map[index];
		let [value, reps] = [node["blockName"], node["size"]];
		for (let i = 0; i < reps; i++) {
			if (value != ".") {
				checkSum += position * value;
			}
			position++;
		}
		index = node["next"];
	}

	return checkSum;
};

// To validate
let PrintMemoryMap = (map) => {
	let index = 0;
	let mapString = "";
	while (map[index] != null) {
		let node = map[index];
		mapString += [node["blockName"], node["size"]];
		mapString += " -> ";
		index = node["next"];
	}

	console.log(mapString);
};

// let [memoryMap, sizeMap, maxID, listSize] = ProcessInput(dInput);
let [memoryMap, sizeMap, maxID, listSize] = ProcessInput(input);
// let [memoryMap, mapLength] = ProcessInput(input);
// console.log(maxID, listSize);
// PrintMemoryMap(memoryMap);
DefragmentMap(memoryMap, sizeMap, maxID, listSize);
// PrintMemoryMap(memoryMap);
// console.log(memoryMap);
let checkSum = FindChecksum(memoryMap);
console.log(checkSum);
// console.log(input);
