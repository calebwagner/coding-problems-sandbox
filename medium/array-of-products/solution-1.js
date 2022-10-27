array = [5, 1, 4, 2]

function arrayOfProducts(array) {
  const products = [];

  let i = 0;
  while (i < array.length) {
    const currNum = array.shift();
      console.log(currNum)
    const currentTotalProd = array.reduce((preVal, currVal) => preVal * currVal);
      console.log(currentTotalProd)
      console.log("-------------------------")
    products[i] = currentTotalProd;
    array.push(currNum);
    i++
  }
  return products;
}

arrayOfProducts(array)