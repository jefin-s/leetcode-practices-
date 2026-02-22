public class Solution {
    public bool IsHappy(int n) {
        while(n!=1&&n!=4){
        int sum=0;
        while(n>0)
        {
            int remainder=n%10;
            int square=remainder*remainder;
            sum=sum+square;
            n=n/10;
          
        }
        
         n=sum;
        }
         if(n==1)
         return true;
         return false;
    }
}