const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;
function moveElementToEnd(array, toMove) {
    let j = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== toMove) {
            array[j] = array[i];
            j++
        }
    }
    for (let i = j; i < array.length; i++) {
        array[i] = toMove;
    }
    return array
}

moveElementToEnd(array, toMove)