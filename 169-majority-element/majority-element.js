/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let maxCount=0
    let majority=nums[0]
      for(let i=0;i<nums.length;i++)
      {
      let count=1
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i]==nums[j]){

            
            count++
           
            }
        }
            if(count>maxCount)
            {
                maxCount=count
                majority=nums[i]
            }
        
      }
      return majority
};