this.addEventListener('message', function (e) {
	const data = e.data;
	let result = null;

	switch (this.name) {
		case 'approach2':
			importScripts('approach2.js');
			result = averageComplexityApproach2(data.times, data.length);
			break;
		case 'approach3':
			importScripts('approach3.js');
			result = suffleArray(data.length);
			break;
	};
	this.postMessage({ result });
	this.close();
}, false);