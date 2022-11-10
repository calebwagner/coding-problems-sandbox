let array = [ 1, 2, 3, 4, 5, 6, 7 ];
let numOfRotations = 2;

function rotateArray(array, numOfRotations) {
	var newArray = new Array(array.length);
	
	let itemCount = 0;

	for (let i = numOfRotations; i < array.length; i++) {
		newArray[itemCount] = array[i];
		itemCount++;
	}

	for (let i = 0; i < numOfRotations; i++) {
		newArray[itemCount] = array[i];
		itemCount++;
    }

    return newArray;
}

rotateArray(array, numOfRotations);