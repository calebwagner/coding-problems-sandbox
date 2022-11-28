def twoNumberSum(array, targetSum):
    nums = {}

    for num in array:
        maybeMatch = targetSum - num
        if maybeMatch in nums:
            return [maybeMatch, num]
        else: 
            nums[num] = True
    return []