import dInput from "./dummyInput.js";
import input from "./actualInput.js";

let ProcessInput = (input) => {
	return input.split("\n").map((x) => x.split("").map(Number));
};

let GetPossibleDirections = (map) => {
	let directions = {};
	let startingPoints = [];
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[i].length; j++) {
			let currentHeight = map[i][j];
			directions[i + "," + j] = [];
			if (i + 1 < map.length && map[i + 1][j] - currentHeight == 1) {
				directions[i + "," + j].push([i + 1, j]);
			}
			if (i - 1 >= 0 && map[i - 1][j] - currentHeight == 1) {
				directions[i + "," + j].push([i - 1, j]);
			}
			if (j + 1 < map[i].length && map[i][j + 1] - currentHeight == 1) {
				directions[i + "," + j].push([i, j + 1]);
			}
			if (j - 1 >= 0 && map[i][j - 1] - currentHeight == 1) {
				directions[i + "," + j].push([i, j - 1]);
			}

			if (map[i][j] == 0) {
				startingPoints.push([i, j]);
			}
		}
	}

	return [directions, startingPoints];
};

let FindTotalTrails = (map, possibleDirections, startingPoints) => {
	let totalTrails = 0;
	startingPoints.forEach((point) => {
		let directions = possibleDirections[GetPoint(point)];
		let trailsFound = FindPossibleTrails(map, [...directions]);
		totalTrails += trailsFound;
		console.log("For ", GetPoint(point), " found ", trailsFound, " trails");
	});

	return totalTrails;
};

let FindPossibleTrails = (map, nextPoints, visitedHighestPoint = new Set()) => {
	let trailsFound = 0;
	while (nextPoints.length > 0) {
		let currentPoint = nextPoints.shift();
		let [i, j] = currentPoint;
		if (map[i][j] == 9) {
			// if (!visitedHighestPoint.has(GetPoint(currentPoint))) {
			// 	visitedHighestPoint.add(GetPoint(currentPoint));
			trailsFound += 1;
			// }
		} else {
			let directions = possibleDirections[GetPoint(currentPoint)];
			trailsFound += FindPossibleTrails(
				map,
				[...directions],
				visitedHighestPoint
			);
		}
	}
	return trailsFound;
};

let GetPoint = (point) => {
	return point[0] + "," + point[1];
};

// let map = ProcessInput(dInput);
let map = ProcessInput(input);
let [possibleDirections, startingPoints] = GetPossibleDirections(map);
let totalTrails = FindTotalTrails(map, possibleDirections, startingPoints);
console.log(totalTrails);
// console.log(input);
