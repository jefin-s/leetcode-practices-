public class Solution {
    public int CountDigits(int num) {
        int count=0;
        int original=num;
        while(num>0)
        {
            int remainder=num%10;
            if(original%remainder==0)
            {
                count++;
            }
            num=num/10;
        }
        return count;
    }
}