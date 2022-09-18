function suffleArrayApproach1(arr) {
	for (let i = 0; i < arr.length; i++) {
		let r = Math.floor(Math.random() * arr.length);
		let temp = arr[i];
		arr[i] = arr[r];
		arr[r] = temp;
	}
	return arr;
}

console.log(suffleArrayApproach1([1, 2, 3]));