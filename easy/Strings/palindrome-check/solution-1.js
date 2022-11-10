/**
 * 1) write a function that takes in a non-empty string that returns a boolean representing whether the string is a palindrome
 */

function isPalindrome(string) {
    if (string && typeof string !== "string") return

    let reversedString = string.split("").reverse().join("")

    if (reversedString === string) {
        return true
    }

    return false
}