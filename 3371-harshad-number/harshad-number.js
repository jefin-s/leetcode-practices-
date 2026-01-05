/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
      var newString=x.toString();
      let sum=0;
      for(let i=0;i<newString.length;i++){
          sum=sum+Number(newString[i]);

      }
      if(x%sum==0)
      {
      return sum;
      }
      else{
      return -1
      }
};