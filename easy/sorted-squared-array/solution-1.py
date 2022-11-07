def sorted_squared_array(array):
    sorted_squares = [0 for _ in array]

    for idx in range(len(array)):
        value = array[idx]
        sorted_squares[idx] = value * value

    sorted_squares.sort()
    return sorted_squares