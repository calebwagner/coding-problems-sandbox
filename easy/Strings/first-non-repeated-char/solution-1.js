const string = "abcdcaf"

function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string.length; i++) {
      let found = false;
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j] && i !== j) {
        found = true
      }
    }
      if (!found) return i
  }
  return -1;
}

firstNonRepeatingCharacter(string)
