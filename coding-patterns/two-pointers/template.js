// sort the array
// set a left pointer to the first element of the array
// set a right pointer to the last element of the array
// loop through the array
// check if left and right add to target
// if their sum equals the target, return their indices
// if sum is less than the target, increase left pointer
// if sum is greater than the target, decrease right pointer

function twoPointer(array, target) {
    array.sort((a, b) => a - b);

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const currentSomething = array[left] + array[right];
        if (currentSomething === target) {
            return // return something
        } else if (currentSomething < target) {
            left++;
        } else if (currentSomething > target) {
            right--;
        }
    }
    return // if all else fails return this;
}