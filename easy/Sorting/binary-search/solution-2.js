function binarySearch(arr, x) {
    arr.sort((a, b) => a - b);

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let mid = (start - (end - start) / 2);
        if (x === arr[mid]) {
            console.log(`target was found!`)
            return true
        } else if (x > mid) {
            start = mid + 1;
            console.log(`need to go higher!`)
        } else {
            end = mid - 1
            console.log(`need to go lower!`)
        }
    }
    return false;
}