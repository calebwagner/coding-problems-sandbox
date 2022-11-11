const string =  "AAAAAAAAAAAAABBCCCCDD";

function runLengthEncoding(string) {
    let chars = [];
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        count++;

        if (string[i] !== string[i + 1]) {
            chars.push(count, string[i])
            count = 0;
        }
    }
    return chars.join("")
}

runLengthEncoding(string)