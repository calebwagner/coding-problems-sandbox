function isPalindrome(string) {
    let newString = []

    for (let i = string.length; i > 0 ; i--) {
        const char = string[i];
        newString += char
    }

    if (newString === string) return true;

    return false;
}