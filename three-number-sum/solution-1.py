# O(n^2) time && O(n) space

array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

def threeNumberSum(array, targetSum):
    array.sort()
    triples = []
    for i in range(len(array) - 2):
        left = i + 1
        right = len(array) - 1
        while left < right:
            currentSum = array[i] + array[left] + array[right]
            if currentSum == targetSum:
                triples.append([array[i], array[left], array[right]])
                left += 1
                right -= 1
            elif currentSum < targetSum:
                left += 1
            elif currentSum > targetSum:
                right -= 1
    return triples