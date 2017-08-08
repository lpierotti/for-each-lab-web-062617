function iterativeLog(arr) {
	arr.forEach((ele, ind) => {
		console.log(`${ind}: ${ele}`)
	});
}

function iterate(callback) {
	var arr = [1,2,4,5];
	arr.forEach(callback);
	return arr;
}

function doToArray(arr, callback) {
	arr.forEach(callback);
}