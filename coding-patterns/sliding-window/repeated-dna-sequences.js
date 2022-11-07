function findRepeatedDnaSequences(string) {
    let counter = 0;
    let array = [];
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        counter++;
        newString += string[i]
        if (counter === 10) {
            array.push(newString)
            counter = 0
        }
    }
    return array
}