function isValidSubsequence(array, sequence) {
    let sequenceIndex = 0;

    for (const value of array) {
        if (sequenceIndex === sequence.length) break;

        if (sequence[sequenceIndex] === value) sequenceIndex++;
    }
    return sequenceIndex === sequence.length
}