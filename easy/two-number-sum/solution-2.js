// O(n) time && O(n) space

let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10;

function twoNumberSum(array, targetSum) {
    const numbers = {};
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

// let array = [3, 5, -4, 8, 11, 1, -1, 6]
// let targetSum = 10;

// function twoNumberSum(array, targetSum) {
//     const numbers = {};
//     for (const number of array) {
//         console.log(number)
//         const targetSumSubtracted = targetSum - number;
//         if (targetSumSubtracted in numbers) {
//             console.log("exiting the loop ...")
//             return [targetSumSubtracted, number];
//         } else {
//             console.log("else statement ...")
//             numbers[number] = true;
//         }
//     }
//     return [];
// }

// twoNumberSum(array, targetSum)