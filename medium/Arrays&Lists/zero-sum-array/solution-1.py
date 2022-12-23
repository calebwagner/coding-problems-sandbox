# O(n) time | O(n) space
def zeroSumSubarray(nums):
    sums = set([0])
    currentSum = 0
    for num in nums:
        currentSum += num
        if currentSum in sums:
           return True
        sums.add(currentSum)
        
    return False