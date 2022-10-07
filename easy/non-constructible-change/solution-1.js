let coins = [5, 7, 1, 1, 2, 3, 22]

// [1, 1, 2, 3, 5, 7, 22]

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);

    let minChange = 0;

    for (let coin of coins) {
      // coin : 1, 1, 2, 3, 5, 7

      // minChange : 1, 2, 3, 5, 8, 13, 20

    if (coin > minChange + 1) {
        return minChange + 1
    }
      // minChange : 0, 1, 2, 4, 7, 12

        minChange += coin

      // minChange : 1, 2, 4, 7, 12, 19
  }

  return minChange + 1;
}

nonConstructibleChange(coins)