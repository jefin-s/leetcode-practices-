    /**
    * @param {number} x
    * @return {boolean}
    */
    var isPalindrome = function(x) {
        let str=String(x)
        let newArray=str.split("")
        let start=0 , end=newArray.length-1
        while(start<end){
            if(newArray[start]!=newArray[end])
            {
             return false
            }
            else{
             start++ 
             end--
            }

        }
        return true
        
    };

    console.log(isPalindrome(121))