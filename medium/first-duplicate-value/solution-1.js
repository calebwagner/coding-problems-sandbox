const array = [2, 1, 5, 2, 3, 3, 4]

function firstDuplicateValue(array) {
    const found = {};

    for (num of array) {
        if (found[num]) {
            return num
        }
        found[num] = true;
    }
    return -1;
}

firstDuplicateValue(array)
