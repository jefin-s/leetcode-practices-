/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let newArray=names.map((values,index)=>[values,heights[index]])
    newArray.sort((a,b)=>b[1]-a[1])
    let sortedArray=newArray.map((value)=>value[0])
    return sortedArray


};