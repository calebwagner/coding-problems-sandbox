array = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
]

function spiralTraverse(array) {
    let results = [];
    let startRow = 0;
    endRow = array.length - 1;
    startCol = 0;
    let endCol = array[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            results.push(array[startRow][end])
        }
        for (let row = startRow + 1; row <= endRow; row++) {
            results.push(array[row][endCol])
        }
        for (let col = endCol - 1; col >= startCol; col--) {
            if (endRow > startRow) {
                results.push(array[endRow][col])
            }
        }
        for (let row = endRow - 1; row > startRow; row--) {
            if (endCol > startCol) {
                results.push(array[row][startCol])
            }
        }
        startRow += 1
        endRow -=
        startCol +=
        endCol -=
    }
    return result
}

spiralTraverse(array)

