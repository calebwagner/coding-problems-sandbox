array = [1, 2, 5, 6, 8, 9, 3]

function sortedSquaredArray(array) {
  array.sort((a, b) => a - b)

  let numSqrArray = [];

  if (array.length == 0) return;

  for (let num of array) {
    let numSqr = num * num
    numSqrArray.push(numSqr)
  }
  return numSqrArray.sort((a, b) => a - b);
}

sortedSquaredArray(array)