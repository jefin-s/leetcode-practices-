/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var count =0
    for(let i=0;i<nums.length;i++)
    {
       let o=nums[i].toString().split("").length
       if(o%2===0)
       {
        count++
       }
    }
    return count
};