class Program {
    public boolean zeroSumSubarray(int[] nums) {
      HashSet<Integer> sums = new HashSet<Integer>();
      sums.add(0);
      int currentSum = 0;
      for (int num : nums) {
        currentSum += num;
        if (sums.contains(currentSum)) {
          return true;
        }
        sums.add(currentSum);
      }
      return false;
    }
  }