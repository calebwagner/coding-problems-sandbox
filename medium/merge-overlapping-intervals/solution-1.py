def mergeOverlappingIntervals(intervals):

    intervals.sort()
    j = 0

    for i in range(1, len(intervals)):

        if isOverlapping(intervals[j], intervals[i]):

            intervals[j] = [min(intervals[j][0], intervals[i][0]), max(intervals[i][1], intervals[j][1])]

        else:
            j += 1
            intervals[j] = intervals[i]

            
    return intervals[0: j + 1]
    

def isOverlapping(first_index, second_index):

    return second_index[0] <= first_index[1]