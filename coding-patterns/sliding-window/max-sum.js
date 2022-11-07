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
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        // this we give us the subset of n elements (n = size) in the array
        if (i >= size - 1 && currentSum > maxSum) {
            maxSum = currentSum;
            currentSum -= nums[i - (size - 1)]
        }
    }
    return maxSum
}

function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;

    for (i = 0; i < arr.length; i++) {
        windowSum += arr[i]; // add the next element
        // slide the window, no need to slide if we've not hit the window size of 'k'
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart]; // subtract the element going out
            windowStart += 1; // slide the window ahead
        }
    }
    return maxSum;
}

max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])

max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])