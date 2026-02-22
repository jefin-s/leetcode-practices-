public class Solution {
    public int Reverse(int x) {
         int rev=0;
        while(x!=0){
            int remainder=x%10;
             if (rev > int.MaxValue / 10 || rev < int.MinValue / 10)
                return 0;
             rev=rev*10+remainder;
            x=x/10;
        }
            return rev;
    }
}