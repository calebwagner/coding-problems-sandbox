array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

function isValidSubsequence(array, sequence) {
const subSequence = []

  for(item of array) {
    if (sequence.includes(item)) {
      subSequence.push(item)
    }
  }
  return sequence.every((item, index) => item == subSequence[index]);
}

isValidSubsequence(array, sequence)