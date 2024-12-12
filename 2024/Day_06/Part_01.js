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

let FindDistinctPositions = (startingLocation, locations) => {
	let visitedPositions = new Set();
	let currentDirection = "UP";
	let [x, y] = startingLocation;
	visitedPositions.add(x + "," + y);
	while (
		x - 1 > -1 &&
		y - 1 > -1 &&
		x + 1 < locations.length &&
		y + 1 < locations[0].length
	) {
		switch (currentDirection) {
			case "UP":
				if (locations[x - 1][y] != "#") {
					x--;
				} else {
					currentDirection = NextDirection[currentDirection];
				}
				break;
			case "DOWN":
				if (locations[x + 1][y] != "#") {
					x++;
				} else {
					currentDirection = NextDirection[currentDirection];
				}
				break;
			case "LEFT":
				if (locations[x][y - 1] != "#") {
					y--;
				} else {
					currentDirection = NextDirection[currentDirection];
				}
				break;
			case "RIGHT":
				if (locations[x][y + 1] != "#") {
					y++;
				} else {
					currentDirection = NextDirection[currentDirection];
				}
				break;
		}
		visitedPositions.add(x + "," + y);
	}
	return visitedPositions.size;
};

// let locations = ProcessInput(dInput);
let locations = ProcessInput(input);
let startingLocation = FindStartingPosition(locations);
let positions = FindDistinctPositions(startingLocation, locations);
console.log(positions);
