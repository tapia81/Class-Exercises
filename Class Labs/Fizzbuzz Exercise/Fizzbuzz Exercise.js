// funtion only included to test all results
// main code is the switch statement
let result;
function divisble(x) {
	switch (true) {
		case x % 3 == 0 && x % 5 == 0:
			result = 'fizzbuzz';
			console.log(`${x} is divisible by both 3 and 5`);
			break;
		case x % 3 == 0:
			result = 'fizz';
			console.log(`${x} is divisible by 3 not 5`);
			break;
		case x % 5 == 0:
			result = 'buzz';
			console.log(`${x} is divisible by 5 not 3`);
			break;
		case x % 3 !== 0 && x % 5 !== 0:
			result = x;
			console.log(`${x} is not divisible by either 3 or 5`);
	}
}
divisble(15); //divisible by 3 and 5
divisble(9); //divisible by 3
divisble(20); //divisible by 5
divisble(22); //not divisible by either 3 and 5

// Part 2
// Taking what we learned from the conditionals practice with fizzbuzz, We are going to Loop through every number from 1 to max, applying those same exact rules to each number and, before ending the loop, printing out result to the console via console.log(result). A For Loop would work.
// funtion only included to test all results
// main code is the switch statement
function oneToMax(max) {
	console.log(`\nEvery Number from 1 to max currently max = ${max}`);
	for (let i = 0; i <= max; i++) {
		switch (true) {
			case i % 3 == 0 && i % 5 == 0:
				result = 'fizzbuzz';
				break;
			case i % 3 == 0:
				result = 'fizz';
				break;
			case i % 5 == 0:
				result = 'buzz';
				break;
			case i % 3 !== 0 && i % 5 !== 0:
				result = i;
		}
		console.log(`${result}`);
	}
}
oneToMax(50);
