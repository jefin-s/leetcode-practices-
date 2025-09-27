        /**
        * @param {string} s
        * @return {string}
        */
        var reverseWords = function(s) {

            let newArray=s.split(" ")
            let result=[]
            for(let i=0;i<newArray.length;i++)
            {
                let newWord=newArray[i]
                let reversedWord=""
                for(let j=newWord.length-1;j>=0;j--)
                {
                    reversedWord+=newWord[j]
                }
            result.push(reversedWord)
            }
            return result.join(" ")
        };

        console.log(reverseWords("Let's take LeetCode contest"))