function binarySearch(array, target) {
    let left = 0;
    let right = array.length;
    let middle = null;
    let maybeMatch = null;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        maybeMatch = array[middle];

        if (target === maybeMatch) {
            return middle;
        } else if (target < maybeMatch) {
                right = middle - 1;
        } else {
            left = middle + 1
        }
    }
    return -1;
}