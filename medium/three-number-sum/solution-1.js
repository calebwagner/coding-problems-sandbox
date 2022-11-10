array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0;

function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b); // sort the array desc to asc
    let triplets = [];
    // loop thru the array and stop when i is the 3rd to last index in the array
    for (let i = 0; i < array.length - 2; i++) {
        // i = current value of index
        let left = i + 1; // 1 position left of i (left value)
        let right = array.length - 1; // last value
        while (left < right) {
            const currentSum = array[i] + array[left] + array[right];
            if (currentSum === targetSum) {
                triplets.push([array[i], array[left++], array[right--]]);
            }
            if (currentSum < targetSum) left += 1;
            if (currentSum > targetSum) right -= 1;
        }
    }
    return triplets;
}