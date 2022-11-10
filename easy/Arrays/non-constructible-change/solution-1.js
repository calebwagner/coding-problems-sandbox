const coins = [5, 7, 1, 1, 2, 3, 22]

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);

    let minChange = 0;

    for (let coin of coins) {
    if (coin > minChange + 1) {
        return minChange + 1
    }
    minChange += coin
  }

  return minChange + 1;
}

nonConstructibleChange(coins)