// O(n) time && O(n) space

let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10;

function twoNumberSum(array, targetSum) {
    const numbers = {}; // hash map
    for (const number of array) {
        const targetSumSubtracted = targetSum - number;
        if (targetSumSubtracted in numbers) {
            return [targetSumSubtracted, number];
        } else {
            numbers[number] = true;
        }
    }
    return [];
}

// example w/o hash map
function twoNumSum(array, targetSum) {
    for (let num of array) {
        const possibleNum = targetSum - num;
        if (array.includes(possibleNum) && possibleNum !== num) {
            return [num, possibleNum]
        }
    }
    return [];
}
