array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];

function isMonotomic(array) {
    if (array.length == 1) return true;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            console.log("continue ...")
        } else {
            return false
        }
    }
    return true
}

isMonotomic(array)