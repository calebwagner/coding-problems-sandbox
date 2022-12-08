def bubble_sort(arr):
    # Loop through the array, starting from the beginning and going to the second-to-last element
    for i in range(len(arr) - 1):
        # Loop through the array again, starting from the end and going to the element at index `i` + 1
        for j in range(len(arr) - 1, i, -1):
            # If the element at index `j` is less than the element at index `j` - 1, swap them
            if arr[j] < arr[j - 1]:
                arr[j], arr[j - 1] = arr[j - 1], arr[j]
    # Return the sorted array
    return arr
