const string = "abcdcaf"

function firstNonRepeatingCharacter(string) {
    const charCount = {};

    // for (const char of string) {
    //     if (!(char in charCount)) charCount[char] = 0;
    //     charCount[char]++;
    // }

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (!(char in charCount)) charCount[char] = 0;
        charCount[char]++;
    }

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (charCount[char] === 1) return i;
    }
    return -1;
}

firstNonRepeatingCharacter(string)
