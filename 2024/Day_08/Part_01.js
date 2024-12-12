import dInput from "./dummyInput.js";
import input from "./actualInput.js";

let ProcessInput = (input) => {
	return input.split("\n").map((x) => x.split(""));
};

let FindAntennaLocations = (map) => {
	let antennaLocations = {};
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[i].length; j++) {
			let currentCharacter = map[i][j];
			if (currentCharacter == ".") continue;
			else {
				if (!antennaLocations[currentCharacter]) {
					antennaLocations[currentCharacter] = [];
				}
				antennaLocations[currentCharacter].push([i, j]);
			}
		}
	}
	return antennaLocations;
};

let FindNumberOfAntiNodes = (antennaLocations, mapBounds) => {
	let antinodesFound = new Set();
	let debugAntinodeLocation = [];
	let [maxI, maxJ] = mapBounds;
	let antennaFrequencies = Object.keys(antennaLocations);
	antennaFrequencies.forEach((frequency) => {
		let locations = antennaLocations[frequency];
		if (locations.length != 0 && locations.length != 1) {
			for (let i = 0; i < locations.length; i++) {
				for (let j = 0; j < locations.length; j++) {
					if (i == j) continue;

					let distance = [
						locations[i][0] - locations[j][0],
						locations[i][1] - locations[j][1],
					];
					let newAntinodeLocation = [
						locations[i][0] + distance[0],
						locations[i][1] + distance[1],
					];
					if (
						newAntinodeLocation[0] > -1 &&
						newAntinodeLocation[1] > -1 &&
						newAntinodeLocation[0] < maxI &&
						newAntinodeLocation[1] < maxJ
					) {
						antinodesFound.add(
							newAntinodeLocation[0] +
								"," +
								newAntinodeLocation[1]
						);
						debugAntinodeLocation.push([
							newAntinodeLocation[0],
							newAntinodeLocation[1],
							frequency,
						]);
						// What if two antinodes exist in the same location? Only unique
					}
				}
			}
		}
	});
	// console.log(debugAntinodeLocation);
	return antinodesFound.size;
};

let antennaMap = ProcessInput(input);
// let antennaMap = ProcessInput(dInput);
let antennaLocations = FindAntennaLocations(antennaMap);
let antiNodeCount = FindNumberOfAntiNodes(antennaLocations, [
	antennaMap.length,
	antennaMap[0].length,
]);
console.log(antiNodeCount);
