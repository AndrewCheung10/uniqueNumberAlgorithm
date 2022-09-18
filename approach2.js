// function suffleArrayApproach2(length) {
// 	let result = [];
// 	let set = new Set();

// 	while (result.length < length) {
// 		let r = 1 + Math.floor(Math.random() * length);
// 		if (!set.has(r)) {
// 			result.push(r);
// 			set.add(r);
// 		}
// 	}
// 	return result;
// }

function complexityCountApproach2(length) {
	let result = [];
	let set = new Set();
	let count = 0;

	while (result.length < length) {
		count++;
		let r = 1 + Math.floor(Math.random() * length);
		if (!set.has(r)) {
			result.push(r);
			set.add(r);
		}
	}
	return count;
}

function averageComplexityApproach2(times, length) {
	let count = 0;
	for (let i = 0; i < times; i++) {
		count += complexityCountApproach2(length);
	}
	return count / times;
}
