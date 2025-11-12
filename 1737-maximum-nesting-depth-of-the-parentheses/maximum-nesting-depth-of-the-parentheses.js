/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {

    let newarray=s.split("")
    let length=0
    let maxDepth=0
    for(let i=0;i<s.length;i++){
        if(s[i]==="(")
        length++
        if(length>maxDepth)
        {
            maxDepth=length
        }
        else if (s[i]===')')
         length--
    }

return maxDepth
};