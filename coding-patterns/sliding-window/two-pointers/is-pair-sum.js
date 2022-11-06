function isPairSum(arr, value) {
    arr.sort((a, b) => a - b);

    // set a left pointer to the first element of the array
    // set a right pointer to the last element of the array
    // loop through the array; check if left and right add to target
    // if their sum equals the target, return their indices
    // if sum is less than the target, increase left pointer
    // if sum is greater than the target, decrease right pointer

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