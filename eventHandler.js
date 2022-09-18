const approach2 = document.getElementById("approach2");
const approach3 = document.getElementById("approach3");

approach2.addEventListener("click", () => {
	const worker = new Worker('worker.js', { name: 'approach2' });
	const resultApproach2 = document.getElementById("resultApproach2");

	worker.postMessage({ times: 100, length: 10000 });
	worker.onmessage = (e) => {
		resultApproach2.innerHTML += `<h3 id='subResultApproach2'>${e.data.result}</h3>`;
	}
});

approach3.addEventListener("click", () => {
	const worker = new Worker('worker.js', { name: 'approach3' });
	let resultApproach3 = document.getElementById("resultApproach3");

	worker.postMessage({ length: 10000 });
	worker.onmessage = (e) => {
		console.log(`${e.data.result}`);
		resultApproach3.innerHTML += `<h3 id='subResultApproach3'>${e.data.result}</h3>`;
	}
});