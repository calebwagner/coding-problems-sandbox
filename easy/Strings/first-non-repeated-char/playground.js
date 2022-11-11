" a b c d c a f "

function firstNonRepeatingCharacter(string) {
for (let i = 0; i < string.length; i++) {
    let element1 = string[i];
    let isFound = false;
    for (let j = 0; j < string.length; j++) {
        let element2 = string[j];
        if (element1 === element2 && i !== j) {
            isFound = true
        }
    }
    if (!isFound) return i
}
    return -1;
}