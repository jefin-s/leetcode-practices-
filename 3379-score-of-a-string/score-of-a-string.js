/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let score=0
    for(let i=0;i<s.length-1;i++)
    {
        let firstAscii=s.charCodeAt(i)
        let secondAscii=s.charCodeAt(i+1)
        score+=Math.abs(firstAscii-secondAscii)
    }
    return score
};