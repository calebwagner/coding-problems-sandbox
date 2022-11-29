def isValidSubsequence(array, sequence):
    arrayIndex = 0
    sequenceIndex = 0

    while arrayIndex < len(array) and sequenceIndex < len(sequence):
        if array[arrayIndex] == sequence[sequenceIndex]:
            sequenceIndex += 1
        arrayIndex += 1

        
    return sequenceIndex == len(sequence)
