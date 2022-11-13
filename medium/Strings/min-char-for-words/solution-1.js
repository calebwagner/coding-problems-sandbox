function minimumCharactersForWords(words) {
    let minChars = [];
  
    for (let word of words) {
      let stor = [...minChars];
      for (let letter of word) {
        if (!stor.includes(letter)) {
          minChars.push(letter);
        } else {
          stor.splice(stor.indexOf(letter), 1)
        }
      }
    }
    return minChars;
  }
  