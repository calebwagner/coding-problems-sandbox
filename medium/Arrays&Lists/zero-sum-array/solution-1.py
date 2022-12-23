# O(n) time | O(n) space

nums = [-5, -5, 2, 3, -2]

def zeroSumSubarray(nums):
    sums = set([0])
    currentSum = 0
    for num in nums:
        currentSum += num
        if currentSum in sums:
           return True
        sums.add(currentSum)
        
    return False

zeroSumSubarray(nums)


# def zeroSumSubarray(nums):
#     sums = set([0])
#     currentSum = 0
#     for num in nums:
#         currentSum += num
#         if currentSum in sums:
#             print([nums[0+1], num])
#         sums.add(currentSum)

#     return False
