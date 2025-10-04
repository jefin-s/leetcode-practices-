/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let newArray=[]
    let kelvin=celsius+273.15
    newArray.push(kelvin)
    let fahrenheit=celsius*1.80+32.00
    newArray.push(fahrenheit)
    return newArray
    
    
};