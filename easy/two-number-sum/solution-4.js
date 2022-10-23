function twoNumberSum(array, targetSum) {
    const seen = new Set();

    for (let num of array) {
        const complement = targetSum - num;
        if (seen.has(complement)) {
            return [num, complement];
        }
        seen.add(num);
    }
    return [];
}