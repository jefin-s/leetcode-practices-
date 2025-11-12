/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
     let count=0
     const limit =Math.abs(a,b)

     for(let i=1;i<=limit;i++)
     {
if(a%i===0&&b%i===0){
        count++
     }
     }
     
    return count
};