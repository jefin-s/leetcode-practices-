/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if(s.length!=t.length)
     return false
     sortedS=s.split('').sort().join()
     sortedT=t.split('').sort().join()
     return sortedS==sortedT
     
};