// generate order array from 1 to n
function createOrderArray(length) {
	let arr = [];
	for (let i = 1; i <= length; i++) {
		arr.push(i);
	}
	return arr;
}

function suffleArray(length) {
	let result = createOrderArray(length);

	for (let i = result.length - 1; i > 0; i--) {
		let r = Math.floor(Math.random() * (i + 1));
		let temp = result[r];
		result[r] = result[i];
		result[i] = temp;
	}
	return result;
}
