function binarySearch(arr, x) {
    arr.sort((a, b) => a - b);

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let middle = (start - (end - start) / 2);
        if (x === arr[middle]) {
            return true
        } else if (x > middle) {
            start = middle + 1;
        } else {
            end = middle - 1
        }
    }
    return false;
}