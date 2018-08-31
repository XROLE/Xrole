// ========================================== MY SOSRT
// Write a mySort function which takes in an array integers, and should return an array of the inputed integers sorted such that the odd numbers come first and even numbers come last.
    // For exampl1e:
    // mySort( [90, 45, 66, 'bye', 100.5] )
    // should return
    // [45, 66, 90, 100]
    // =============================================== ANSWERS
    function mySort(num) { 
        let odd = [];
        let even = [];
        let result = [];        
        if (!Array.isArray(num)) { 
            return "Please input an array";
        } else { 
            for (let counter = 0; counter < num.length; counter++) {
                if (typeof num[counter] === 'string') {
                    num.splice(counter, 0);
                } else if (Math.floor(num[counter]) % 2 === 0) {
                    even.push(Math.floor(num[counter]));
                } else {
                    odd.push(num[counter]);
                }
            }
        }
        
        let newOdd = odd.sort(function(a,b) {return a-b}); 
        let newEven = even.sort(function(a,b) {return a-b}); 
        return result = newOdd.concat(newEven);       
    }