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

// O(n*k)
function maxSum( arr, k){
    let max_sum = 0;

    for (let i = 0; i < arr.length - k + 1; i++) {
        let current_sum = 0;
        for (let j = 0; j < k; j++)
            current_sum += arr[i + j];

        // Update result if required.
        max_sum = Math.max(current_sum, max_sum);
    }

    return max_sum;
}

// O(n) w/o Math.max method
function maxSum(arr, k) {
    let max = 0;
    let sum = 0;
    // find initial sum of first k elements
    for (let i = 0; i < k; i++) {
        sum += arr[i];
        max = sum;
    }
    // iterate the array once
    // and increment the right edge
    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}