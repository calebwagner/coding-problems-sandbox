function isPairSum(arr, value) {
    arr.sort((a, b) => a - b);

    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while (leftPointer < rightPointer) {
        if (arr[leftPointer] + arr[rightPointer] == value) {
            return true;
        } else if (arr[leftPointer] + arr[rightPointer] < value) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }
    return false
}

