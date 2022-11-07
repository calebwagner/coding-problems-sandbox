function smallest_subarray_sum(arr, sum) {
    let windowSum = 0;
    let minLength = Infinity;
    let windowStart = 0;

    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i]; // add the next element
        // shrink the window as small as possible until the 'window_sum' is smaller than 's'
        while (windowSum >= sum) {
            minLength = Math.min(minLength, i - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }

    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
}


smallest_subarray_sum([2, 1, 5, 2, 3, 2], 7);
smallest_subarray_sum(7, [2, 1, 5, 2, 8]);
smallest_subarray_sum(8, [3, 4, 1, 1, 6]);