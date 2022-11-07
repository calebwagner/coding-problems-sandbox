const string = "AAAAAAAAAAAAABBCCCCDD";

// O(n) time and O(n) space
function runLengthEncoding(string) {
    // using an array b/c strings are immutable ...
    // so newString += is "costly"
    const encodedStringChars = [];
    // b/c we're dealing with a non-empty string
    let charCount = 1;

    for (let i = 1; i < string.length; i++) {
        const currChar = string[i];
        const prevChar = string[i - 1];

        // 13A will be written like 9A4A to avoid confusion
        // so charCount can't be over 9
        if (currChar !== prevChar || charCount === 9) {
            encodedStringChars.push(charCount.toString());
            encodedStringChars.push(prevChar);
            charCount = 0;
        }
        charCount++;
    }
    // since the last run of letters won't enter the if statement ...
    // we need this to add the count and letter before returning
    encodedStringChars.push(charCount.toString());
    encodedStringChars.push(string[string.length - 1]);

    return encodedStringChars.join("");
}

runLengthEncoding(string)