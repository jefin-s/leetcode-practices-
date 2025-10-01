/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum=0
     let count=0
    for(let numbers of nums)

    {
        if(numbers%2===0&&numbers%3===0)
        {
        sum+=numbers
        count++
    }
    }
    if(count===0)
    {
    return 0
    }
    return Math.floor(sum/count)

};
