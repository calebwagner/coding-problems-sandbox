const arr = [10, 20, 30, 40, 50, 60, 70];
const k = 3;

// O(n)
function maxSum(arr, k) {
    let tempSum = 0;
    let maxSum = 0;

    // loops 3 times up to 30
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    // maxSum = 10 + 20 + 30 = 60
    tempSum = maxSum;

    // start at index 3 starting where we left off
    for (let i = k; i < arr.length; i++) {
        tempSum = tempSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

  return maxSum;
}

// O(n^2)
function maxSum( arr, k){
    let maxSum = 0;

    for (let i = 0; i < arr.length - k + 1; i++) {
        let currentSum = 0;
        for (let j = 0; j < k; j++)
        currentSum += arr[i + j];

        // Update result if required.
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}

// O(n) w/o Math.max method
function maxSum(arr, k) {
    let maxSum = 0;
    let currentSum = 0;
    // find initial sum of first k elements
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
        maxSum = currentSum;
    }
    // iterate the array once
    // and increment the right edge
    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}

// O(n)
const nums = [1, 2, 3, 5, 4, 8, 6, 2];
const size = 3;
function maxSubArraySum(nums, size) {
    let currentSum = 0;
    let maxSumSeen = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (i >= size - 1) {
            maxSumSeen = Math.max(currentSum, maxSumSeen);
            currentSum -= nums[i - (size - 1)]
        }
    }
    return maxSumSeen
}