// O(nlog(n)) time && O(0) space

let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10;

function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]];
        }
        currentSum < targetSum ? left++ : right--;
    }
    return [];
}