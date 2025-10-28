/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let x=command.replaceAll("()","o")
    let y=x.replaceAll("(","")
    let z=y.replaceAll(")","")
    return z
  
};