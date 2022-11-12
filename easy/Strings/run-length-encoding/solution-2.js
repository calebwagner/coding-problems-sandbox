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


function runLengthEncoding2(string) {
    let newString = [];
    let counter = 1;

    for (let i = 0; i < string.length; i++) {
      if (string[i] !== string[i + 1] || counter === 9) {
          newString.push(string[i], counter)
          counter = 0;
      }
          counter++
    }
    return newString.join("")
  }