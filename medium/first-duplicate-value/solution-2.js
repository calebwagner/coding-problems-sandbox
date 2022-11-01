const array = [2, 1, 5, 2, 3, 3, 4]

function firstDuplicateValue(array) {
    for (let i = 0; i < array.length; i++) {
        let num = Math.abs(array[i])
        if (array[num - 1] < 0) return num
        array[num - 1] *= -1
    }
    return -1
}

firstDuplicateValue(array)



const arrayDupWithEx = [4, 3, 5, 2, 9, 3, 4]
const array2ndEx = [1, 2, 3, 4, 5, 1]
// [-1, -2, -3, -4, -5, 1]

function firstDuplicateValueCommented(array) {
    // loop thru all values in array
    for (let i = 0; i < array.length; i++) {

        // get the absolute value of this value of this value
        // bc it might of been changed to a negative
        let absValue = Math.abs(array[i])

        // array[absValue - 1] will give the index that maps to this value
        if (array[absValue - 1] < 0) return absValue

        array[absValue - 1] *= -1
    }
    return -1
}

/**
 * 1st iteration: array[i] = 4, num = 4, array[num - 1] = 2
 * 2nd iteration: array[i] = 3, num = 3, array[num - 1] = 5
 * 3rd iteration: array[i] = -5 , num = 5, array[num - 1] = 9
 * 4th iteration: array[i] = -2, num = 2 , array[num - 1] = 3
 * 5th iteration: array[i] = -9, num = 9, array[num - 1] = undefined
 * 6th iteration: array[i] = 3, num = 3, array[num - 1] = -5
 */