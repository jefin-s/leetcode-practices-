/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let newArray=[]
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]%2==0)

    {
         newArray.push(0)
    }
    else
    {
  newArray.push(1)
    }
    }
    return newArray.sort((a,b)=>a-b)
    
};