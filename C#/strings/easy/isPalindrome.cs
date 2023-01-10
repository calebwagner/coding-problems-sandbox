public class Program {
    public static bool IsPalindrome(string str) {
        string reverseString = "";
        for (int i = str.Length - 1; i >= 0; i--) {
            reverseString += str[i];
        }
        return str.Equals(reverseString);
    }
}