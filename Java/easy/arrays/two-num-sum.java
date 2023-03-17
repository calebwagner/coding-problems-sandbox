class Program {
    public static int[] twoNumberSum(int[] array, int targetSum) {
      Set<Integer> nums = new HashSet<>();
  
      for (int num : array) {
        int possibleMatch = targetSum - num;
  
        if (nums.contains(possibleMatch)) {
          return new int[] {possibleMatch, num};
        } else {
          nums.add(num);
        }
      }
      return new int[0];
    }
  }