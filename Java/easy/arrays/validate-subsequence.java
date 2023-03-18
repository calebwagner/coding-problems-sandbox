class Program {
    public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {
      int sequenceIndex = 0;
      for (var value : array) {
        if (sequenceIndex == sequence.size()) {
          break;
        }
        if (sequence.get(sequenceIndex).equals(value)) {
          sequenceIndex++;
        }
      }
      return sequenceIndex == sequence.size();
    }
  }