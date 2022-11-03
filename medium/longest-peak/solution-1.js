const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

function longestPeak(array) {
    longestPeakLength = 0;
    i = 1;
    while (i < array.length -1) {
      isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
      if (!isPeak) {
        i += 1
        continue
      }
      
      leftIdx = i - 2
      while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
        leftIdx -= 1      
      }
  
      rightIdx = i + 2
      while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
        rightIdx += 1      
      }
  
      currentPeakLength = rightIdx - leftIdx - 1;
      longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
      i = rightIdx;
    }
    return longestPeakLength
}

longestPeak(array)