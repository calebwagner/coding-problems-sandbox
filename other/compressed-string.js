function compressString(originalString) {
    let newString = "";
    let currentLetter = originalString[0];
    let counter = 0;
  
    for (let i = 0; i < originalString.length; i++) {
      if (currentLetter !== originalString[i]) {
        newString += currentLetter
        newString += counter > 1 ? counter : ""
        counter = 0
      }
      counter++
      currentLetter = originalString[i]
    }
  
    newString += currentLetter
    newString += counter
  
    return newString;
   };
   
   
   
  console.log(compressString("abbbbccddd"));
