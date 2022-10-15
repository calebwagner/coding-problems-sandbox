const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;
function moveElementToEnd(array, toMove) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        if (array[right] !== toMove) {
            swap(left, right, array);
            left++
        } else {
            right--;
        }
    }
    return array;
}

function swap(left, right, array) {
    temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

moveElementToEnd(array, toMove)