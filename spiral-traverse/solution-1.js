array = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
]

function spiralTraverse(array) {
    let sortedArray = [];

    for (let i = 0; i < array.length; i++) {
        let newArray = array[i]
        for (let j = 0; j < newArray.length; j++) {
            sortedArray.push(newArray[j])
        }
    }
  
}

spiralTraverse(array)

// let sortedArray = [];

// for (let i = 0; i < array.length; i++) {
//     let newArray = array[i]
//     for (let j = 0; j < newArray.length; j++) {
//         sortedArray.push(newArray[j])
//     }
// }