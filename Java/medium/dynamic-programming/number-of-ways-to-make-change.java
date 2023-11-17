import java.util.*;

class Program {
  public static int numberOfWaysToMakeChange(int n, int[] denoms) {
    if (denoms.length == 0) return 0;

    int[] ways = new int[n + 1];
    Arrays.fill(ways, 0);
    ways[0] = 1;
    for (int denom : denoms) {
      for (int amount = 1; amount < ways.length; amount ++) {
        if (denom <= amount) {
          ways[amount] += ways[amount - denom];
        }
      }
    }
    return ways[ways.length - 1];
  }
}
