/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let newString=n.toString()
    let sum=0
    let product=1
    for(let numbers of newString)
    {
     product*=numbers
     sum+=Number(numbers)
    }

return product-sum
};