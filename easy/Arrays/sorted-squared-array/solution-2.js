const array = [1, 2, 3, 5, 6, 8, 9]

function sortedSquaredArray(array) {
    // const sortedSquares = new Array(array.length).fill(0);
    const sortedSquares = [];

    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        // sortedSquares[index] = value * value;
        numSquared = value * value;
        sortedSquares.push(numSquared)
    }

    sortedSquares.sort((a, b) => a - b);
    return sortedSquares;
  }

  sortedSquaredArray(array)