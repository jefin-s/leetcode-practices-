public class Solution {
    public int Fib(int n) {

        if(n<=1)
        return n;
       int first=0;
       int second=1;
       int sum; 

       for(int i=2;i<=n;i++){
        sum=first+second;
        first=second;
        second=sum;
       }
       return second;
    }
}