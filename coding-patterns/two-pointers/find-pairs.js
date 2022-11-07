function findPairs(array, target) {
    let start = 0;
    let end = array.length - 1;
    let pairs = [];
  
    while (start < end) {
      if (array[start] + array[end] === target) {
        pairs.push([start, end]);
        start++;
        end--;
      } else if (array[start] + array[end] < target) {
        start++;
      } else {
        end--;
      }
    }
    return pairs;
  }