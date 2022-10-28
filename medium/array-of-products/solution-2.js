array = [5, 1, 4, 2]

function arrayOfProducts(array) {
  let output = [];
  let leftProduct = 1;
  let rightProduct = 1;

    for (let i = 0; i < array.length; i++) {
    /**
     * leftProduct = ???
     * 1st iteration: 1
     * 2nd iteration: 5
     * 3rd iteration: 5
     * 4th iteration: 20
     */

    output.push(leftProduct)
    /**
     * 1st iteration: 5 = 1 * 5
     * 2nd iteration: 5 = 5 * 1
     * 3rd iteration: 20 = 5 * 4
     * 4th iteration: 40 = 20 * 2 never gets pushed though
     */
    leftProduct = leftProduct * array[i]
  }

    // output [1, 5, 5, 20]

    for (let i = array.length - 1; i >= 0; i--) {
    /**
     * 1st iteration: 20 = 20 * 1
     * 2nd iteration: 10 = 5 * 2
     * 3rd iteration: 40 = 5 * 8
     * 4th iteration: 8 = 1 * 8
     */
    output[i] = output[i] * rightProduct
        
    /**
     * 1st iteration: 2 = 1 * 2
     * 2nd iteration: 8 = 2 * 4
     * 3rd iteration: 8 = 8 * 1
     * 4th iteration: 40 = 8 * 5
     */
    rightProduct = rightProduct * array[i]
  }
  return output
}

arrayOfProducts(array) // [8, 40, 10, 20]