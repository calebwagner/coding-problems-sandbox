array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10];

function isValidSubsequence(array, sequence) {
    let arrayIndex = 0;
    let sequenceIndex = 0;
    let subSequence = [];
    while (arrayIndex < array.length && sequenceIndex < sequence.length) {
        if (array[arrayIndex] === sequence[sequenceIndex]) {
            subSequence.push(array[arrayIndex])
          sequenceIndex++
        };
        arrayIndex++;
    }
    console.log(subSequence)
    return sequenceIndex === sequence.length
}

isValidSubsequence(array, sequence)