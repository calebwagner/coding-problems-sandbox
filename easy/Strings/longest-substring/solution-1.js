function longestSubstringWithoutDuplication(string) {
    let start = 0;
    let longest = [0,1];
    let charIdxMap = {};
  
    for (let i = 0; i < string.length; i++) {
      const endChar = string[i];

      if (endChar in charIdxMap) {
        start = Math.max(start, charIdxMap[endChar] + 1)
      }
  
      let diff_of_longest_substr = longest[1] - longest[0];
      let diff_of_curr_substr = i + 1 - start

      if (diff_of_longest_substr < diff_of_curr_substr) {
        longest = [start, i + 1]
      }
  
      charIdxMap[endChar] = i;
    }
  
    return string.slice(longest[0], longest[1])
  }
  
