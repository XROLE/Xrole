// ========================================== LONGEST WORD/
Write a function called longest which will take a string of space separated words and will return the longest one.
    // For example:
    // longest("This is Andela")
    // returns
    // "Andela"
    // and
    // longest("Brilliance is evenly distributed")
    // returns
    // distributed
    // =============================================== ANSWERS
   
    function longest(sentence){
        let arr = sentence.split(' ');
        let numArr = [];
        let result;
        arr.map(l => {
            numArr.push(l.length);
        });
        let max = numArr.reduce(function(a, b) {
            return Math.max(a, b);
        });
        arr.map(l => {
            if(l.length === max) {
                result = l;
            }
        });
        
        return result;
      }
      