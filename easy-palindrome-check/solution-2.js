const string = "abcdcba"

function isPalindrome(string) {
    if (string && typeof string !== "string") return

    let reversedString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i]
  }
  return string === reversedString;
}

isPalindrome(string)