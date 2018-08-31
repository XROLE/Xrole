// ========================================== NINJA'S RERTURN
// Write a function which will take two integers X, Y arguments and will return:
    // If X is greater than Y return even numbers between X and Y.
    // When X is less that Y, return odd numbers between X and Y
    // When X and wy are both odd numbers, return multiples of A between X and Y
    // find the largest number
    // find the smallest number
    // When they are both even numbers, return the average value

    // =============================================== ANSWERS
    function ninjRetrun(x, y){
        let ans = [];
        if(x > y){
            for(let i = y + 1; i < x; i++){
               if(i % 2 === 0){
                   ans.push(i);
               }
            }
            return ans;
        }
            for (let i = x; i < y; i++){
                if(i % 2 !== 0){
                    ans.push(i)
                }
            }
        return ans;
    }
    console.log('>>>>',ninjRetrun(5, 20));