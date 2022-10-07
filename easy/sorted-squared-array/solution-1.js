array = [1, 2, 5, 6, 8, 9, 3]

function sortedSquaredArray(array) {
    let numSqrArray = []; 
    if (array.length == 0) return;
    array.sort((a, b) => a - b)
    for (let num of array) {
      let numSqr = num * num
      numSqrArray.push(numSqr)
    }
    return numSqrArray.sort((a, b) => a - b);
}

sortedSquaredArray(array)