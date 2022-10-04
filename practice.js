let array = [3, 8, 5, 9, 10, 'bob', 35535, false]

function forLoopExample(array) {
    for (let i = 0; i <= array.length; i++) {
        console.log(array[i])
    } 
}

forLoopExample(array)


function forOfLoopExample(array) {
    for (let item of array) {
        console.log(item)
    }
}

forOfLoopExample(array)

array.forEach(function(currentValue, index, array) {
    console.log(currentValue, index, array)
})

array.forEach(function(currentValue, index, array) {
    console.log(currentValue, index, array)
})

array.map((currentValue, index, array) => {
    console.log(currentValue, index, array)
})