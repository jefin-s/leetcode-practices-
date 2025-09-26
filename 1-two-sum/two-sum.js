/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      let newArray=[]
      for(let i=0;i<nums.length-1;i++)
      {
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i]+nums[j]===target)

            {
                newArray.push(i,j)
            }
        }
      }
      return newArray
};


console.log(twoSum([2,7,11,15],9))