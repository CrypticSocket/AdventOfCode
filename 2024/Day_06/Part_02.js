import dInput from "./dummyInput.js";
import input from "./actualInput.js";

let ProcessInput = (input) => {
	return input.split("\n").map((x) => x.split(""));
};

let FindStartingPosition = (locations) => {
	let [x, y] = [0, 0];
	for (let i = 0; i < locations.length; i++) {
		let index = locations[i].indexOf("^");
		if (index > -1) {
			x = i;
			y = index;
			break;
		}
	}

	return [x, y];
};

let NextDirection = {
	UP: "RIGHT",
	RIGHT: "DOWN",
	DOWN: "LEFT",
	LEFT: "UP",
};

let FindDistinctPositions = (
	startingLocation,
	locations,
	checkForLoops = false
) => {
	let visitedPositions = {};
	let currentDirection = "UP";
	let nextLocation = [];
	let [x, y] = startingLocation;
	visitedPositions[x + "," + y] = [currentDirection];
	while (
		x - 1 > -1 &&
		y - 1 > -1 &&
		x + 1 < locations.length &&
		y + 1 < locations[0].length
	) {
		switch (currentDirection) {
			case "UP":
				nextLocation = [x - 1, y];
				break;
			case "DOWN":
				nextLocation = [x + 1, y];
				break;
			case "LEFT":
				nextLocation = [x, y - 1];
				break;
			case "RIGHT":
				nextLocation = [x, y + 1];
				break;
		}

		if (locations[nextLocation[0]][nextLocation[1]] != "#") {
			[x, y] = nextLocation;
			if (
				checkForLoops &&
				visitedPositions[x + "," + y] != null &&
				visitedPositions[x + "," + y].indexOf(currentDirection) > -1
			) {
				return true;
			}
		} else {
			currentDirection = NextDirection[currentDirection];
		}

		if (!visitedPositions[x + "," + y]) {
			visitedPositions[x + "," + y] = [];
		}
		visitedPositions[x + "," + y].push(currentDirection);
	}
	if (checkForLoops) {
		return false;
	}
	return Object.keys(visitedPositions);
};

let CheckIfLoopable = (startingLocation, locations, positions) => {
	let loops = 0;
	positions.forEach((pos) => {
		let newLocations = JSON.parse(JSON.stringify(locations)); // Creating a value copy instead of reference
		let testPosition = pos.split(",").map(Number);
		newLocations[testPosition[0]][testPosition[1]] = "#";
		let isLoopable = FindDistinctPositions(
			startingLocation,
			newLocations,
			true
		);
		loops += isLoopable ? 1 : 0;
	});

	return loops;
};

// let locations = ProcessInput(dInput);
let locations = ProcessInput(input);
let startingLocation = FindStartingPosition(locations);
let positions = FindDistinctPositions(startingLocation, locations);
let loopCount = CheckIfLoopable(startingLocation, locations, positions);
// let part1Answer = positions.length;
console.log(loopCount);
