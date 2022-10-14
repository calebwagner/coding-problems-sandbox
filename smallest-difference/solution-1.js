function smallestDiff(arr1, arr2) {
    for (let i = 0; i < arr1.lenght; i++) {
        for (let j = 0; j < arr2.lenght; j++) {
            if (arr1[i] == arr2[j]) {
                console.log(`found a pair ${arr1[i]} == ${arr2[j]}`)
            }

            let diff = (Math.abs(arr1[i] - arr2[j]))

            if (arr1[i] < arr2[j]) {
                j++
            }
        }
    }
}

function smallestDifference(arr1, arr2) {

}


function moveElementToEnd(array, toMove) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] == toMove) {
            newArray.push(array.splice(index, 1)[0]);
        }
    }
    return newArray;
}