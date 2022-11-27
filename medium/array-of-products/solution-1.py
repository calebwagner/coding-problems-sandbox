def arrayOfProducts(array):
    products = [1 for _ in range(len(array))]

    leftPointer = 1
    for i in range(len(array)):
        products[i] = leftPointer
        leftPointer *= array[i]

    rightPointer = 1
    for i in reversed(range(len(array))):
        products[i] *= rightPointer
        rightPointer *= array[i]

    return products
