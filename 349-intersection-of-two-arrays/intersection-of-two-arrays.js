/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let numbers1=new Set(nums1)
    let numbers2=new Set(nums2)
    let intersectedset=new Set([...numbers1].filter(x=>numbers2.has(x)))
    let intersectedArray=[...intersectedset]
    return intersectedArray
    
};