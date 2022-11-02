const array = [75, 105, 120, 75, 90, 135]

function maxSubsetSumNoAdjacent(array) {
    let previous = 0;
    let current = 0;
    for (const num of array) {
      let temp = current;
      if (num + previous > current) {
        current = num + previous
      }
      previous = temp
    }
    return current
  }


  maxSubsetSumNoAdjacent(array)