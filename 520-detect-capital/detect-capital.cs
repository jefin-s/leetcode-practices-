public class Solution {
    public bool DetectCapitalUse(string word) {
        

        bool ok= word.All(char.IsUpper)||word.All(char.IsLower)||(char.IsUpper(word[0]) && word.Skip(1).All(char.IsLower));
        return ok;

    }
}