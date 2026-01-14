public class Solution {
    public string TruncateSentence(string s, int k) {
        string[] newArray=s.Split(' ');
         string result=String.Join(" ",newArray.Take(k));
         return result;
    
    }
}