import dInput from "./dummyInput.js";
import input from "./actualInput.js";

let ProcessInput = (input) => {
	return input.split(" ").map(Number);
};

let CountStonesAfterBlinking = (stones, blinks) => {
	let count = 0;
	stones.forEach((stone) => {
		if (blinks == 0) {
			count += 1;
			return;
		}

		let newStones = [];
		if (stone == 0) {
			newStones.push(1);
		} else if (stone.toString().length % 2 == 0) {
			let newStoneLength = stone.toString().length / 2;
			newStones = [
				Number(stone.toString().slice(0, newStoneLength)),
				Number(stone.toString().slice(newStoneLength)),
			];
		} else {
			newStones.push(stone * 2024);
		}
		count += CountStonesAfterBlinking(newStones, blinks - 1);
	});
	return count;
};

// let stones = ProcessInput(dInput);
let stones = ProcessInput(input);
let count = CountStonesAfterBlinking(stones, 25);
console.log(count);