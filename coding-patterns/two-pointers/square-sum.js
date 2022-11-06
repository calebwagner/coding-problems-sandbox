function squareTwoPointer(arr) {
    let result = []
    // create 2 pointers: i keeps track of negatives, j keeps track of positives
    let left = 0
    let right = arr.length - 1;
  
    while (left < arr.length && arr[right] < 0) {
      left++
      right = left - 1
    }
  
    while (left < arr.length && right >= 0) {
      if ((arr[right] * arr[right]) < (arr[left] * arr[left])) {
        result.push((arr[right] * arr[right]))
        right--
      } else {
        result.push((arr[left] * arr[left]))
        left++
      }
  
    }
  
    while (right >= 0) {
      result.push((arr[right] * arr[right]))
      right--
    }
  
    while (left < arr.length) {
      result.push((arr[left] * arr[left]))
      left++
    }
  
    return result
  }