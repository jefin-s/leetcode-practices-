/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let newArray=s.trim().split(" ")
    let lastword=newArray[newArray.length-1]
    return lastword.length
};

console.log(lengthOfLastWord("Hello World"))