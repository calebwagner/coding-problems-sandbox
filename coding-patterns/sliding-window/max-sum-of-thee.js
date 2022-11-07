const maxSumOfThree = arrayInput => {
    const reducer = (previous, current) => previous + current
    let currentSum = arrayInput.slice(0,4).reduce(reducer)
    let highestSum = currentSum
    for(let i = 1; i <= arrayInput.length - 3; i++){
      currentSum -= arrayInput[i - 1]
      currentSum += arrayInput[i + 4]
      highestSum = Math.max(highestSum, currentSum)
    }
    return highestSum
};

const smallestRepeatWindow = arrayInput => {
    let smallestWindow = Number.MAX_SAFE_INTEGER
    let window = []
    let left = 0;
    for(let right=0; right<arrayInput.length; right  ++){
      window.push(arrayInput[rightBound])
      while([...new Set(window)].length < window.length){
        if(arrayInput[left] === arrayInput[right]){
          smallestWindow = Math.min(smallestWindow, (right - left))
        }
        left++
        window.shift()
      }
    }
  return smallestWindow
  };