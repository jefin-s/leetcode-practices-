/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let binary=n.toString(2).padStart(32,'0')
    let number=binary.split("").reverse().join("")
    let reverse=parseInt(number,2)
    return reverse
};

console.log(reverseBits(43261596))